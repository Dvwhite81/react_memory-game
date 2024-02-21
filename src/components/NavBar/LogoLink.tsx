import { Link } from 'react-router-dom';

const LogoLink = () => {
  return (
    <div className="logo-link_container">
      <Link to="/" className="logo-link_link">
        <img className="logo-link_img" src="/src/assets/images/MatchLogo.png" alt="logo" />
      </Link>
    </div>
  );
}

export default LogoLink;
