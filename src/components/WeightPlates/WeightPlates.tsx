import React, { useState, useEffect, CSSProperties } from 'react';

import styles from './WeightPlates.module.scss';

interface Props {
  plate: number;
  amount: number;
}

const WeightPlates: React.FC<Props> = (props) => {
  let [color, setColor] = useState<string | undefined>();
  let [weight, setWeight] = useState<number | undefined>();
  let [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    setWeight(props.plate);

    if (props.plate === 25) {
      return setColor('#FB251C');
    } else if (props.plate === 20) {
      return setColor('#0B31FA');
    }
  }, [props.plate]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < props.amount; i++) {
      temp.push(i);
    }
    setArr(temp);
  }, [props.amount]);

  return (
    <>
      {arr.map((el, id) => {
        let svgStyles: CSSProperties = {
          marginRight: `0px`,
        };
        if (id !== arr.length - 1) {
          svgStyles = {
            marginRight: `-33px`,
          };
        }

        return (
          <svg key={id} className={`inline ${styles.scale}`} style={svgStyles} width="37" height="36" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter x="-11.4%" y="-11.8%" width="122.9%" height="123.5%" filterUnits="objectBoundingBox" id="a">
                <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.162423514 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#a)" fill="none" fillRule="evenodd">
              <ellipse stroke="#F2F2FF" fill={color} cx="17.5" cy="17" rx="17" ry="16.5" />
              <text fontFamily="RobotoMono-Regular, Roboto Mono" fontSize="16" fill="#F2F2FF">
                <tspan x="8" y="23">
                  {weight}
                </tspan>
              </text>
            </g>
          </svg>
        );
      })}
    </>
  );
};

export default WeightPlates;
