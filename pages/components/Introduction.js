import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Introduction(){
  return (
    <div className='flex relative h-[400px] p-[20px] bg-[#862D93]'>
        <div className='absolute z-[999] top-0 left-0 h-[300px] pl-4 pt-[20px]'>
            <h1 className='font-bold text-[23px] text-white'>How to create a store?</h1>
        </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      className='home-swiper '
    >
      <SwiperSlide className='swiper-item '>
        <div className='flex flex-col items-center p-[30px] bg-white w-[60%] rounded-[20px] gap-[20px] max-[737px]:w-[80%] max-[499px]:w-[95%]'>
            <h1 className='font-bold text-[20px]'>Step 1</h1>
            <p className='text-center'>
            The first step to becoming a seller on Hepsiburada is to create an account. Find the "Sign Up" or "Create an Account" options on the homepage or the member login screen and fill in the necessary information to create your account.
            </p>


        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-item'>
      <div className='flex flex-col items-center p-[30px] bg-white w-[60%] rounded-[20px] gap-[20px] max-[737px]:w-[80%] max-[499px]:w-[95%]'>
            <h1 className='font-bold text-[20px]'>Step 2</h1>
            <p className='text-center'>
            The first step to becoming a seller on Hepsiburada is to create an account. Find the "Sign Up" or "Create an Account" options on the homepage or the member login screen and fill in the necessary information to create your account.
            </p>


        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-item'>
      <div className='flex flex-col items-center p-[30px] bg-white w-[60%] rounded-[20px] gap-[20px] max-[737px]:w-[80%] max-[499px]:w-[95%]'>
            <h1 className='font-bold text-[20px]'>Step 3</h1>
            <p className='text-center'>
            The first step to becoming a seller on Hepsiburada is to create an account. Find the "Sign Up" or "Create an Account" options on the homepage or the member login screen and fill in the necessary information to create your account.
            </p>


        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};
export default Introduction