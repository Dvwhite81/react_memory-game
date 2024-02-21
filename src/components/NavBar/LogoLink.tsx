interface LogoLinkProps {
  reset: () => void
}

const LogoLink = ({ reset }: LogoLinkProps) => {
  return (
    <div className="logo-link_container" onClick={reset}>
      <img className="logo-link_img" src="/src/assets/images/MatchLogo.png" alt="logo" />
    </div>
  );
}

export default LogoLink;
