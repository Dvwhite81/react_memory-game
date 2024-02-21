import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import picService from './utils/api';
import Game from './Pages/Game';
import NavBar from './components/NavBar/NavBar';
import Setup from './Pages/Setup';
import './App.css';

function App() {
  const [gameCategory, setGameCategory] = useState('cats');
  const [gameCards, setGameCards] = useState('40');
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
            gameCards={gameCards}
            setGameCards={setGameCards}
            handleSearch={handleSearch}
          />
        } />
        <Route path="/game" element={<Game urls={urls} gameCards={parseInt(gameCards, 10)} />} />
      </Routes>
    </div>
  );
}

export default App;
