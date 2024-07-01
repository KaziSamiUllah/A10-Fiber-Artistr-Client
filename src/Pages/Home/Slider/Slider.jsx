import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="flex justify-center h-[45vw]"
            >
                <SwiperSlide><img className="w-screen h-screen" src="https://images.unsplash.com/photo-1593671186131-d58817e7dee0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://plus.unsplash.com/premium_photo-1681823896040-36c6a2cda672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://plus.unsplash.com/premium_photo-1681823813523-f5a25fc33e51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://images.unsplash.com/photo-1513206057392-e565592cbaa6?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://images.unsplash.com/photo-1707093981869-5cd86943480e?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://plus.unsplash.com/premium_photo-1683147638157-96da15cab00f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://images.unsplash.com/photo-1634757440938-a671a5924363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://plus.unsplash.com/premium_photo-1658506943767-4cdc681e7fbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src="https://plus.unsplash.com/premium_photo-1682148589596-a15e0f6ba13c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;