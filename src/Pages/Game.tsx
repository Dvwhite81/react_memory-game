import GameCard from '../components/Game/GameCard';
import '../components/Game/Game.css';
import { getGrid } from '../utils/helpers';

interface GameProps {
  cards: string[]
}

const Game = ({ cards }: GameProps) => {
  const [rows, cols] = getGrid(cards.length);
  console.log('Game rows, cols:', rows, cols);
  const gridStyle = { gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` };

  return (
    <div id="game" className="page">
      <div id="game-board" style={gridStyle}>
        {cards.map((url, index) =>
          <GameCard key={index} url={url} rows={rows} cols={cols} />
        )}
      </div>
    </div>
  );
}

export default Game;
