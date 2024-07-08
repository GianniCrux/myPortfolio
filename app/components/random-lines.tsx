'use client'

export default function RandomLines() {
  const lines = [
    { startX: 10, startY: 20, length: 40, angle: 45, curved: false },
    { startX: 80, startY: 10, length: 50, angle: 135, curved: true },
    { startX: 30, startY: 70, length: 30, angle: 90, curved: false },
    { startX: 60, startY: 50, length: 35, angle: 180, curved: true },
    { startX: 20, startY: 40, length: 45, angle: 225, curved: false },
    { startX: 70, startY: 80, length: 25, angle: 315, curved: true },
    { startX: 40, startY: 30, length: 55, angle: 0, curved: false },
    { startX: 90, startY: 60, length: 20, angle: 270, curved: true },
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