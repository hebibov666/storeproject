import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function SliderSection(){
    const carImages=["../car1.png","../car2.png"]
    return(
        <div className="realtive rounded-l-[50px] bg-blue-600 w-[50%] h-auto">
 <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='absolute right-12 top-[150px]'
    >
   {carImages.map((image,index)=>{
    return <SwiperSlide key={index}>
        <img src={image}></img>
    </SwiperSlide>
   })}
    </Swiper>
        </div>
    )
}
export default SliderSection