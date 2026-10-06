import Icon from "./Icon";
import { formatDate, CATEGORY_META } from "../utils/calculations";

function ExpenseList({ expenses, onDeleteExpense, compact = false }) {
  const sorted = expenses.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));

  return (
    <div className={`panel recent-panel ${compact ? "compact" : ""}`}>
      <div className="panel-heading">
        <div className="heading-with-icon">
          <Icon name="receipt" size={21} />
          <h2>Recent Expenses</h2>
        </div>
        <span className="view-all">View all</span>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">No expenses yet. Add your first expense above.</div>
      ) : (
        <div className="expense-table">
          <div className="expense-table-head">
            <span>Date</span>
            <span>Description</span>
            <span>Category</span>
            <span>Amount</span>
            <span />
          </div>

          {sorted.slice(0, compact ? 5 : 50).map((expense) => {
            const meta = CATEGORY_META[expense.category] || CATEGORY_META.Other;
            return (
              <div className="expense-row" key={expense.id}>
                <span className="expense-date">{formatDate(expense.date)}</span>
                <span className="expense-description">
                  <span className="category-badge" style={{ color: meta.color }}>
                    <Icon name={meta.icon === "food" ? "receipt" : meta.icon === "travel" ? "trend" : "wallet"} size={15} />
                  </span>
                  {expense.description}
                </span>
                <span className="expense-category">
                  <span className="category-dot" style={{ background: meta.color }} />
                  {expense.category}
                </span>
                <strong>₹{Number(expense.amount).toLocaleString("en-IN")}</strong>
                <button
                  className="more-button"
                  type="button"
                  aria-label={`Delete ${expense.description}`}
                  onClick={() => onDeleteExpense(expense.id)}
                  title="Delete expense"
                >
                  <Icon name="more" size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
