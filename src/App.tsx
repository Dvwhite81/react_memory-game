import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import picService from './utils/api';
import Game from './Pages/Game';
import NavBar from './components/NavBar/NavBar';
import Setup from './Pages/Setup';
import './App.css';

function App() {
  const [gameCategory, setGameCategory] = useState('cats');
  const [gameNumCards, setGameNumCards] = useState('40');
  const [urls, setUrls] = useState([]);

  const handleSearch = async () => {
    const urls = await picService.getImageUrls(gameCategory);
    setUrls(urls);
  }

  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <Setup
            gameCategory={gameCategory}
            setGameCategory={setGameCategory}
            gameNumCards={gameNumCards}
            setGameNumCards={setGameNumCards}
            handleSearch={handleSearch}
          />
        } />
        <Route path="/game" element={<Game urls={urls} gameNumCards={parseInt(gameNumCards, 10)} />} />
      </Routes>
    </div>
  );
}

export default App;
