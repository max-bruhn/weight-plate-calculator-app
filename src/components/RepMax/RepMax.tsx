import React, { useEffect } from 'react';

interface Props {}

const RepMax: React.FC<Props> = () => {
  return (
    <>
      <div className=" mt-6  ">
        <h2 className="">REP MAX WEIGHTS</h2>
        <div className="flex flex-wrap mt-3">
          <div className="mb-2 md:mb-0 w-full">
            <div className="w-full  md:w-1/4 inline-block">
              <div className="md:w-1/2 inline-block">
                <span className="text-lightAccent mr-6 md:mr-0 text-xs">1 RM</span>
              </div>
              <div className="md:w-1/2 inline-block">
                <span className="text-light inline ">185 kg</span>
              </div>
            </div>
            <div className="w-full md:w-3/4 float-right">
              <span className="text-lightAccent mr-6 block md:inline text-xs">PLATES (PER SIDE)</span>

              <span className="text-light block md:inline">20 kg × 1 - 10 kg × 1 - 1.25 kg × 1 - 1.25 kg × 1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepMax;
