import FoodCard from "../../../components/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const itemPerPage= 6

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const slideItems = [];
    for (let i = 0; i < items.length; i += itemPerPage) {
        slideItems.push(items.slice(i, i + itemPerPage));
    }
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                  {slideItems.map((slideItem, slideIndex) => (
                    <SwiperSlide key={slideIndex} className="my-12">
                        <div className='grid grid-cols-3 gap-8 '>
                            {slideItem.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    );
};

export default OrderTab;