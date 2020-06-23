import React, { useEffect } from 'react';

interface Props {}

const Percentage: React.FC<Props> = () => {
  return (
    <>
      <div className="w-full mt-6 ">
        <h2 className="">% OF 1 RM</h2>
        <div className="flex flex-wrap mt-3">
          <div className="w-full md:w-1/5">
            <div className="md:w-1/2 inline-block">
              <span className="text-lightAccent mr-6 md:mr-0">110%</span>
            </div>
            <div className="md:w-1/2 inline-block">
              <span className="text-light">203 kg</span>
            </div>
          </div>
          <div className="w-full  md:w-4/5">
            <span className="text-lightAccent mr-6 block md:inline-block">PLATES (PER SIDE):</span>

            <div className="inline-block">
              <span className="text-light">20 kg × 1 - 10 kg × 1 - 1.25 kg × 1</span>
              <span className="text-lightAccent ml-4">(− 2 kg)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Percentage;
