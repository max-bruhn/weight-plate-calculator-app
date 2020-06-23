import React from 'react';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <>
      <div className="py-6 px-6 mx-1 3bg-dark rounded-b-lg text-light">
        <div className="inline-block h-12 border-gray-600 text-bg-blue-100">
          PLATE <br /> <span className="text-primary">CALCULATOR</span>
        </div>
        <div className="inline float-right">
          <div className="">
            <button className="border border-gray-600 py-2 px-4 text-xs">SETTINGS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
