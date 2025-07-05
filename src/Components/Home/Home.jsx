import React from 'react'
import Offers from '../Offers/Offers'
import Products from "../Products/Products"
import AboutUs from '../AboutUS/AboutUs'
import Features from '../Features/Features'
import slider from "../../assets/slider-1.png"
import slider2 from "../../assets/slider-2.png"
import slider3 from "../../assets/slider-3.png"
import slider4 from "../../assets/slider-4.png"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


export default function Home() {
  const slides = [slider, slider2, slider3, slider4]

  return (
    <>
    <div className='relative'>

   
      {/* Responsive full-width slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        className="w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full relative "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       </div>

      {/* Content below the slider */}
      <Offers />
      <Products />
      <br />
      <AboutUs />
      <Features />
    </>
  )
}
