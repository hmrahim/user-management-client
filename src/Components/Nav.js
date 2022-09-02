import React from "react";
import { Link,NavLink } from "react-router-dom";

const Nav = () => {
const menu =   <>
    <li>
      <NavLink to="/createuser">Create User</NavLink>
    </li>
    <li>
      <NavLink to="/">All User</NavLink>
    </li>
  </>;
  return (
   <div className="bg-neutral w-full">
     <div class="navbar bg-neutral w-full md:w-4/5 mx-auto">
      <div class="navbar-start ">
      
        <a class="btn btn-ghost normal-case text-xl">User-Management</a>
      </div>
      <div class="navbar-center hidden lg:flex">
      {/* navbar center */}
      </div>
      <div class="navbar-end">
      <ul class="menu menu-horizontal p-0">
          {
            menu
          }
        </ul>

      </div>
    </div>
   </div>
  );
};

export default Nav;
