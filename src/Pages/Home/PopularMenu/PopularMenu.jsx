import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From our Popular Menu'} />
            <div>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item =>
                            <MenuItems
                                key={item._id}
                                item={item}>

                            </MenuItems>)
                    }
                </div>
                <div className="flex justify-center mt-12">
                    <button className=" text-xl  btn btn-outline border-0 border-b-4 rounded-lg">View Full Menu</button>
                </div>
            </div>
            <div className="my-16 bg-black text-center p-24">
                <h3 className="text-3xl font-bold text-white">
                    Call Us: +88 0192345678910
                </h3>

            </div>


        </section>
    );
};

export default PopularMenu;