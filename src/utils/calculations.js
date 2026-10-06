export const CATEGORIES = [
  "Food",
  "Travel",
  "Shopping",
  "Entertainment",
  "Education",
  "Bills",
  "Other",
];

export const CATEGORY_META = {
  Food: { color: "#15936b", icon: "food" },
  Travel: { color: "#2f8fe6", icon: "travel" },
  Shopping: { color: "#f0b43c", icon: "shopping" },
  Entertainment: { color: "#ef7c3b", icon: "entertainment" },
  Education: { color: "#7b50cf", icon: "education" },
  Bills: { color: "#2eaaa5", icon: "bills" },
  Other: { color: "#58a9c1", icon: "other" },
};

export function calculateTotalSpent(expenses) {
  return expenses.reduce((total, expense) => total + Number(expense.amount || 0), 0);
}

export function calculateRemainingBudget(budget, totalSpent) {
  return Number(budget) - Number(totalSpent);
}

export function calculateBudgetUsed(budget, totalSpent) {
  if (!budget) return 0;
  return (Number(totalSpent) / Number(budget)) * 100;
}

export function getCategoryTotals(expenses) {
  return CATEGORIES.map((category) => ({
    category,
    total: expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + Number(expense.amount || 0), 0),
    ...CATEGORY_META[category],
  }));
}

export function getNeedWantTotals(expenses) {
  const needs = expenses
    .filter((expense) => expense.type === "need")
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  const wants = expenses
    .filter((expense) => expense.type !== "need")
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  return { needs, wants };
}

export function getHealthScore(budgetUsed, remaining) {
  const base = 100 - budgetUsed * 0.38;
  const bonus = remaining > 0 ? 5 : -12;
  return Math.max(0, Math.min(100, Math.round(base + bonus)));
}

export function getDailySafeSpend(remaining) {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const daysLeft = Math.max(1, daysInMonth - today.getDate() + 1);
  return Math.max(0, remaining) / daysLeft;
}

export function formatDate(value) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const key = date.toISOString().slice(0, 10);
  const todayKey = today.toISOString().slice(0, 10);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  if (key === todayKey) return `Today, ${date.getDate()} ${date.toLocaleString("en-IN", { month: "short" })}`;
  if (key === yesterdayKey) return `Yesterday, ${date.getDate()} ${date.toLocaleString("en-IN", { month: "short" })}`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
