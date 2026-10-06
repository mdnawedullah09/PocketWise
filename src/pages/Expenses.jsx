import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses({ expenses, onAddExpense, onDeleteExpense }) {
  return (
    <main className="page-content subpage">
      <div className="subpage-heading">
        <div>
          <p className="eyebrow">TRANSACTIONS</p>
          <h2>Expenses</h2>
          <p>Track every rupee and keep your spending visible.</p>
        </div>
      </div>
      <div className="subpage-grid">
        <ExpenseForm onAddExpense={onAddExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
      </div>
    </main>
  );
}

export default Expenses;
