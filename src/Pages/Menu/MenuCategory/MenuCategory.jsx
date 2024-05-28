import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items, miniTitle, img, description }) => {
    return (
        <div className="pt-12">
            {miniTitle && <Cover img={img} miniTitle={miniTitle} description={description}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 ">

                {
                    items.map(item =>
                        <MenuItems
                            key={item._id}
                            item={item}>

                        </MenuItems>)
                }
            </div>
            <div className="flex justify-center mt-12">
                <Link to={`/order/${miniTitle}`}>
                    <button className=" text-lg btn btn-outline border-0 border-b-4 rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;