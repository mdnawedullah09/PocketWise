import Icon from "../components/Icon";
import BudgetProgress from "../components/BudgetProgress";

function Budget({ budget, totalSpent, remaining, budgetUsed, onBudgetChange }) {
  function updateBudget() {
    const value = window.prompt("Enter your monthly budget:", budget);
    if (value !== null) onBudgetChange(value);
  }

  return (
    <main className="page-content subpage">
      <div className="subpage-heading">
        <div>
          <p className="eyebrow">MONEY PLAN</p>
          <h2>Budget</h2>
          <p>Set a monthly limit and see how much room you have left.</p>
        </div>
        <button className="primary-button small-button" onClick={updateBudget}>Update Budget</button>
      </div>
      <div className="budget-page-grid">
        <BudgetProgress budget={budget} totalSpent={totalSpent} remaining={remaining} budgetUsed={budgetUsed} />
        <div className="panel budget-stat-card">
          <div className="budget-big-icon"><Icon name="wallet" size={28} /></div>
          <span>Monthly limit</span>
          <strong>₹{budget.toLocaleString("en-IN")}</strong>
          <p>{budgetUsed.toFixed(1)}% of your budget has been used.</p>
        </div>
      </div>
    </main>
  );
}

export default Budget;
