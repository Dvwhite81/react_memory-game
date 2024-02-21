import { useState } from 'react';
import CategorySection from '../components/Setup/CategorySection';
import SearchInput from '../components/Setup/SearchInput';
import StartBtn from '../components/Setup/StartBtn';
import NumCardsSection from '../components/Setup/NumCardsSection';
import '../components/Setup/Setup.css';

interface SetupProps {
  gameCategory: string
  setGameCategory: (value: string) => void
  gameNumCards: string
  setGameNumCards: (value: string) => void
  startGame: () => void
}

const Setup = ({ gameCategory, setGameCategory, gameNumCards, setGameNumCards, startGame }: SetupProps) => {
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <div id="setup" className="page">
      <CategorySection gameCategory={gameCategory} setGameCategory={setGameCategory} setInputVisible={setInputVisible} />
      {inputVisible && <SearchInput setGameCategory={setGameCategory} setInputVisible={setInputVisible} />}
      <NumCardsSection gameNumCards={gameNumCards} setGameNumCards={setGameNumCards} />
      <div id="setup-info">
        <p className="setup-info-text">
          Category: {gameCategory}
        </p>
        <p className="setup-info-text">
          Number of Cards: {gameNumCards}
        </p>
      </div>
      <StartBtn handleClick={startGame} />
    </div>
  )
}

export default Setup;
