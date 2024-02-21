import LogoLink from './LogoLink';
import './NavBar.css';
import NavLink from './NavLink';

const NavBar = () => {

  return (
    <nav id="navbar">
      <NavLink label="Profile" path="/profile" />
      <LogoLink />
      <NavLink label="Scores" path="/scores" />
    </nav>
  )
}

export default NavBar;
