import React, { useEffect, ReactNode } from 'react';
import ContentBox from '../ContentBox/ContentBox';
import WeightsLifted from '../WeightsLifted/WeightsLifted';
import Estimate from '../Estimate/Estimate';
import RepMax from '../RepMax/RepMax';
import Percentage from '../Percentage/Percentage';
import Footer from '../Footer/Footer';

interface Props {}

const Content: React.FC<Props> = () => {
  return (
    <>
      <ContentBox>
        <WeightsLifted />
      </ContentBox>
      <ContentBox>
        <Estimate />
        <RepMax />
        <Percentage />
      </ContentBox>
      <ContentBox>
        <Footer />
      </ContentBox>
    </>
  );
};

export default Content;
