import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TopStudents() {
    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const data = [
        {
          name: `React JS`,
          img: `https://unsplash.com/photos/_kd5cxwZOK4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHN0dWRlbnRzfGVufDB8fHx8MTcwMjk5ODMwOXww&force=true&w=1920`,
          review: `Some review submitted by the user about the company.`
        },
        {
          name: `React JS`,
          img: `https://unsplash.com/photos/_kd5cxwZOK4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHN0dWRlbnRzfGVufDB8fHx8MTcwMjk5ODMwOXww&force=true&w=1920`,
          review: `Some review submitted by the user about the company.`
        },
        {
          name: `React JS`,
          img: `https://unsplash.com/photos/_kd5cxwZOK4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHN0dWRlbnRzfGVufDB8fHx8MTcwMjk5ODMwOXww&force=true&w=1920`,
          review: `Some review submitted by the user about the company.`
        },
        {
          name: `React JS`,
          img: `https://unsplash.com/photos/_kd5cxwZOK4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHN0dWRlbnRzfGVufDB8fHx8MTcwMjk5ODMwOXww&force=true&w=1920`,
          review: `Some review submitted by the user about the company..`
        },
        {
          name: `React JS`,
          img: `https://unsplash.com/photos/_kd5cxwZOK4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHN0dWRlbnRzfGVufDB8fHx8MTcwMjk5ODMwOXww&force=true&w=1920`,
          review: `Some review submitted by the user about the company.`
        },
        
      ];

  return (
    <div className='w-3/4 m-auto' >
    <h2 className='text-white  text-center font-extralight pt-10'>Top Students</h2>
      <div className="mt-20 px-2 gap-5">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-slate-700  text-white h-[450px] gap-5 rounded-xl px-4"> 
            <div className='h-56  bg-[#F2F2F2] flex justify-center  gap-5 items-center rounded-t-xl  px-2'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full gap-5"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 px-2">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center"> <q  className='italic'>{d.review}</q> </p>
              <button className='bg-indigo-500 text-white italic text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <h2 className='text-white  text-center font-bold  mt-10'>Reviews</h2>
    </div>
  )
}




export default TopStudents