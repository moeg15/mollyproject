export default function RightSide({  storyData }) {
  const bgimg = storyData.backgroundImage;
  const currentLine = storyData.talking[0];
  let isOn=true;
  if(!storyData){
    isOn= false;
  }

  return (
    <div className="rightside" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="gamehead"></div>

      {isOn && currentLine && (
        <div className="textBox">
          <div className="face">
            <img src={currentLine.character.image} alt={currentLine.character.name} />
          </div>
          <div className="text">
            <p>{currentLine.text}</p>
            <button className="nextButton">Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
