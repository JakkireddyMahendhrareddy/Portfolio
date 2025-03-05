import React, { useState } from "react";

const PortfolioLogo = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <PortfolioText />
    </div>
  );
};

const PortfolioText = () => {
  const [hover, setHover] = useState(false);

  return (
    <span
      className={`text-3xl font-bold transition duration-300 ease-in-out cursor-pointer ${
        hover ? "text-green-500" : "text-white"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Portfolio
    </span>
  );
};

export default PortfolioLogo;
