import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function HomeSlider() {
    // const slides = [
    //     {
    //       url: 'https://unsplash.com/photos/8CqDvPuo_kI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGVkdWNhdGlvbnxlbnwwfHx8fDE3MDI5ODk4ODF8MA&force=true&w=1920',
    //     },
    //     {
    //       url: 'https://unsplash.com/photos/S3nUOqDmUvc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAzMDAxMjgwfA&force=true&w=1920',
    //     },
    //     {
    //       url: 'https://unsplash.com/photos/FHnnjk1Yj7Y/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGVkdWNhdGlvbnxlbnwwfHx8fDE3MDI5OTY4MTh8MA&force=true&w=1920',
    //     },
    
    //     {
    //       url: 'https://unsplash.com/photos/LUGuCtvlk1Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8fHwxNzAyOTkzODE0fDA&force=true&w=1920',
    //     },
    //     {
    //       url: 'https://unsplash.com/photos/sfL_QOnmy00/download?force=true&w=1920',
    //     },
    //   ];

    const slides = [
      {
        url: 'https://ik.imagekit.io/t8uzoinytc/vasily-koloda-8CqDvPuo_kI-unsplash.jpg?updatedAt=1712929284174',
      },
      {
        url: 'https://ik.imagekit.io/t8uzoinytc/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg?updatedAt=1712929525260',
      },
      {
        url: 'https://ik.imagekit.io/t8uzoinytc/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg?updatedAt=1712929565414',
      },
  
      {
        url: 'https://ik.imagekit.io/t8uzoinytc/gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg?updatedAt=1712929640685',
      },
      {
        url: 'https://ik.imagekit.io/t8uzoinytc/janko-ferlic-sfL_QOnmy00-unsplash.jpg?updatedAt=1712929669019',
      },
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
        


  return (

    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

  )
}

export default HomeSlider