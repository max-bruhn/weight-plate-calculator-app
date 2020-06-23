import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ContentBox: React.FC<Props> = (props) => {
  return (
    <>
      <div className="mt-6 mx-1 py-6 px-6 bg-dark rounded-lg text-lightAccent">{props.children}</div>
    </>
  );
};

export default ContentBox;
