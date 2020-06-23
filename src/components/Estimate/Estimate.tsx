import React, { useEffect } from 'react';

interface Props {}

const Estimate: React.FC<Props> = () => {
  return (
    <>
      <div className="flex flex-wrap text-center text-gray-600">
        <div className="w-1/2">
          <h2>
            <span className="hidden sm:inline">ESTIMATED </span>1 REP MAX
          </h2>
          <div className="inline">
            <span className="bg-dark  w-12 text-center text-light "> 185 kg</span>
          </div>
        </div>
        <div className="w-1/2">
          <h2>
            REPS<span className="hidden sm:inline"> PERFORMED</span>
          </h2>
          <div className="inline">
            <span className="mr-4 ">-</span>
            <input className="bg-dark border-b w-12 text-center text-light border-lightAccent" type="text" placeholder="1" />
            <span className="ml-4">+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estimate;
