import { useEffect, useState } from 'react';
import GameCard from '../components/Game/GameCard';
import { getRandomUrls } from '../utils/helpers';

interface GameProps {
  urls: string[]
  gameNumCards: number
}

const Game = ({ urls, gameNumCards }: GameProps) => {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    const getCards = () => {
      const randomUrls = getRandomUrls(urls, gameNumCards);
      setCards(randomUrls);
    }

    getCards();
  });

  return (
    <div id="game" className="page">
      <div id="game-board">
        {cards.map((url) =>
          <GameCard key={url} url={url} />
        )}
      </div>
    </div>
  );
}

export default Game;
