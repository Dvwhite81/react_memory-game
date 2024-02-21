interface GameCardProps {
  url: string
}

const GameCard = ({ url }: GameCardProps) => {
  return (
    <div className="game-card">
      <img className="game-card-img" src={url} alt="card image" />
    </div>
  )
}

export default GameCard;
