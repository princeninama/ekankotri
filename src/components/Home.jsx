import React from "react";
import videoBg from "../assets/v2.mp4";
import couple from "../assets/couples.jpg";
import garba from "../assets/garba.jpeg";
import mrgdone from "../assets/mrgdone.jpeg";
import dine from "../assets/dine.jpeg";
import hastmelap from "../assets/hastmelap.webp";
import car from "../assets/car.jpeg";
import "./style.css";

const EventCard = ({ image, title, time }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} className="h-80" alt="" />
        </div>
        <div className="flip-card-back bg-black text-white">
          <p>{title}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <div className="mt-0 w-full h-full z-10">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          className="absolute w-full  h-[100%] "
        ></video>
        <img
          src={couple}
          className="absolute ml-[1000px] z-10 h-[400px] rounded-full shadow-lg shadow-red-200 mt-44 w-auto"
          alt=""
        />
        <div className="p-[200px] text-center absolute text-red-200">
          <p className="text-xl z-10">MAY 2ND 2024</p>
          <p className="text-[100px] font-serif pt-5 z-10">Tejas</p>
          <p className="font-serif text-2xl text-white">#Twintej</p>
          <p className="text-[100px] font-serif  z-10">Twinkal</p>
        </div>
      </div>
      <div className="mt-[810px] bg-gradient-to-r from-red-100  p-4 to-pink-300 ">
        <div className="flex">
          <h1 className="pt-9">01 MAY</h1>
          <h1 className="text-[40px] pt-2 pl-4"> Wednesday</h1>
        </div>
        <div className="flex rounded-lg h-96 z-10  space-x-40 text-center ml-[90px] mt-40">
          <EventCard
            image={mrgdone}
            className="h-80 w-full "
            title="Baarat"
            time="4 PM to 8 PM"
          />

          <EventCard image={garba} title="Ras Garba" time="9 PM to 1 AM" />
          <EventCard image={dine} title="Dinner" time="7 PM to 9 PM" />
        </div>
        <div className="flex">
          <h1 className="pt-9">02 MAY</h1>
          <h1 className="text-[40px] pt-2 pl-4">THURSDAY</h1>
        </div>
        <div className="flex rounded-lg h-96 space-x-40 text-center ml-[330px] mt-36">
          <EventCard image={car} title="Jaan Prasthan" time="8 AM." />
          <EventCard image={hastmelap} title="Hast Melap" time="9 AM." />
        </div>
      </div>
    </>
  );
};

export default Home;
