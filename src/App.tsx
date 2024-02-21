import { useState } from 'react';
import picService from './utils/api';
import { getRandomUrls } from './utils/helpers';
import Game from './Pages/Game';
import NavBar from './components/NavBar/NavBar';
import Setup from './Pages/Setup';
import './App.css';

function App() {
  const [gameCategory, setGameCategory] = useState('cats');
  const [gameNumCards, setGameNumCards] = useState('20');
  const [cards, setCards] = useState<string[]>([]);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const getUrls = async () => {
    const categoryUrls = await picService.getImageUrls(gameCategory);
    return categoryUrls;
  }

  const startGame = async () => {
    const urls = await getUrls();
    const randomUrls = getRandomUrls(urls, parseInt(gameNumCards));
    setCards(randomUrls);
    setGameIsStarted(true);
  }

  const reset = () => {
    setGameCategory('cats');
    setGameNumCards('20');
    setCards([]);
    setGameIsStarted(false);
  }

  return (
    <div id="app">
      <NavBar reset={reset} />
      {cards.length === 0 && <Setup
        gameCategory={gameCategory}
        setGameCategory={setGameCategory}
        gameNumCards={gameNumCards}
        setGameNumCards={setGameNumCards}
        startGame={startGame}
      />}
      {gameIsStarted && cards.length > 0 && <Game cards={cards} />}
    </div>
  );
}

export default App;
