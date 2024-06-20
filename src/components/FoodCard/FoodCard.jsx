import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item || {}
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart();

    const handleAddToCard = () => {
        if (user && user.email) {
        
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image, recipe,

            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })


        } else {

            Swal.fire({
                title: "You are not logged in",
                text: "Please Log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }

            });
        }

    }

    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <figure><img className="w-full" src={image} alt="food" /></figure>
            <p className="absolute right-3 bg-black text-white top-3 px-2 py-1 ">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center ">

                    <button onClick={handleAddToCard} className="btn btn-outline border-0 border-b-4 rounded-lg">Add to cart</button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;