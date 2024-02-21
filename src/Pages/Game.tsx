import GameCard from "../components/Game/GameCard";

interface GameProps {
  urls: string[]
  gameCards: number
}

const Game = ({ urls, gameCards }: GameProps) => {
  console.log('Game gameCards:', gameCards);

  return (
    <div id="game" className="page">
      <div id="game-board">
        {urls.map((url) =>
          <GameCard key={url} url={url} />
        )}
      </div>
    </div>
  );
}

export default Game;
