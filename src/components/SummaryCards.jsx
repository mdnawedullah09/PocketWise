import Icon from "./Icon";
import { getDailySafeSpend } from "../utils/calculations";

function SummaryCards({ budget, totalSpent, remaining, budgetUsed }) {
  const safeSpend = getDailySafeSpend(remaining);
  const date = new Date();
  const month = date.toLocaleString("en-IN", { month: "long" });
  const year = date.getFullYear();

  const cards = [
    {
      label: "Monthly Budget",
      value: budget,
      note: `Set for ${month} ${year}`,
      icon: "wallet",
      tone: "green",
      prefix: "₹",
    },
    {
      label: "Spent",
      value: totalSpent,
      note: `${budgetUsed.toFixed(1)}% of budget`,
      icon: "percent",
      tone: "red",
      prefix: "₹",
    },
    {
      label: "Remaining",
      value: remaining,
      note: `${Math.max(0, 100 - budgetUsed).toFixed(1)}% left`,
      icon: "wallet",
      tone: "green",
      prefix: "₹",
    },
    {
      label: "Daily Safe Spend",
      value: safeSpend,
      note: "Based on remaining days",
      icon: "calendar",
      tone: "blue",
      prefix: "₹",
    },
  ];

  return (
    <section className="summary-grid">
      {cards.map((card) => (
        <article className="summary-card" key={card.label}>
          <div className={`summary-icon ${card.tone}`}>
            <Icon name={card.icon} size={24} />
          </div>
          <div className="summary-copy">
            <span>{card.label}</span>
            <strong>{card.prefix}{Math.max(0, card.value).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
            <small className={card.label === "Remaining" ? "positive" : ""}>{card.note}</small>
          </div>
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;
