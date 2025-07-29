import { useState } from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import fullStoryData from './data/storydata';

function App() {
  const [currentNodeKey, setCurrentNodeKey] = useState("start");
  const [lastNodeKey, setLastNodeKey] = useState(null);

  // Get the current node's story data
  const currentStory = fullStoryData[currentNodeKey];

  const handleChoiceMade = (nextNodeKey) => {
    if (fullStoryData[nextNodeKey]) {
      setLastNodeKey(currentNodeKey);   // Save current before changing
      setCurrentNodeKey(nextNodeKey);
    } else {
      setLastNodeKey(currentNodeKey);   // Save current before game over
      setCurrentNodeKey(null);           // No more story (game over)
    }
  };

  const restartGame = () => {
    setLastNodeKey(null);
    setCurrentNodeKey("start");
  };

  const goBackToLastChoice = () => {
    if (lastNodeKey) {
      setCurrentNodeKey(lastNodeKey);
    }
  };

  return (
    <div className="App">
      <LeftSide />
      {currentStory ? (
        <RightSide storyData={currentStory} onChoiceMade={handleChoiceMade} />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',       // fill viewport height to center vertically
            width: '100%',         // full width
            fontSize: '3rem',      // large text
            fontWeight: 'bold',
            textAlign: 'center',
            gap: '1rem',
            padding: '1rem'
          }}
        >
          <div>Game Over or no more story available</div>

          <button
            style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
            onClick={restartGame}
          >
            Restart Game
          </button>

          <button
            style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
            onClick={goBackToLastChoice}
            disabled={!lastNodeKey}
            title={lastNodeKey ? '' : 'No last choice to go back to'}
          >
            Go Back to Last Choice
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
