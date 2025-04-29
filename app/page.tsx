import Chart from "./_components/chart";

const data = [{ id: "HOT" }, { id: "BTC" }];
export default function Home() {
  return (
    <div className="grid lg:grid-cols-2">
      {data.map((item) => (
        <div key={item.id}>
          <Chart id={item.id} />
        </div>
      ))}
    </div>
  );
}
