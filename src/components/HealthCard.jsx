import Icon from "./Icon";
import { getHealthScore } from "../utils/calculations";

function HealthCard({ budgetUsed, remaining }) {
  const score = getHealthScore(budgetUsed, remaining);
  const status = score >= 75 ? "Good" : score >= 55 ? "Moderate" : "Needs attention";
  const circumference = 2 * Math.PI * 42;
  const dash = circumference * (score / 100);

  return (
    <div className="panel health-panel">
      <div className="panel-heading">
        <div className="heading-with-icon"><Icon name="chart" size={20} /><h2>PocketWise Spending Health</h2></div>
      </div>
      <div className="health-body">
        <div className="health-ring">
          <svg viewBox="0 0 100 100">
            <circle className="health-track" cx="50" cy="50" r="42" />
            <circle
              className="health-value"
              cx="50"
              cy="50"
              r="42"
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>
          <div className="health-number"><strong>{score}</strong><span>/100</span></div>
        </div>
        <div>
          <strong className="health-status">{status}</strong>
          <p>You&apos;re in control of your spending!</p>
        </div>
      </div>
    </div>
  );
}

export default HealthCard;
