import { FaBook, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlinePayment, MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMailStarFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-600 text-white">
                <ul className="menu text-lg">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems"><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"><FaList/> Manage Items </NavLink></li>
                                <li><NavLink to="/dashboard/manageBookings"><FaBook />Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers/>All Users</NavLink></li>
                               
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><MdOutlinePayment />Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink></li>
                                <li><NavLink to="/dashboard/review"><RiMailStarFill />Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/booking"><FaList />My Booking</NavLink></li>
                            </>
                    }

                    {/* shared navbar */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"><MdOutlineRestaurantMenu />Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag />Order</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;