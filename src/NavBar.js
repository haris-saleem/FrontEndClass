import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Login from './LoginButton'
import AppContext from './Appcontext'
import LoginButton from './LoginButton';

const NavBar = (prop) => {     //we added prop to add the icon.
  
  const [globalState, setGlobalState] = useContext(AppContext);

  const openSidebar = () => {
    setGlobalState({ ...globalState, sidebarOpen: true })
}

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <img src={prop.logo}  //we add the logo
          width="64" height="64" />
      </a>

      <ul class="nav">
        {
          prop.links.map( 
            (link)=><li className="nav-item">
            <Link className="nav-link" to={link.path}>{link.label}</Link>
            </li>
            )
        }
      </ul>

  

      <div className="form-inline">
        <LoginButton/>
        <button onClick={openSidebar} className="btn btn-primary">Sidebar</button>
      </div>  
      </nav>
  )
}

export default NavBar;


/*
<li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>



        <li class="nav-item">
          <Link class="nav-link" to ="/contact" >Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to ="/about" >About</Link>
        </li>
      </ul>

      */