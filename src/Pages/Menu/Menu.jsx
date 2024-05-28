import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/menu-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Menu </title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'} subTitle={'would you like to try a dish?'} ></Cover>
            {/* offer Section */}
            <SectionTitle subHeading={"Don't miss "} heading={"today's offer"}/>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts section */}
            <MenuCategory items={dessert}  miniTitle={'desserts'} img={dessertImg}
            description={'The term dessert can apply to many sweets, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts, and fruit salad.'} />
          
            {/* pizza section */}
            <MenuCategory items={pizza} miniTitle={'pizza'}  img={pizzaImg}
             description={'The term dessert can apply to many sweets, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts, and fruit salad.'} />

            {/* salad section */}
            <MenuCategory items={salad} miniTitle={'salad'}  img={saladImg}
             description={'The term dessert can apply to many sweets, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts, and fruit salad.'} />
            {/* soup section */}
            <MenuCategory items={soup} miniTitle={'soups'}  img={soupImg}
             description={'The term dessert can apply to many sweets, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts, and fruit salad.'} />
         
          
            
        </div>
    );
};

export default Menu;