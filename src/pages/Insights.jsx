import SpendingChart from "../components/SpendingChart";
import TrendChart from "../components/TrendChart";
import NeedWant from "../components/NeedWant";
import InsightCard from "../components/InsightCard";
import AlertsCard from "../components/AlertsCard";

function Insights({ expenses, totalSpent, remaining, budgetUsed }) {
  return (
    <main className="page-content subpage">
      <div className="subpage-heading">
        <div>
          <p className="eyebrow">ANALYSIS</p>
          <h2>Insights</h2>
          <p>Simple patterns that help you make better spending decisions.</p>
        </div>
      </div>
      <div className="insights-grid">
        <SpendingChart expenses={expenses} totalSpent={totalSpent} />
        <InsightCard totalSpent={totalSpent} remaining={remaining} budgetUsed={budgetUsed} />
        <TrendChart expenses={expenses} />
        <NeedWant expenses={expenses} />
        <AlertsCard budgetUsed={budgetUsed} />
      </div>
    </main>
  );
}

export default Insights;
