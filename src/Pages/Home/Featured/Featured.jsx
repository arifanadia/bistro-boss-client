import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-20">
            <div className="bg-black bg-opacity-40 py-6 ">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'Our Featured items'} />
                <div className="md:flex justify-center items-center py-8 px-36 pt-12">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-20 text-white">
                        <p>May 20, 2024</p>
                        <p className="uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum cum dolore quidem at pariatur eligendi esse officia repudiandae nam sint beatae consequuntur laborum, eaque, dolores tempora, fugiat recusandae? At deserunt delectus quas tenetur pariatur doloribus quasi eligendi maiores. Esse fugiat minima neque qui aut veritatis sit quis ab architecto debitis.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-8 text-white">Order Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;