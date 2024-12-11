import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

export const PopularArtists = ()=>{
    return(
        <div className="artist_container">
            <h1>Popular artists</h1>

            <Swiper spaceBetween={10} slidesPerView = {3} breakpoints={{380 : {slidesPerView : 4.9}, 450 : {slidesPerView : 5}, 650 : {slidesPerView : 6}, 750 : {slidesPerView: 7}, 850 : {slidesPerView : 8}, 950 : {slidesPerView : 9}}}>
                <SwiperSlide>
                    <Link to="/profile"><img src="/artist1.png" className="artist" /></Link>
                </SwiperSlide>

                <SwiperSlide>
                <img src="/artist2.png" className="artist" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/artist3.png" className="artist" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/artist4.png" className="artist" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/artist5.png" className="artist" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/artist6.png" className="artist" />

                </SwiperSlide>
            </Swiper>
        </div>
    )
}