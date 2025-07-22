import { useEffect, useRef } from 'react';
import SplashHeading from './SplashHeading';
import checkIcon from '../assets/check-icon.png';
import goldenCheckIcon from '../assets/golden-check-icon.png'

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Pricing() {
  const swiperRef = useRef(null);

useEffect(() => {
  let swiperInstance;

  function initSwiper() {
    if (window.innerWidth < 768 && swiperRef.current) {
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Scrollbar],
        direction: 'horizontal',
        loop: true,
        pagination: { el: '.swiper-pagination' },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: { el: '.swiper-scrollbar' },
      });
    } else {
      // If disabling on desktop, reset layout
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;

        // Reset transform on slides
        if (swiperRef.current) {
          swiperRef.current.querySelector('.swiper-wrapper').style.transform = '';
        }
      }
    }
  }

  initSwiper();

  // Re-check on resize
  window.addEventListener('resize', initSwiper);

  return () => {
    window.removeEventListener('resize', initSwiper);
    if (swiperInstance) swiperInstance.destroy();
  };
}, []);


  return (
    <section className="mt-[3.5rem] md:mt-[5.75rem] flex flex-col justify-center items-center w-full p-10 lg:p-20 bg-[white] gap-5">
      <SplashHeading>Choose Your Plan</SplashHeading>
      <p className="text-center">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>

      <div ref={swiperRef} className="swiper flex justify-center items-center w-[20rem] h-[40.1rem] md:w-[70rem] md:h-[37rem]">
        <div className="swiper-wrapper md:flex md:justify-around md:items-center ">
          <div className="swiper-slide md:!w-[20rem] rounded-2xl text-[#212529]">
              <div className="bg-[#bed9f8] w-[20rem] h-full rounded-2xl">
                <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
                  <div className="absolute top-0 w-full flex flex-col justify-center gap-4 p-7">
                    <h3 className="font-semibold text-2xl">Free</h3>
                    <h2 className="font-bold text-4xl">$0</h2>
                    <h4>Captures idea and find them quickly</h4>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Sync unlimited devices</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>10 GB monthly uploads</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>200 MB max. note size</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Customize Home dashboard and access extra widgets</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Connect primary Google Calendar account</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Add due dates, reminders, and notifications to your tasks</p></span>
                  </div>
                  
                  <button className="absolute bottom-7 bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white">Get Started</button>
                </div>
              </div>
          </div>
          <div className="swiper-slide md:!w-[20rem] rounded-2xl text-white">
            <div className="bg-[#043873] w-[20rem] h-full rounded-2xl">
              <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
                  <div className="absolute top-0 w-full flex flex-col justify-center gap-4 p-7">
                    <h3 className="font-semibold text-2xl">Personal</h3>
                    <h2 className="font-bold text-4xl text-[#FFE492]">$11.99</h2>
                    <h4>Keep home and family on track</h4>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>Sync unlimited devices</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>10 GB monthly uploads</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>200 MB max. note size</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>Customize Home dashboard and access extra widgets</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>Connect primary Google Calendar account</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={goldenCheckIcon}/><p>Add due dates, reminders, and notifications to your tasks</p></span>
                  </div>
                  
                  <button className="absolute bottom-7 bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white">Get Started</button>
                </div>
            </div>
          </div>
          <div className="swiper-slide md:!w-[20rem] rounded-2xl text-[#212529]">
            <div className="bg-[#94c6ff] w-[20rem] h-full rounded-2xl">
              <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
                  <div className="absolute top-0 w-full flex flex-col justify-center gap-4 p-7">
                    <h3 className="font-semibold text-2xl">Organization</h3>
                    <h2 className="font-bold text-4xl">$49</h2>
                    <h4>Captures idea and find them quickly</h4>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Sync unlimited devices</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>10 GB monthly uploads</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>200 MB max. note size</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Customize Home dashboard and access extra widgets</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Connect primary Google Calendar account</p></span>
                    <span className="flex items-center gap-2 font-light text-[15px]"><img src={checkIcon}/><p>Add due dates, reminders, and notifications to your tasks</p></span>
                  </div>
                  
                  <button className="absolute bottom-7 bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white">Get Started</button>
                </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
