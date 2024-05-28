

const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item || {}

    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className="absolute right-3 bg-black text-white top-3 px-2 py-1 ">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center ">

                    <button className="btn btn-outline border-0 border-b-4 rounded-lg">Add to cart</button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;