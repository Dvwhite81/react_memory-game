import { useState } from 'react';

interface GameCardProps {
  url: string
  cols: number
  rows: number
}

const GameCard = ({ url, cols, rows }: GameCardProps) => {
  const [isFaceUp, setIsFaceUp] = useState(false);

  const height = `calc((var(--card-height) / ${rows}))`;
  const width = `calc((var(--card-width) / ${cols}))`
  const cardStyle = { height: height, width: width };

  return (
    <div className="game-card" onClick={() => setIsFaceUp((prev) => !prev)}>
      <img
        className="game-card-img"
        src={url}
        alt="card image"
        style={cardStyle}
      />
      <img
        className={`card-back ${isFaceUp ? 'hidden' : ''}`}
        src="/src/assets/images/card-back-horizontal.png"
        alt="card back image"
        style={cardStyle}
      />
    </div>
  )
}

export default GameCard;
