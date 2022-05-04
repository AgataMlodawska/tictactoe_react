import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Game from './components/Game';
import BestScores from './components/BestScores';
import Main from './components/Main';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
    <BrowserRouter>

<Routes>
<Route path='/' element={<Main/>}/>
</Routes>
       <div className="Buttons">
        <Button className="Button">
        <Link to="/play" className='Link'>Play</Link>
          </Button>
          <Button className="Button">
          <Link to="/scores" className='Link'>Best Scores</Link>
          </Button>
          </div>
          <Routes>
          <Route path="/play" element={<Game />} />
          </Routes>
          <Routes>
        <Route path="/scores" element={<BestScores />} />
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
