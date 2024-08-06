import React, { useEffect, useState } from "react";
import TradeChart from "../Components/TradeChart";

const loadScript = (src: string) => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.body.appendChild(script);
  });
};

interface CryptoWidgetProps {
  coin: string;
}

const CryptoWidget: React.FC<CryptoWidgetProps> = ({ coin }) => {
  useEffect(() => {
    loadScript("https://www.livecoinwatch.com/static/lcw-widget.js").catch(
      (error) => {
        console.error("Failed to load the LiveCoinWatch script:", error);
      }
    );

    return () => {
      const script = document.querySelector(
        `script[src="https://www.livecoinwatch.com/static/lcw-widget.js"]`
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{ height: "100%!", width: "100%" }} // Set height and width to 100% to match parent
      className="livecoinwatch-widget-1 graph"
      lcw-coin={coin}
      lcw-base="USD"
      lcw-secondary="BTC"
      lcw-period="d"
      lcw-color-tx="#ffffff"
      lcw-color-pr="#00d084"
      lcw-color-bg="#000000"
      lcw-border-w="1"
    ></div>
  );
};

const GeneralMarketWidget: React.FC = () => {
  useEffect(() => {
    loadScript("https://www.livecoinwatch.com/static/lcw-widget.js").catch(
      (error) => {
        console.error("Failed to load the LiveCoinWatch script:", error);
      }
    );
  }, []);

  return (
    <div
      className="livecoinwatch-widget-3"
      lcw-base="USD"
      lcw-d-head="true"
      lcw-d-name="true"
      lcw-d-code="true"
      lcw-d-icon="true"
      lcw-color-tx="#ffffff"
      lcw-color-bg="#000000"
      lcw-border-w="1"
    ></div>
  );
};

const MarqueeWidget: React.FC = () => {
  useEffect(() => {
    loadScript("https://www.livecoinwatch.com/static/lcw-widget.js").catch(
      (error) => {
        console.error("Failed to load the LiveCoinWatch script:", error);
      }
    );
  }, []);

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

const ApiPage: React.FC = () => {
  const coins: string[] = ["TRX", "SOL", "NEAR", "ETH", "AVAX", "DOT"];
  const [currentCoin, setCurrentCoin] = useState<string>("TRX");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCoin(e.target.value);
  };

  return (
    <div
      className="relative flex flex-wrap justify-center items-center pt-10 bg-black"
      style={{ height: "100vh" }}
    >
      <div className="flex w-1/2 h-full justify-evenly pb-60 items-center flex-col">
          <TradeChart />
      </div>
      <div className="h-full">
        <GeneralMarketWidget />
      </div>
      <div className="mt-4 fixed w-screen bg-black bottom-0">
        <MarqueeWidget />
      </div>
    </div>
  );
};

export default ApiPage;
