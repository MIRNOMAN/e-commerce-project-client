import { NavLink } from "react-router-dom";
import logo from "../../assets/logo3-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navber = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Sign out')
            })
            .then(err => {
                console.log(err)
            })
    }

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/addProducts">Add Product</NavLink> </li>
        <li> <NavLink to="/myCard">My Cart</NavLink> </li>



    </>

    return (
        <div>
            <div>
                <div className="navbar mt-3 bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content space-x-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="lg:flex items-center">
                            <img className="h-12 w-12" src={logo} alt="" />
                            <p className="  lg:text-3xl font-bold"><span className="text-blue-400">E-comme</span>rce</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-4 px-1">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user?.email ?
                                <div className="flex items-center">
                                    <h1 className="mr-3 font-semibold">{user.displayName}</h1>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar dropdown-end">

                                        <div>

                                            <div>
                                            </div>
                                            <div className="w-10 rounded-full">
                                                <div>
                                                    <img className="rounded-full" src={user.photoURL} alt="user.displayName" />
                                                </div>
                                            </div>

                                        </div>
                                    </label>
                                    <button onClick={handleSignOut} className="btn font-semibold text-base">Log Out</button>
                                </div>
                                :

                                <NavLink to="/login"><button className="btn font-semibold text-base">Login</button></NavLink>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;