import React from "react";

const Page_Two = () => {
  return (
    <div className="text-center mt-5">
      <p className="text-lg font-bold m-3">Welcome to freeCodeCamp.org</p>
      <p className="text-sm font-semibold m-3">
        "I have not failed. I've just found 10,000 ways
      </p>
      <p className="text-sm font-semibold m-3">that won't work"</p>
      <p className="text-xs italic m-3">-Thomas A. Edison</p>
      <div className="mt-16 text-start w-1/2 mx-auto">
        <div className="bg-gray-300 m-3 p-3 border-2 border-black">
          <p className="font-bold">
            (New) Responsive Web Design Certification (300 Hours)
          </p>
        </div>
        <div className=" bg-gray-300 m-3 p-3 border-2 border-black">
          <p className="font-bold">
            Legacy Responsive Web Design Certification
          </p>
        </div>
        <div className=" bg-gray-300 m-3 p-3 border-2 border-black">
          <p className="font-bold">
            JavaScript Algorithms and Data Strutures Certification
          </p>
        </div>
        <div className=" bg-gray-300 m-3 p-3 border-2 border-black">
          <p className="font-bold">
            Front End Development Libraries Certification (300 Hours)
          </p>
        </div>
        <div className=" bg-gray-300 m-3 p-3 border-2 border-black">
          <p className="font-bold">
            Data Visualization Certification (300 Hours)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page_Two;
