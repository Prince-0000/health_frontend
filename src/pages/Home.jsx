'use client';
import React from "react";
import group20 from "../asset/Group 20.png";

const Dashboard = () => {
  return (
    <div className="relative h-screen sm:grid sm:grid-cols-2 flex flex-row items-center">
      <div className="sm:ml-16 ml-10 mb-[4rem] text-left">
        <div className="text-black font-bold md:text-[2.3rem] sm:text-[1.8rem] text-[1.6rem] mb-3">
          Predict your <span className="text-blue-400">health,</span> <br />
          shape your future
        </div>
        <div className="sm:text-base text-xs font-medium text-slate-400">
          Get clear answers, <br />
          Yes or No on disease presence
        </div>
        <div className="text-black flex md:flex-row flex-col mt-5">
          <div>
            <button className="bg-blue-400 md:mr-2 md:mb-0 mb-3 text-white px-4 py-2 cursor-pointer rounded-lg sm:text-base text-sm">
              <a href="dashboard/heart">Heart</a>
            </button>
          </div>
          <div>
            <button className="bg-blue-400 text-white px-4 py-2 cursor-pointer rounded-lg sm:text-base text-sm">
              <a href="dashboard/diabetes">Diabetes</a>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden sm:w-3/6 sm:h-3/6 w-2/6 h-2/6 justify-center items-center absolute sm:right-0 right-10">
        <img
          src={group20}
          alt="Blockchain"
          className="object-cover lg:w-auto lg:h-auto right-0 shadow-md rounded-xl"
        />
      </div>
    </div>
  );
};

export default Dashboard;
