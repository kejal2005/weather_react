// import React, { useState, useEffect } from 'react'; 
// import useDate from "../utils/useDate.jsx";
// import sun from './assets/icons/sun.png';
// import cloud from './assets/icons/cloud.png';
// import fog from './assets/icons/fog.png';
// import rain from './assets/icons/rain.png';
// import snow from './assets/icons/snow.png';
// import storm from './assets/icons/storm.png';
// import windy from './assets/icons/windy.png';

// // import clear from './assets/icons/clear.png';
// import '../index.css';

// const WeatherCard = ({
//    temperature,
//    windspeed,
//    humidity,
//    place,
//    heatIndex,
//    iconString,
//    conditions,
// }) => {

//   const [icon, setIcon] = useState(sun);
//   const { time } = useDate();

//   useEffect(() => {
//     if (iconString) {
//       if (iconString.toLowerCase().includes('cloud')) {
//         setIcon(cloud);
//       } else if (iconString.toLowerCase().includes('rain')) {
//         setIcon(rain);
//       } else if (iconString.toLowerCase().includes('sun')) {
//         setIcon(sun);
//       } else if (iconString.toLowerCase().includes('thunder')) {
//         setIcon(storm);
//       } else if (iconString.toLowerCase().includes('fog')) {
//         setIcon(fog);
//       } else if (iconString.toLowerCase().includes('snow')) {
//         setIcon(snow);
//       } else if (iconString.toLowerCase().includes('wind')) {
//         setIcon(windy);
//       }
//     }
//   }, [iconString]);

//   return (
//     <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
//       <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
//         <img src={icon} alt="Weather Icon" />
//         <p className='font-bold text-5xl'>{temperature} &deg;C</p>
//       </div>
//       <div className='font-bold text-center text-xl'>
//         {place}
//       </div>
//       <div className='w-full flex justify-between items-center mt-4'>
//         <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
//         <p className='flex-1 text-center p-2'>{time}</p>
//       </div>
//       <div className='w-full flex justify-between items-center mt-4 gap-4'>
//         <div className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
//           Wind Speed <p className='font-normal'>{windspeed} km/h</p>
//         </div>
//         <div className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
//           Humidity <p className='font-normal'>{humidity} %</p>
//         </div>
//       </div>
//       <div className='w-full p-3 mt-4 flex justify-between items-center'>
//         <p className='font-semibold text-lg'>Heat Index</p>
//         <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
//       </div>
//       <hr className='bg-slate-600'/>
//       <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
//         {conditions}
//       </div>
//     </div>
//   );
// }

// export default WeatherCard;
// import React, { useState, useEffect } from 'react';
// import { IconType } from '../utils/iconTypes'; // Define icon types as enums or constants

// const WeatherCard = ({
//   temperature,
//   windspeed,
//   humidity,
//   place,
//   heatIndex,
//   iconString,
//   conditions,
// }) => {
//   const [icon, setIcon] = useState(IconType.Sun); 
//   const { time } = useDate(); 

//   useEffect(() => {
//     if (iconString) {
//       switch (iconString) {
//         case IconType.Cloud:
//           setIcon(IconType.Cloud);
//           break;
//         case IconType.Rain:
//           setIcon(IconType.Rain);
//           break;
//         case IconType.Sun:
//           setIcon(IconType.Sun);
//           break;
//         case IconType.Thunder:
//           setIcon(IconType.Storm);
//           break;
//         case IconType.Fog:
//           setIcon(IconType.Fog);
//           break;
//         case IconType.Snow:
//           setIcon(IconType.Snow);
//           break;
//         case IconType.Wind:
//           setIcon(IconType.Windy);
//           break;
//         default:
//           setIcon(IconType.Sun); 
//       }
//     }
//   }, [iconString]);
  

