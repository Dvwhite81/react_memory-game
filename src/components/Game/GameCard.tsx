interface GameCardProps {
  url: string
  cols: number
  rows: number
}

const GameCard = ({ url, cols, rows }: GameCardProps) => {
  const height = `calc((var(--board-height) * 0.8) / ${rows})`;
  const width = `calc((var(--board-width) * 0.8) / ${cols})`
  const cardStyle = { height: height, width: width };

  return (
    <div className="game-card">
      <img className="game-card-img" src={url} alt="card image" style={cardStyle}/>
    </div>
  )
}

export default GameCard;
