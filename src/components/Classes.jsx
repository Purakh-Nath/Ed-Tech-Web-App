import React from 'react';

const PictureDetailsWithButton = ({ pictures, details }) => {
  return (
    <div className="flex flex-row w-full p-16">
      {/* Image column */}
      <div className="flex flex-col w-1/2 gap-4 p-4">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture.src}
            alt={picture.alt}
            className="w-full h-48 object-cover rounded-md shadow-lg"
          />
        ))}
      </div>

      {/* Details and button column */}
      <div className="flex flex-col w-1/2 p-8 gap-8">
        {details.map((detail, index) => (
          <div key={index}>
          <h2>Sample Video Title</h2>
            <p className="text-base font-bold">{detail.title}</p>
            <button className="mt-20  bg-blue-500 text-white font-bold py-2 px-4 rounded hover:shadow-lg ">
              PRACTICE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const pictures = [

  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA", alt: "Image 1 description" },
  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA", alt: "Image 2 description" },
  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA", alt: "Image 3 description" },
  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA", alt: "Image 4 description" },
];

const details = [
  { title: "Explore the Uncharted Wilds" },
  { title: "Unravel the Secrets of History" },
  { title: "Dive into the Depths of Adventure" },
  { title: "Ignite Your Imagination" },
];

function Classes() {
  return (
    <div className="container mx-auto">
      <PictureDetailsWithButton pictures={pictures} details={details} />
    </div>
  );
}

export default Classes;


















// import React from 'react';

// const PictureDetailsWithButton = ({ pictures, details }) => {
//   return (
//     <div className="flex flex-row w-full">
    
    


//       <div className="flex flex-col w-1/2 gap-4">
      
//         {pictures.map((picture, index) => (
//           <div key={index}>
         
//             <img
//               src={picture.src}
//               alt={picture.alt}
//               className="w-full h-48 object-cover rounded-md shadow-lg"
//             />
//             <div className='flex justify-start  whitespace-pre-wrap w-full ml-96'>
//             <p key={index} className="text-base font-bold  ml-96 mb-2">
//               {details[index].title}
//             </p> 
//             <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:shadow-lg">
//               PRACTICE
//             </button>  </div>
//           </div>

          
          
//         ))}
//       </div>
      
  
//     </div>
    
            
//   );
// };



// // Example usage within Classes component
// function Classes() {
//   const pictures = [
//     { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA..", alt: "Image 1 description" },
//     { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA..", alt: "Image 2 description" },
//     { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA..", alt: "Image 3 description" },
//     { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg&w=1280&h=853&_gl=1*1dn1639*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA0ODExNi4xLjEuMTcwMzA0ODEyMC4wLjAuMA..", alt: "Image 4 description" },
//   ];

//   const details = [
//     { title: "Beyond the Horizon: Unveiling the Mysteries of a Forgotten Continent"},
//     { title: "Whispers of Stardust: A Story of Cosmic Connections and Untold Destinies" },
//     { title: "Beyond the Horizon: Unveiling the Mysteries of a Forgotten Continent" },
//     { title: "Whispers of Stardust: A Story of Cosmic Connections and Untold Destinies" },
//   ];

  
  

//   return (
//     <div>
//       <PictureDetailsWithButton pictures={pictures} details={details} />
//     </div>
//   );
// }

// export default Classes;

