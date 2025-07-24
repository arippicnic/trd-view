import Chart from "./_components/chart";

const data = [
  { id: "HOT", symbol: "BINANCE:HOTUSDT" },
  { id: "ETH", symbol: "BINANCE:ETHUSDT" },
  { id: "BTC", symbol: "BINANCE:BTCUSDT" },
  { id: "BTC.D", symbol: "CRYPTOCAP:BTC.D" },
];
export default function Home() {
  return (
    <div className="grid lg:grid-cols-8">
      {data.map((item) => (
        <div key={item.id} className="lg:col-span-2">
          <Chart id={item.id} symbol={item.symbol} />
        </div>
      ))}
    </div>
  );
}
