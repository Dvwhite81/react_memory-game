import { NUM_OPTIONS } from '../../utils/helpers';
import SetupBtn from './SetupBtn';

interface NumCardsSectionProps {
  gameCards: string
  setGameCards: (value: string) => void
}

const NumCardsSection = ({ gameCards, setGameCards }: NumCardsSectionProps) => {
  const nums = NUM_OPTIONS.map((num) => num.toString());

  return (
    <div
      id="setup-cards-section"
      className="setup-section"
    >
      {nums.map((num) =>
        <SetupBtn
          key={num}
          option={num}
          gameOption={gameCards}
          setGameOption={setGameCards}
        />
      )}
    </div>
  );
}

export default NumCardsSection;
