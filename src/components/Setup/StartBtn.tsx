interface StartBtnProps {
  startGame: () => void
}

const StartBtn = ({ startGame }: StartBtnProps) => {
  return (
    <button
      id="setup-submit"
      className="btn"
      type="submit"
      onClick={startGame}
    >
      Start
    </button>
  );
}

export default StartBtn;
