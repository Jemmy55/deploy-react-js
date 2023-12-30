import { Autoplay, Keyboard, Navigation, Pagination ,Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from '../CardComponent';
import { useContext } from 'react';
import { Context } from '../ulits/AppContext';

function BannerFilterComponent({data}) {
    const {banner} = useContext(Context)
    return (
        <>
            <div className="banner">
                <div className="banner-left">
                    <Swiper
                        rewind={true}
                        slidesPerView={1}
                        mousewheel={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay, Pagination ,Mousewheel]}
                        className="mySwiper"
                    >
                        {
                            banner.map((value, key) => (
                                <SwiperSlide key={key}><img src={value.img} alt="" /></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="banner-right">
                    <Swiper
                        slidesPerView={4}
                        cssMode={true}
                        rewind={true}
                        navigation={true}
                        spaceBetween={20}
                        mousewheel={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Autoplay, Navigation, Pagination, Keyboard ,Mousewheel]}
                        className="mySwiper"
                    >
                        {
                            data && data.map((value , key) => (
                                <SwiperSlide key={key} >{<CardComponent w='14em' item={value}/>}</SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>
        </>
    );
}

export default BannerFilterComponent;