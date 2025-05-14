import Chart from "./_components/chart";

const data = [{ id: "HOT" }, { id: "ETH" }, { id: "BTC" }];
export default function Home() {
  return (
    <div className="grid lg:grid-cols-6">
      {data.map((item) => (
        <div key={item.id} className="lg:col-span-2">
          <Chart id={item.id} />
        </div>
      ))}
    </div>
  );
}
