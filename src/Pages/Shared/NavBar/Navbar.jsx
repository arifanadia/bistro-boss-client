import { Link } from "react-router-dom"
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();


    const handleLogOut = async () => {
        const result = await logOut()
        console.log(result);

    }
    const profile = <>
        {
            user ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>{user.displayName}</li>
                        <li>
                            <a className="justify-between">
                                Profile

                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogOut}><a>Logout</a></li>
                    </ul>
                </div>
                :
                <li><Link to={'/login'}>Login</Link></li>


        }
    </>
    const navOptions =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/menu'}>Our Menu</Link></li>
            <li><Link to={'/order/salad'}>Order Food</Link></li>
            <li><Link to={'/cart'}>
                <button className="btn">
                    <FaShoppingCart />
                    <div className="badge badge-warning">+{cart.length}</div>
                </button></Link></li>
            <div className="hidden lg:flex">{profile}</div>


        </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black max-w-screen-xl bg-opacity-30 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu items-center menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div>{profile}</div>
                </div>
            </div>


        </>
    );
};

export default Navbar;