'use client'

import React from 'react'

function StraightLines() {
  const lines = [
    { startX: 5, startY: 5, length: 10, angle: 45, curved: false },
    { startX: 95, startY: 5, length: 10, angle: 135, curved: false },
    { startX: 5, startY: 95, length: 10, angle: 315, curved: false },
    { startX: 95, startY: 95, length: 10, angle: 225, curved: false },
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
    // Top-left 
    "M5,5 C10,10 5,15 10,20 S15,25 10,30",
    
    // Top-right 
    "M95,5 C90,10 95,15 90,20 S85,25 90,30",
    
    // Bottom-left 
    "M5,95 C10,90 5,85 10,80 S15,75 10,70",
    
    // Bottom-right 
    "M95,95 C90,90 95,85 90,80 S85,75 90,70"
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
