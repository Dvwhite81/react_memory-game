import { useEffect, useState } from 'react';
import { CATEGORIES } from '../../utils/helpers';
import SetupBtn from './SetupBtn';

interface CategorySectionProps {
  gameCategory: string
  setGameCategory: (value: string) => void
  setInputVisible: (value: boolean) => void
}

const CategorySection = ({ gameCategory, setGameCategory, setInputVisible }: CategorySectionProps) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [btnText, setBtnText] = useState('custom');

  useEffect(() => {
    if (!CATEGORIES.includes(gameCategory)) {
      setSelectedClass('selected-btn');
      setBtnText(gameCategory);
    } else {
      setSelectedClass('');
      setBtnText('custom');
    }
  });

  return (
    <div
      id="setup-category-section"
      className="setup-section"
    >
      {CATEGORIES.map((category: string) =>
        <SetupBtn
          key={category}
          option={category}
          gameOption={gameCategory}
          setGameOption={setGameCategory}
        />
      )}
      <button
        className={`btn setup-btn ${selectedClass}`}
        type="button"
        onClick={() => setInputVisible(true)}
      >
        {btnText}
      </button>
    </div>
  );
}

export default CategorySection;
