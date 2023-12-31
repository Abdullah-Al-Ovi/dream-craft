import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContex } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const navigate = useNavigate()
    const {logOut,user,disName,photoLink}= useContext(authContex)
    console.log(typeof photoLink);
    console.log(typeof user?.photoURL);
   
    const handleSigbOut=()=>{
        logOut()
        .then(()=>{
            navigate('/')
        })
    }

    return (
        <div className="navbar bg-base-100 w-[90%]  mx-auto my-7" data-aos="fade-up"
        data-aos-duration="1000" >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/sign-in'>Sign in</NavLink></li>
        <li><NavLink to='/sign-up'>Sign up</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/booking'>Booking</NavLink></li>
      </ul>
    </div>
    <button className=" text-sky-700 text-2xl font-bold ">Dream Craft</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/sign-in'>Sign in</NavLink></li>
    <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    <li><NavLink to='/booking'>Booking</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end ">
    
   {
    user &&  <div className="flex md:inline-block flex-col gap-2 justify-center items-center">
       
         <img className="w-[50px]  rounded-full object-cover inline-block" src={user.photoURL ? user.photoURL : photoLink} /> 

       
       
       <span className="mx-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded py-1 px-[2px] font-medium text-white">{user.displayName ? user.displayName : disName}</span>
        <Link to='/'><button onClick={handleSigbOut} className="btn bg-red-500 text-white font-semibold">Sign out</button> </Link>
        
    </div>
    

   }

  </div>
</div>
    );
};

export default Navbar;