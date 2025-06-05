// src/components/WaveTop.jsx
export default function WaveTop({ fill = "#f5eee5", height = 120, className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        className={`block w-full h-[${height}px] rotate-180`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,0 480,128 720,64 C960,0 1200,128 1440,64 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
