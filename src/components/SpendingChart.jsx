const categories = [
  { name: "Food", amount: 1200, color: "#15936b" },
  { name: "Travel", amount: 600, color: "#2f8fe6" },
  { name: "Shopping", amount: 500, color: "#f3b338" },
  { name: "Entertainment", amount: 450, color: "#f47738" },
  { name: "Education", amount: 400, color: "#7b50cf" },
  { name: "Bills", amount: 300, color: "#2da8a5" },
  { name: "Other", amount: 0, color: "#5da8bd" },
];

function formatCurrency(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function SpendingChart() {
  const total = categories.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  let currentAngle = 0;

  const gradientParts = categories
    .filter((item) => item.amount > 0)
    .map((item) => {
      const percentage = (item.amount / total) * 100;

      const start = currentAngle;
      const end = currentAngle + percentage * 3.6;

      currentAngle = end;

      return `${item.color} ${start}deg ${end}deg`;
    });

  const donutBackground = `conic-gradient(${gradientParts.join(", ")})`;

  return (
    <div className="breakdown-body">

      {/* DONUT CHART */}
      <div className="donut-wrap">
        <div
          className="donut-chart"
          style={{ background: donutBackground }}
        >
          <div className="donut-hole">
            <strong>{formatCurrency(total)}</strong>
            <span>Total Spent</span>
          </div>
        </div>
      </div>

      {/* CATEGORY LEGEND */}
      <div className="breakdown-list">
        {categories.map((item) => {
          const percentage =
            total > 0
              ? ((item.amount / total) * 100).toFixed(1)
              : "0.0";

          return (
            <div
              className="breakdown-item"
              key={item.name}
            >
              <div className="breakdown-label">
                <i
                  style={{
                    background: item.color,
                  }}
                />

                <span>{item.name}</span>
              </div>

              <strong>
                {formatCurrency(item.amount)}
              </strong>

              <small>{percentage}%</small>
            </div>
          );
        })}
      </div>

    </div>
  );
}