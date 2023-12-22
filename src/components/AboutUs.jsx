import React from "react";

const AboutUs = ({details1, details2,details3 }) => {

     details1 = {
        title: "Majestic Mountain Vista",
        description: "Hike through lush meadows and gaze upon breathtaking peaks under a clear blue sky.",
        features: ["Panoramic views", "Hiking trails", "Camping spots", "Wildlife watching"],
        image: "https://images.pexels.com/photos/19482912/pexels-photo-19482912.jpeg?cs=srgb&dl=pexels-albin-biju-19482912.jpg&fm=jpg&w=1280&h=1618&_gl=1*14wey6n*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA3MTQwMC40LjEuMTcwMzA3MjczNy4wLjAuMA.." // Random mountain image
      };
      
       details2 = {
        title: "Tranquil Ocean Retreat",
        description: "Dip your toes in the turquoise waters, listen to the calming waves, and soak up the sun on pristine beaches.",
        features: ["Crystal-clear waters", "Sandy beaches", "Snorkeling opportunities", "Relaxing atmosphere"],
        image: "https://images.pexels.com/photos/18180225/pexels-photo-18180225.jpeg?cs=srgb&dl=pexels-runa-%F0%9F%93%B7-18180225.jpg&fm=jpg&w=1280&h=1618&_gl=1*1lpgwu2*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA3MTQwMC40LjEuMTcwMzA3Mjc3NC4wLjAuMA.." // Random beach image
      };
      
      details3 = {  
        title: "Enchanted Forest Adventure",
        description: "Visiting the Matrimandir: While not a typical tourist attraction, the Matrimandir welcomes sincere seekers on specific days for silent meditation in the Inner Chamber. The surrounding Peace Area, with its gardens and walking paths, is open to all, offering a serene space for contemplation and reflection.",
        features: ["Hiking and biking trails", "Waterfalls and hidden pools", "Abundant wildlife", "Peaceful atmosphere"],
        image: "https://images.pexels.com/photos/18575137/pexels-photo-18575137.jpeg?cs=srgb&dl=pexels-muhammed-sahil-18575137.jpg&fm=jpg&w=1280&h=1707&_gl=1*1s78o44*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA3MTQwMC40LjEuMTcwMzA3Mjg1OS4wLjAuMA.." // Random forest image
      };

  return (
    <div className="flex flex-col gap-8 pt-10">
      {/* Section 1 */}
      <div className="flex flex-row">
        <div className="flex-1">
          <img src={details1.image} alt="Image 1" className="rounded-md shadow-md w-full h-full object-cover  sm:w-3/4  sm:h-3/4 p-14" />
        </div>
        <div className="flex-1 px-4 py-2 space-y-4">
          <h3 className="text-lg font-bold text-white mb-1 pt-12">{details1.title}</h3>
          <h3 className="text-black text-lg font-bold">{details1.description}</h3>
          <ul className="list-disc space-y-2 p-4">
            {details1.features.map((feature) => (
              <li key={feature} className="text-gray-900">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-row-reverse">
        <div className="flex-1">
          <img src={details2.image} alt="Image 2" className="rounded-md shadow-md  p-14 w-full h-full object-cover  sm:w-3/4  sm:h-3/4" />
        </div>
        <div className="flex-1 px-4 py-2 space-y-4 pt-4">
          <h3 className="text-lg font-bold text-white mb-1 pt-16">{details2.title}</h3>
          <p className="text-black text-lg font-bold "> {details2.description}</p>
          <ul className="list-disc space-y-2 p-4">
            {details2.features.map((feature) => (
              <li key={feature} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-row">
        <div className="flex-1">
          <img src={details3.image} alt="Image 3" className="rounded-md shadow-md w-full h-full object-cover  sm:w-3/4  sm:h-3/4 p-14" />
        </div>
        <div className="flex-1 px-4 py-2 space-y-4 pt-16">
          <h3 className="text-lg font-bold text-white mb-1">{details3.title}</h3>
          <p className="text-black text-lg font-bold">{details3.description}</p>
          <ul className="list-disc space-y-2 p-4">
            {details3.features.map((feature) => (
              <li key={feature} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

