import SummaryCards from "../components/SummaryCards";
import BudgetProgress from "../components/BudgetProgress";
import SpendingChart from "../components/SpendingChart";
import InsightCard from "../components/InsightCard";
import ExpenseList from "../components/ExpenseList";
import HealthCard from "../components/HealthCard";
import SavingGoal from "../components/SavingGoal";
import AlertsCard from "../components/AlertsCard";
import TrendChart from "../components/TrendChart";
import NeedWant from "../components/NeedWant";

function Dashboard({
  budget,
  expenses,
  totalSpent,
  remaining,
  budgetUsed,
  onAddExpense,
  onDeleteExpense,
}) {
  return (
    <main className="page-content">
      <SummaryCards
        budget={budget}
        totalSpent={totalSpent}
        remaining={remaining}
        budgetUsed={budgetUsed}
      />

      <section className="dashboard-grid top-grid">
        <BudgetProgress
          budget={budget}
          totalSpent={totalSpent}
          remaining={remaining}
          budgetUsed={budgetUsed}
        />
        <SpendingChart expenses={expenses} totalSpent={totalSpent} />
        <InsightCard
          totalSpent={totalSpent}
          remaining={remaining}
          budgetUsed={budgetUsed}
        />
      </section>

      <section className="dashboard-grid middle-grid">
        <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} compact />
        <div className="right-stack">
          <HealthCard budgetUsed={budgetUsed} remaining={remaining} />
          <SavingGoal />
        </div>
      </section>

      <section className="dashboard-grid bottom-grid">
        <TrendChart expenses={expenses} />
        <NeedWant expenses={expenses} />
        <AlertsCard budgetUsed={budgetUsed} />
      </section>
    </main>
  );
}

export default Dashboard;