//   return (
//         <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
//           <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
//             <img src={icon} alt="Weather Icon" />
//             <p className='font-bold text-5xl'>{temperature} &deg;C</p>
//           </div>
//           <div className='font-bold text-center text-xl'>
//             {place}
//           </div>
//           <div className='w-full flex justify-between items-center mt-4'>
//             <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
//             <p className='flex-1 text-center p-2'>{time}</p>
//           </div>
//           <div className='w-full flex justify-between items-center mt-4 gap-4'>
//             <div className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
//               Wind Speed <p className='font-normal'>{windspeed} km/h</p>
//             </div>
//             <div className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
//               Humidity <p className='font-normal'>{humidity} %</p>
//             </div>
//           </div>
//           <div className='w-full p-3 mt-4 flex justify-between items-center'>
//             <p className='font-semibold text-lg'>Heat Index</p>
//             <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
//           </div>
//           <hr className='bg-slate-600'/>
//           <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
//             {conditions}
//           </div>
//         </div>
//       );
//     }
    

// export default WeatherCard;

import React, { useState, useEffect } from 'react'; 
import useDate from "../utils/useDate.jsx"; 
import sun from './assets/icons/sun.png';
import cloud from './assets/icons/cloud.png';
import fog from './assets/icons/fog.png';
import rain from './assets/icons/rain.png';
import snow from './assets/icons/snow.png';
import storm from './assets/icons/storm.png';
import wind from './assets/icons/windy.png';


import '../index.css';

// const WeatherCard = ({
//    temperature,
//    windspeed,
//    humidity,
//    place,
//    heatIndex,
//    iconString,
//    conditions,
// }) => {
//   const [icon, setIcon] = useState(sun); 
//   const { time } = useDate();

//   useEffect(() => {
//     const iconMap = {
//       cloud: cloud,
//       rain: rain,
//       sun: sun,
//       thunder: storm,
//       fog: fog,
//       snow: snow,
//       wind: windy,
//     };

//     if (iconString) {
//       const matchedIcon = Object.keys(iconMap).find(key => iconString.toLowerCase().includes(key));
//       setIcon(matchedIcon ? iconMap[matchedIcon] : sun); 
//     }
//   }, [iconString]);

//   return (
//     <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
//       <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
//         <img src={icon} alt="Weather Icon" />
//         <p className='font-bold text-5xl'>{temperature} &deg;C</p>
//       </div>
//       <div className='font-bold text-center text-xl'>
//         {place}
//       </div>
//       <div className='w-full flex justify-between items-center mt-4'>
//         <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
//         <p className='flex-1 text-center p-2'>{time}</p>
//       </div>
//       <div className='w-full flex justify-between items-center mt-4 gap-4'>
//         <div className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
//           Wind Speed <p className='font-normal'>{windspeed} km/h</p>
//         </div>
//         <div className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
//           Humidity <p className='font-normal'>{humidity} %</p>
//         </div>
//       </div>
//       <div className='w-full p-3 mt-4 flex justify-between items-center'>
//         <p className='font-semibold text-lg'>Heat Index</p>
//         <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
//       </div>
//       <hr className='bg-slate-600'/>
//       <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
//         {conditions}
//       </div>
//     </div>
//   );
// }

// export default WeatherCard;
// import React, { useEffect, useState } from 'react';
// import { useDate } from "../utils/useDate.jsx"
// import sun from "./assets/icons/sun.png";
// import cloud from "./assets/icons/cloud.png";
// import fog from "./assets/icons/fog.png";
// import rain from "./assets/icons/rain.png";
// import snow from "./assets/icons/snow.png";
// import storm from "./assets/icons/storm.png";
// import wind from "./assets/icons/wind.png";
// import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()
  const [clothing, setClothing] = useState("")

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  const getClothingRecommendation = () => {
    if (temperature >= 30) {
      return "Wear light, breathable clothes like T-shirts and shorts."
    } else if (temperature >= 20 && temperature < 30) {
      return "You might want to wear something comfortable like a long-sleeved shirt or a light jacket."
    } else if (temperature >= 10 && temperature < 20) {
      return "Consider wearing a sweater or a light coat."
    } else if (temperature >= 0 && temperature < 10) {
      return "It's chilly. Wear a warm coat, and maybe a scarf and gloves."
    } else {
      return "Wear heavy winter clothing, including a thick coat, gloves, and a hat."
    }
  }

  useEffect(() => {
    setClothing(getClothingRecommendation())
  }, [temperature])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
      <div className='w-full p-4 flex justify-center items-center text-lg font-semibold text-blue-500'>
        {clothing}
      </div>
    </div>
  )
}

export default WeatherCard;