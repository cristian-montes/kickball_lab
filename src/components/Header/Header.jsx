import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div className='header'>
      <NavLink className='navLinks' activeClassName='colorClick' to='/' exact>
        <p>Home</p> 
      </NavLink>
      <NavLink className='navLinks' to='/teams' exact>
        <p>Teams</p>
      </NavLink>
      <NavLink className='navLinks' to='/players'>
        <p>Player</p>
      </NavLink>
     
    </div>
  );
}

export default Header;