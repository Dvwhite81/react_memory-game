import { useEffect, useState } from 'react';

interface SetupBtnProps {
  option: string
  gameOption: string
  setGameOption: (value: string) => void
}

const SetupBtn = ({ option, gameOption, setGameOption }: SetupBtnProps) => {
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    if (option === gameOption) {
      setSelectedClass('selected-btn');
    } else {
      setSelectedClass('');
    }
  });

  return (
    <button
      className={`btn setup-btn ${selectedClass}`}
      type="button"
      onClick={() => setGameOption(option)}
    >
      {option}
    </button>
  )
}

export default SetupBtn;
