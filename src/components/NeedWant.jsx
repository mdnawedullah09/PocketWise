import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getNeedWantTotals } from "../utils/calculations";

function NeedWant({ expenses }) {
  const { needs, wants } = getNeedWantTotals(expenses);
  const total = needs + wants;
  const data = [{ name: "Needs", value: needs, color: "#15936b" }, { name: "Wants", value: wants, color: "#7b50cf" }];
  const needsPercent = total ? Math.round((needs / total) * 100) : 0;
  const wantsPercent = total ? Math.round((wants / total) * 100) : 0;

  return (
    <div className="panel needwant-panel">
      <div className="panel-heading">
        <div className="heading-with-icon"><span className="needs-icon">♧</span><h2>Need vs Want</h2></div>
      </div>
      <div className="needwant-body">
        <div className="needwant-donut">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={45} outerRadius={65} stroke="#fff" strokeWidth={2}>
                {data.map((item) => <Cell key={item.name} fill={item.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="needwant-center"><strong>{needsPercent}%</strong><span>Needs</span></div>
        </div>
        <div className="needwant-legend">
          <div><span className="legend-dot green" />Needs <strong>₹{needs.toLocaleString("en-IN")}</strong><small>{needsPercent}%</small></div>
          <div><span className="legend-dot purple" />Wants <strong>₹{wants.toLocaleString("en-IN")}</strong><small>{wantsPercent}%</small></div>
        </div>
      </div>
      <div className="needwant-note"><span>↗</span><b>{wantsPercent}%</b> of your spending this month was on wants.</div>
    </div>
  );
}

export default NeedWant;
