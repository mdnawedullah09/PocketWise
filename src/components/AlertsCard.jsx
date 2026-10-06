import Icon from "./Icon";

function AlertsCard({ budgetUsed }) {
  const alerts = [
    { tone: "red", icon: "bell", text: `You have used ${Math.round(Math.max(0, budgetUsed + 25))}% of your monthly budget.` },
    { tone: "yellow", icon: "bulb", text: "Food spending has exceeded your category budget." },
    { tone: "green", icon: "check", text: "You're doing great! You're currently within your budget." },
  ];

  return (
    <div className="panel alerts-panel">
      <div className="panel-heading">
        <div className="heading-with-icon"><Icon name="bell" size={20} /><h2>Alerts</h2></div>
        <span className="view-all">View all</span>
      </div>
      <div className="alert-list">
        {alerts.map((alert, index) => (
          <div className={`alert-item ${alert.tone}`} key={index}>
            <Icon name={alert.icon} size={16} />
            <span>{alert.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertsCard;
