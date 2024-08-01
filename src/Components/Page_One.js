import React from "react";
import Apple_Logo from "../Image/Apple_Inc.-Logo.wine.svg";
import Google_Logo from "../Image/Google-Logo.wine.svg";
import Microsoft_Logo from "../Image/Microsoft-Logo.wine.svg";
import Spotify_Logo from "../Image/Spotify-Logo.wine.svg";
import Amazon_Logo from "../Image/Amazon_(company)-Logo.wine.svg";
import { useNavigate } from "react-router-dom";

const Page_One = () => {
  const Navigate = useNavigate();
  return (
    <div className="relative w-1/2 mx-auto top-36">
      <div className="text-base md:text-2xl lg:text-3xl text-[#0A0A23] font-bold space-y-9">
        <p>Learn to code-for free.</p>
        <p>Build projects.</p>
        <p>Earn certifications.</p>
        <p className="text-sm md:text-xl lg:text-2xl font-semibold">
          Since 2014, more than 40000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
      </div>
      <div className="w-[95%] flex justify-between items-center my-5">
        {/* Logos */}
        <img
          className="h-7 md:h-12 lg:h-16 xl:h-20 cursor-pointer"
          src={Apple_Logo}
        />
        <img
          className="h-7 md:h-12 lg:h-16 xl:h-20 cursor-pointer"
          src={Google_Logo}
        />
        <img
          className="h-7 md:h-12 lg:h-16 xl:h-20 cursor-pointer"
          src={Microsoft_Logo}
        />
        <img
          className="h-7 md:h-12 lg:h-16 xl:h-20 cursor-pointer"
          src={Spotify_Logo}
        />
        <img
          className="h-7 md:h-12 lg:h-16 xl:h-20 cursor-pointer"
          src={Amazon_Logo}
        />
      </div>
      <div className="flex justify-center my-5">
        {/* Button */}
        <button
          onClick={() => Navigate("signup")}
          className="px-7 md:px-14 py-1 text-base md:text-lg bg-gradient-to-b from-yellow-300 to-yellow-400 border-2 border-yellow-500 hover:from-yellow-400 hover:to-yellow-500"
        >
          Get Started (it's Free)
        </button>
      </div>
    </div>
  );
};

export default Page_One;
