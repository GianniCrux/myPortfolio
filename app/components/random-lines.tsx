'use client'

import React from 'react'

function StraightLines() {
  const lines = 
/*   [
    { startX: 5, startY: 5, length: 40, angle: 45, curved: false },
    { startX: 95, startY: 5, length: 40, angle: 135, curved: false },
    { startX: 5, startY: 95, length: 40, angle: 315, curved: false },
    { startX: 95, startY: 95, length: 40, angle: 225, curved: false },
    /* { startX: 50, startY: 50, length: 50, angle: 0, curved: false },  //center line
  ] */
    [
      { startX: 5, startY: 5, length: 40, angle: 45, curved: false },
      { startX: 95, startY: 5, length: 40, angle: 135, curved: false },
      { startX: 5, startY: 95, length: 40, angle: 315, curved: false },
      { startX: 95, startY: 95, length: 40, angle: 225, curved: false },
    ]

  return (
    <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
      {lines.map((line, index) => (
        <div
          key={index}
          className="absolute bg-green-500"
          style={{
            left: `${line.startX}%`,
            top: `${line.startY}%`,
            width: '2px',
            height: `${line.length}%`,
            transform: `rotate(${line.angle}deg)`,
            borderRadius: line.curved ? '50%' : '0',
          }}
        />
      ))}
    </div>
  )
}

function RoundedLines() {
  const lines = [
  // Top-left corner
  "M5,5 C20,20 10,30 30,25 S40,5 35,15",
  
  // Top-right corner
  "M95,5 C80,20 90,30 70,25 S60,5 65,15",
  
  // Bottom-left corner
  "M5,95 C20,80 10,70 30,75 S40,95 35,85",
  
  // Bottom-right corner
  "M95,95 C80,80 90,70 70,75 S60,95 65,85"
  ]

  return (
    <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="blue" // Light blue color
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  )
}

export default function RandomLines() {
  return (
    <>
      <StraightLines />
      <RoundedLines />
    </>
  )
}