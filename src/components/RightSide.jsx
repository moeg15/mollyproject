import { useState, useEffect } from 'react';
import { useTypedText } from '../hooks/useTypedText';



export default function RightSide({ storyData, onChoiceMade }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOn, setIsOn] = useState(!!storyData);
  const [isChoosing, setIsChoosing] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setIsChoosing(false);
    setIsOn(!!storyData && storyData.talking && storyData.talking.length > 0);
  }, [storyData]);

  const bgimg = isChoosing ? "/backgroundimgs/choicetime.png" : (storyData?.backgroundImage || '');
  const currentLine = storyData?.talking?.[currentIndex];
  const typedText = useTypedText(currentLine?.text || "", 25);


  const handleNext = () => {
    if (currentIndex + 1 < storyData.talking.length) {
      setCurrentIndex(currentIndex + 1);
    } else if (storyData.choices && storyData.choices.length > 0) {
      setIsChoosing(true);
    } else {
      setIsOn(false); // no more dialogue or choices
    }
  };

  const handleChoice = (nextKey) => {
    setIsChoosing(false);
    if (onChoiceMade) {
      onChoiceMade(nextKey);
    }
  };

  return (
    <div
      className="rightside"
      style={{
        backgroundImage: isOn ? `url(${bgimg})` : 'none',
        backgroundColor: isOn ? 'transparent' : '#777',
      }}
    >
      <div className="gamehead retro-borde">
        {isChoosing && storyData.choices && (
          <div className="choices">
            {storyData.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => handleChoice(choice.next)}
                style={{ margin: '0 8px', padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
              >
                {choice.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOn && !isChoosing && currentLine && (
        <div className="textBox retro-borde">
          <div className="face retro-borde">
            <img
              src={currentLine.character.image}
              alt={currentLine.character.name}
            />
            <div className="character-name">{currentLine.character.name}</div>
          </div>
          <div className="text retro-borde ">
          <p className='cursor typewriter'>{typedText}</p>

            <button className="nextButton" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
