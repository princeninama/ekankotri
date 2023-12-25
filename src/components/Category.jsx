import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car from "../assets/car.jpeg";
const Category = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className=" text-white h-screen w-3/4 m-auto">
      <div>
        <Slider
          {...settings}
          className="h-80 mt-56 flex items-center text-center"
        >

            <div className="bg-slate-400 mr-4 h-80 w-40 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Birthday Party</h3>
              </div>
            </div>
            <div className="bg-red-400  mr-4 h-80  w-40 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Wedding</h3>
              </div>
            </div>
            <div className="bg-red-500 mr-4  h-80 w-40 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Conferences and Seminars</h3>
              </div>
            </div>
            <div className="bg-red-600  mr-4 h-80 w-40 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Workshops and Training Sessions</h3>
              </div>
            </div>
            <div className="bg-red-700 mr-4 w-40 h-80 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Hackathons</h3>
              </div>
            </div>
            <div className="bg-red-900  mr-4 w-40 h-80 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={car} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="bg-black h-20">
                <h3>Cultural Festivals:</h3>
              </div>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
