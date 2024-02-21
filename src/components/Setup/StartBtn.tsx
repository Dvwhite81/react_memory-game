interface StartBtnProps {
  handleClick: () => void
}

const StartBtn = ({ handleClick }: StartBtnProps) => {
  return (
    <button
      id="setup-submit"
      className="btn"
      type="submit"
      onClick={handleClick}
    >
      Start
    </button>
  );
}

export default StartBtn;
