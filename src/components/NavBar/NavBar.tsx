import LogoLink from './LogoLink';
import './NavBar.css';
import NavLink from './NavLink';

interface NavBarProps {
  reset: () => void
}

const NavBar = ({ reset }: NavBarProps) => {

  return (
    <nav id="navbar">
      <NavLink label="Profile" path="/profile" />
      <LogoLink reset={reset} />
      <NavLink label="Scores" path="/scores" />
    </nav>
  )
}

export default NavBar;
