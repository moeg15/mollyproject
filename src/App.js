import { useState } from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import fullStoryData from './data/storydata';

function App() {
  const [currentNodeKey, setCurrentNodeKey] = useState("start");
  const [lastNodeKey, setLastNodeKey] = useState(null);
  const [score, setScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState({});

  // Get the current node's story data
  const currentStory = fullStoryData[currentNodeKey];

  const handleChoiceMade = (nextNodeKey) => {
    if (!currentStory || !currentStory.choices) return;

    // Save current score for the current node before moving on
    setScoreHistory(prev => ({
      ...prev,
      [currentNodeKey]: score
    }));

    // Find the chosen choice object
    const chosenChoice = currentStory.choices.find(choice => choice.next === nextNodeKey);

    let increment = 0;
    if (chosenChoice) {
      if (typeof chosenChoice.scoreIncrement === 'number') {
        increment = chosenChoice.scoreIncrement;
      } else if (Array.isArray(chosenChoice.scoreIncrement) && chosenChoice.scoreIncrement.length === 2) {
        const [min, max] = chosenChoice.scoreIncrement;
        increment = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }

    // Update score with increment
    setScore(prevScore => prevScore + increment);

    if (fullStoryData[nextNodeKey]) {
      setLastNodeKey(currentNodeKey);
      setCurrentNodeKey(nextNodeKey);

      // Restore score for the new node if exists, else 0
      if (scoreHistory[nextNodeKey] !== undefined) {
        setScore(scoreHistory[nextNodeKey]);
      } else {
        setScore(0);
      }
    } else {
      setLastNodeKey(currentNodeKey);
      setCurrentNodeKey(null);
    }
  };

  const restartGame = () => {
    setLastNodeKey(null);
    setCurrentNodeKey("start");
    setScore(0);
    setScoreHistory({});
  };

  const goBackToLastChoice = () => {
    if (lastNodeKey) {
      setCurrentNodeKey(lastNodeKey);
      if (scoreHistory[lastNodeKey] !== undefined) {
        setScore(scoreHistory[lastNodeKey]);
      } else {
        setScore(0);
      }
    }
  };

  return (
    <div className="App">
      <LeftSide />

      {/* Display Score */}
      <div style={{ position: 'fixed', top: 10, right: 10, color: '#0f0', fontWeight: 'bold', fontSize: '1.2rem', zIndex: 1000 }}>
        Score: {score}
      </div>

      {currentStory ? (
        <RightSide storyData={currentStory} onChoiceMade={handleChoiceMade} />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            fontSize: '3rem',
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
