import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const Navbar = () => {
    const {user,logout} = UseAuth();

    const links = <>
        <li><NavLink to='/'>Products</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">CLASSES</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<a onClick={logout} className="btn">Log Out</a> :<a className="btn">Login</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;