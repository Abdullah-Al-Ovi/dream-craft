import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/sign-in'>Sign in</NavLink></li>
        <li><NavLink to='/sign-up'>Sign up</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/sign-in'>Sign in</NavLink></li>
        <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <Link to='/'><button className="btn bg-red-500 text-white font-semibold">Sign out</button></Link>
  </div>
</div>
    );
};

export default Navbar;