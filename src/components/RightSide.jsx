import { useState, useEffect } from 'react';

export default function RightSide({ storyData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOn, setIsOn] = useState(!!storyData);

  useEffect(() => {
    setCurrentIndex(0);
    setIsOn(!!storyData && storyData.talking.length > 0);
  }, [storyData]);

  const bgimg = storyData?.backgroundImage || '';
  const currentLine = storyData?.talking?.[currentIndex];

  const handleNext = () => {
    if (currentIndex + 1 < storyData.talking.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsOn(false);
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
      <div className="gamehead" />
      {isOn && currentLine && (
  <div className="textBox">
    <div className="face">
      <img
        src={currentLine.character.image}
        alt={currentLine.character.name}
      />
      <div className="character-name">{currentLine.character.name}</div> 
    </div>
    <div className="text">
      <p>{currentLine.text}</p>
      <button className="nextButton" onClick={handleNext}>
        Next
      </button>
    </div>
  </div>
)}

    </div>
  );
  
}
