import {Swiper,SwiperSlide} from 'swiper/react';

export const PopularAlbum = ()=>{
    return(
        <div className="popular_container">

            <h1>Popular Album</h1>

            <Swiper slidesPerView={3} spaceBetween={10} breakpoints={{380 : {slidesPerView : 2.8}, 450 : {slidesPerView : 3.5}, 650 : {slidesPerView : 5}, 750 : {slidesPerView: 7}, 850 : {slidesPerView : 8}, 950 : {slidesPerView : 9}}}>
                <SwiperSlide>
                    <img src="/song5.png" className="first" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="/song6.png" className="first" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="/song7.png" className="first" />

                </SwiperSlide>

                <SwiperSlide>
                <img src="/song8.png" className="first" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}