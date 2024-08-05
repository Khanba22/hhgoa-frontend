import React, { useEffect } from "react";
import loadScript from "../Functions/loadscript";

const MarqueeWidget: React.FC = () => {
  useEffect(() => {
    console.log(loadScript);
    loadScript("https://www.livecoinwatch.com/static/lcw-widget.js").catch(
      (error) => {
        console.error("Failed to load the LiveCoinWatch script:", error);
      }
    );
  }, []);
  console.log("MarqueeWidget Loaded");

  return (
    <div
      className="livecoinwatch-widget-5"
      lcw-base="USD"
      lcw-color-tx="#999999"
      lcw-marquee-1="coins"
      lcw-marquee-2="movers"
      lcw-marquee-items="10"
    ></div>
  );
};

export default MarqueeWidget;
