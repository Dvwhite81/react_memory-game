import { Link } from 'react-router-dom';

interface NavLinkProps {
  label: string
  path: string
}

const NavLink = ({ label, path }: NavLinkProps) => {
  return (
    <div className="navlink_item">
      <Link to={path}>{label}</Link>
    </div>
  );
}

export default NavLink;
