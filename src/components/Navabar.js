import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="desktop-nav">    
        <div className="menu-options">          
          <NavLink className={ ({isActive}) => { return `sub-menu-options ${isActive ? 'active': ''}`  }}
           to="/">
                DashBoard
          </NavLink>
          <NavLink  className={({isActive})=>{ return `sub-menu-options ${isActive ? 'active': ''}`  }} to='Form'>
               Fill a User
          </NavLink>
          <NavLink  className={({isActive})=>{  return `sub-menu-options ${isActive ? 'active': ''}`  }} to='users'>
                All Users
          </NavLink>
          
        </div>
      </nav>
    </>
  );
};
