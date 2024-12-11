import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const RecentlyPlay = ()=>{
    return(
        <div className="recently_container">

            <h1>Recently played</h1>

            <Swiper spaceBetween={10} slidesPerView = {3} breakpoints={{380 : {slidesPerView : 2.8}, 450 : {slidesPerView : 3.5}, 650 : {slidesPerView : 5}, 750 : {slidesPerView: 7}, 850 : {slidesPerView : 8}, 950 : {slidesPerView : 9}}}>
                <SwiperSlide>
                    <img src="/song1.png" className="first" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="/song2.png" className="second" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/song3.png" className="third" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/song4.png" className="fourth" />

                </SwiperSlide>
            </Swiper>
        </div>
    )
}