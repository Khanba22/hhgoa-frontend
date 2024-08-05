import React, { useEffect, useState } from "react";

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

const App: React.FC = () => {
  const coins: string[] = ["TRX", "SOL", "NEAR", "ETH", "AVAX", "DOT"];
  const [currentCoin, setCurrentCoin] = useState<string>("TRX");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCoin(e.target.value);
  };

  return (
    <div className="relative bg-black" style={{ height: "100vh" }}>
      <h1 className="text-white text-center text-5xl pt-10">Heading</h1>
      <div className="flex absolute top-36 h-5/12 w-1/2 bg-black justify-evenly mx-20  items-center flex-col">
        <CryptoWidget key={currentCoin} coin={currentCoin} />
        <select
          name="coin-select"
          value={currentCoin}
          onChange={handleChange}
          className="mt-4 outline-none bg-green-400 w-6/12 px-2 py-1 border rounded"
        >
          {coins.map((coin) => (
            <option key={coin} value={coin}>
              {coin}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute top-10 right-0 mt-10 mr-4">
        <GeneralMarketWidget />
      </div>
      <div className="mt-4 fixed w-full bg-black bottom-0">
        <MarqueeWidget />
      </div>
    </div>
  );
};

export default App;
