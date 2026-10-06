function BudgetProgress({ budget, totalSpent, remaining, budgetUsed }) {
  const width = Math.min(100, Math.max(0, budgetUsed));
  return (
    <div className="panel budget-progress-panel">
      <div className="panel-heading">
        <h2>Monthly Budget</h2>
      </div>
      <div className="budget-spent-line">
        <strong>₹{totalSpent.toLocaleString("en-IN")}</strong>
        <span>/ ₹{budget.toLocaleString("en-IN")} spent</span>
        <b>{budgetUsed.toFixed(1)}%</b>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <div className="remaining-line">
        <span className="remaining-symbol">◉</span>
        <strong>₹{Math.max(0, remaining).toLocaleString("en-IN")}</strong> remaining
      </div>
    </div>
  );
}

export default BudgetProgress;
