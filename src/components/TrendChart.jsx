import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function TrendChart({ expenses }) {
  const points = [
    { day: "1 Oct", amount: 500 },
    { day: "4 Oct", amount: 350 },
    { day: "7 Oct", amount: 700 },
    { day: "10 Oct", amount: 680 },
    { day: "14 Oct", amount: 600 },
    { day: "17 Oct", amount: 700 },
    { day: "21 Oct", amount: 1050 },
    { day: "24 Oct", amount: 920 },
    { day: "28 Oct", amount: 1150 },
    { day: "30 Oct", amount: 1300 },
  ];

  const actual = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  if (actual > 0) {
    const scale = Math.min(1.4, Math.max(0.35, actual / 3450));
    points.forEach((point, index) => {
      point.amount = Math.round(point.amount * scale);
      if (index === points.length - 1) point.amount = Math.round(actual / Math.max(1, new Date().getDate()) * 30);
    });
  }

  return (
    <div className="panel trend-panel">
      <div className="panel-heading">
        <div className="heading-with-icon"><span className="trend-icon">⌁</span><h2>Spending Trend</h2></div>
        <button className="range-button" type="button">Last 30 days <span>⌄</span></button>
      </div>
      <div className="trend-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={points} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="#e8eceb" vertical horizontal />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#61706c" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#7b8581" }} axisLine={false} tickLine={false} width={48} />
            <Tooltip formatter={(value) => `₹${Number(value).toLocaleString("en-IN")}`} />
            <Line type="monotone" dataKey="amount" stroke="#15936b" strokeWidth={2.5} dot={{ r: 3, fill: "#15936b", stroke: "#fff", strokeWidth: 2 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendChart;
