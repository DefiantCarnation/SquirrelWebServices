import React from 'react';

const NavBarPresentationalSignUp = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper white">
            <img className="navbar-logo" src="styles/img/flying-squirrel-orange.png"/>
            <a href="#" className="brand-logo">Squirrel.io</a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a style={{color: 'grey'}} href="#/">login</a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
}

export default NavBarPresentationalSignUp;
