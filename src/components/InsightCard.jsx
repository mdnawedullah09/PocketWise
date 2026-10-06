import Icon from "./Icon";

function InsightCard({ totalSpent, remaining, budgetUsed }) {
  const foodPercent = totalSpent > 0 ? 34.8 : 0;
  const dailyAverage = totalSpent > 0 ? Math.round(totalSpent / Math.max(1, new Date().getDate())) : 0;

  const insights = [
    {
      tone: "green",
      icon: "arrow",
      text: <>You spent <strong>₹{Math.max(0, Math.round(totalSpent * 0.13)).toLocaleString("en-IN")}</strong> more on food than last month.</>,
    },
    {
      tone: "blue",
      icon: "trend",
      text: <>Your average daily spending is <strong>₹{dailyAverage.toLocaleString("en-IN")}</strong>.</>,
    },
    {
      tone: "green",
      icon: "check",
      text: remaining >= 0
        ? <>At your current spending rate, you are likely to stay within your monthly budget.</>
        : <>You are above your monthly budget. Consider reducing wants this week.</>,
    },
  ];

  return (
    <div className="panel smart-panel">
      <div className="panel-heading">
        <div className="heading-with-icon insight-heading">
          <Icon name="bulb" size={22} />
          <h2>Smart Insights</h2>
        </div>
        <span className="view-all">View all</span>
      </div>

      <div className="insight-list">
        {insights.map((item, index) => (
          <div className={`insight-item ${item.tone}`} key={index}>
            <span className="insight-icon"><Icon name={item.icon} size={17} /></span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="insight-summary">
        <span>Budget used</span>
        <strong>{Math.max(0, budgetUsed).toFixed(1)}%</strong>
      </div>
    </div>
  );
}

export default InsightCard;
