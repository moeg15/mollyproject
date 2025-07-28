import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import storyData from './data/storydata';

function App() {


  return (
    <div className="App">
      <LeftSide />
      {/* Pass a single scene */}
      <RightSide  storyData={storyData.start} />
    </div>
  );
}

export default App;
