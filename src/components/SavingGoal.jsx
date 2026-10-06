import Icon from "./Icon";

function SavingGoal() {
  const saved = 2800;
  const target = 5000;
  const percent = (saved / target) * 100;

  return (
    <div className="panel saving-panel">
      <div className="panel-heading">
        <div className="heading-with-icon"><Icon name="target" size={20} /><h2>Saving Goal</h2></div>
        <span className="chevron-right">›</span>
      </div>
      <strong className="goal-name">Emergency Fund</strong>
      <div className="goal-values"><span>₹{saved.toLocaleString("en-IN")} / ₹{target.toLocaleString("en-IN")}</span><b>{percent.toFixed(0)}%</b></div>
      <div className="progress-track small"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
      <div className="goal-footer"><span>Target: ₹5,000</span><span>Deadline: 31 Dec 2026</span></div>
    </div>
  );
}

export default SavingGoal;
