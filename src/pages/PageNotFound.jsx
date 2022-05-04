import React from "react";
import VideoBg from "../../src/assets/images/VideoBg.mp4";
import {Link} from 'react-router-dom'

const PageNotFound = () => {
 return (
  <div>
   <div className="h-full w-full">
    <video className="h-full w-full object-cover absolute" autoPlay loop muted>
     <source src={VideoBg} type="video/mp4" />
     Your browser do not support the video tag.
    </video>
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center">
     <div className="relative text-red-600 text-6xl sm:text-9xl font-bold z-10">
      OOPS!...404
     </div>
     <button className="relative z-10 rounded-lg text-xl sm:text-5xl py-3 px-4 border-transparent bg-black hover:bg-red-600">
    <a href='/'>BACK HOME</a>
     </button>
    </div>
   </div>
  </div>
 );
};

export default PageNotFound;
