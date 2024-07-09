
import React from 'react';
import styles from './AnimatedSVG.module.css';

export const AnimatedSVG: React.FC = () => {
  return (
    <div className={styles.container}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3000 2000"
        xmlSpace="preserve"
        className={styles.svg}
      >
        <rect width="3000" height="2000" fill="#FFCC99" />
        <g id="mountains">
          <path fill="#336600" d="M0,1000 L1500,500 L3000,1000 L3000,2000 L0,2000 Z" />
        </g>
        <circle id="sun" fill="#F6A724" cx="1500" cy="1800" r="100" />
        <path
          id="sea"
          fill="#1E90FF"
          d="M0,1800 Q1500,1600 3000,1800 L3000,2000 L0,2000 Z"
        />
      </svg>
    </div>
  );
};
