import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
const menu =   <>
    <li>
      <Link to="/">Create User</Link>
    </li>
    <li>
      <Link to="/alluser">All User</Link>
    </li>
  </>;
  return (
   <div className="bg-neutral w-full">
     <div class="navbar bg-neutral w-full md:w-4/5 mx-auto">
      <div class="navbar-start ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {
            menu
           }
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">User-Management</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {
            menu
          }
        </ul>
      </div>
      <div class="navbar-end">
      <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
      </div>
    </div>
   </div>
  );
};

export default Nav;