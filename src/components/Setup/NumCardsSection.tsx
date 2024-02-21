import { NUM_OPTIONS } from '../../utils/helpers';
import SetupBtn from './SetupBtn';

interface NumCardsSectionProps {
  gameNumCards: string
  setGameNumCards: (value: string) => void
}

const NumCardsSection = ({ gameNumCards, setGameNumCards }: NumCardsSectionProps) => {
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
          gameOption={gameNumCards}
          setGameOption={setGameNumCards}
        />
      )}
    </div>
  );
}

export default NumCardsSection;
