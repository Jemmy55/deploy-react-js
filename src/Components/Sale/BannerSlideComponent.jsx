import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import CardComponent from '../CardComponent';
import '../../SCSS/BannerSlideComponent.SCSS'
import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper/modules';



function BannerSlideComponent({slidesPerView ,spaceBetween , navigation, rewind, data}) {
    return (
        <>
            <div className="SwiperBanner">
                <div className="small-container">
                    <Swiper
                        breakpoints={{
                            1496:{
                                slidesPerView: (slidesPerView)
                            },
                            1490:{
                                slidesPerView: 5
                            },
                            1200:{
                                slidesPerView: 4
                            },
                            900:{
                                slidesPerView: 3
                            },
                            768:{
                                slidesPerView: 2
                            },

                        }}
                        
                        rewind={rewind}
                        navigation={navigation}
                        spaceBetween={spaceBetween}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Autoplay, Navigation, Pagination, Keyboard]}
                        className="mySwiper"
                    >
                        {
                            data && data.map((value, key) =>  (
                                <SwiperSlide key={key}>{<CardComponent item={value} />}</SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default BannerSlideComponent;