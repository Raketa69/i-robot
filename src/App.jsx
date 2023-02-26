import './App.css';
import MenuPage from './pages/MenuPage/MenuPage';
import StoryPage from './pages/StoryPage/StoryPage';
import ScenePage from './pages/ScenePage/ScenePage';
import {Routes, Route} from 'react-router-dom'
import StagePage from './pages/StagePage/StagePage';

function App() {
  return (
  <>
    <div className="App"></div>

    <Routes>
      <Route path="/" element={<MenuPage/>}/>
      <Route path="/story" element={<StoryPage/>}/>
      <Route path="/story/scene" element={<ScenePage/>}/>
      <Route path="/story/scene/stage" element={<StagePage/>}/>
    </Routes>
  </>
  );
}

export default App;
