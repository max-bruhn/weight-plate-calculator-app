import React, { useEffect } from 'react';

interface Props {}

const WeightsLifted: React.FC<Props> = () => {
  return (
    <>
      <div className="flex flex-wrap text-center text-gray-600">
        <div className="w-1/2">
          <h2>
            WEIGHT<span className="hidden sm:inline"> LIFTED</span>
          </h2>
          <div className="inline">
            <span className="mr-4 ">-</span>
            <input className="bg-dark border-b w-12 text-center text-light border-lightAccent" type="text" placeholder="160" />
            <span className="ml-4">+</span>
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

export default WeightsLifted;
