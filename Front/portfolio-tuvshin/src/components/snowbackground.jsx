import React from 'react';

const SnowBackground = () => {
  const snowflakes = Array.from({ length: 200 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[9999]">
      {snowflakes.map((_, i) => {
        const size = Math.random() * 4 + 2 + "px";
        const left = Math.random() * 100 + "%";
        const duration = Math.random() * 10 + 5 + "s";
        const delay = Math.random() * 5 + "s";

        return (
          <div
            key={i}
            className="snowflake absolute bg-white rounded-full opacity-40"
            style={{
              width: size,
              height: size,
              left: left,
              animationDuration: duration,
              animationDelay: delay,
              filter: "blur(0.5px)"
            }}
          />
        );
      })}
    </div>
  );
};

export default SnowBackground;