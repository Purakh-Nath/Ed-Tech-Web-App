import React, { useState } from 'react';

const PictureDetailsWithButtons = ({ details }) => {
 
  return (
    <div className="flex items-center justify-center  py-4 pr-36 pl-3">
      <div className="grid sm:grid-cols-3  grid-cols-1  gap-y-20 gap-x-44 max-w-screen-lg">
        {/* Loop through details array */}
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              {/* You can put your iframe, video, or image here */}
             
              <iframe
                className="rounded-xl"
                // width="385"
                // height="325"
                width='150%'
                height='130%'
                src={detail.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> 
              {/* If using video:
              <video class="w-full h-auto" controls>
                <source src={detail.videoSrc} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
              */}
              {/* If using image:
              <img src={detail.imageUrl} class="w-full h-auto" alt="Image"></img>
              */}
            </div>
            <div className="text-center lg:text-left mt-3">
              {/* You can put your title and button here */}
              <h2 className="text-xl font-bold mb-2 whitespace-normal  mt-9">{detail.title}</h2>
              <button className="bg-black hover:bg-yellow-500 text-white font-extrabold py-2 px-4 rounded-md">
              Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const details = [
  { title: "Let's Learn React from Scratch with Projects" ,src: 'https://www.youtube.com/embed/eCU7FfMl5WU?si=QSImk6fHw9umZU5d' },
  { title: "How to learn React | A React Roadmap"  , src: 'https://www.youtube.com/embed/lHOb0BWu3-M?si=lgw9ClvMF0B7l8Mv'},
  { title: "Create React Projects" , src: 'https://www.youtube.com/embed/lf8giXzuxVE?si=rhHA4KAkkT2yKO6h'},
  { title: "Understand the React Flow and Structure" , src:'https://www.youtube.com/embed/XGo8bz_j2ZY?si=xmZmFK_8QKMU94w1' },
  { title: "Dive into the Depths of Adventure" , src: 'https://www.youtube.com/embed/lf8giXzuxVE?si=rhHA4KAkkT2yKO6h'},
  { title: "Why You Need Hooks and Project" , src:'https://www.youtube.com/embed/XGo8bz_j2ZY?si=xmZmFK_8QKMU94w1' },
];

function Classes() {
  return (
    <div className="">
      <PictureDetailsWithButtons  details={details} />
    </div>
  );
}

export default Classes;

