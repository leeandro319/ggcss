import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import {Container} from './NavStyle'



export default function Header() {

  const [navDrop, setNavDrop] = useState(false);

  return (
        <Container>
        <nav>
        <span className="logo">
          <FontAwesomeIcon icon={faCoffee} />
          </span>
        <div className="mobile">
        onClick={() => setNavDrop(!navDrop)}
          
        <FontAwesomeIcon icon={faCoffee} />
          
          {navDrop && <div className="listMobile">
            <p>teste</p>
            </div>}

            </div>
        <div className="links-navegator"> 
            <ul className="nav-links">
                <li className="nav-links">Border</li>
                <li className="nav-links">Border Radius</li>
                <li className="nav-links">Box Shadow</li>
                <li className="nav-links">Text Shadow</li>
                <li className="nav-links">Transform Css</li>
            </ul>
        </div> 
        </nav>
        </Container>
  );
}
