'use client'

import React from 'react'

function SketchyLines() {
  const lines = [
/*     // Left side
    "M10,30 C5,40 15,50 10,60 S5,80 10,90",
    
    // Right side
    "M90,30 C95,40 85,50 90,60 S95,80 90,90",
    
    // Top left corner
    "M5,5 Q10,10 15,5",
    
    // Top right corner
    "M85,5 Q90,10 95,5",
    
    // Bottom left corner
    "M5,95 Q10,90 15,95",
    
    // Bottom right corner
    "M85,95 Q90,90 95,95" */
    // Bottom left corner, diagonal pointing up-right
    "M10,90 L20,80",
    
    // Top right corner, diagonal pointing down-left
    "M80,10 L90,20"
  ]

  return (
    <div data-aos="fade-down" className="absolute inset-0 z-0 pointer-events-none">
      <svg className="w-screen h-screen" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="blue"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  )
}

export default function RandomLines() {
  return <SketchyLines />
}