const EXPENSES_KEY = "pocketwise_expenses";
const BUDGET_KEY = "pocketwise_budget";
const DEMO_KEY = "pocketwise_demo_mode";
const VERSION_KEY = "pocketwise_ui_version";
const CURRENT_VERSION = "3";

const DEMO_EXPENSES = [
  { id: "demo-1", amount: 120, description: "Momos", category: "Food", date: "2026-10-06", type: "need" },
  { id: "demo-2", amount: 80, description: "Auto Rickshaw", category: "Travel", date: "2026-10-06", type: "need" },
  { id: "demo-3", amount: 250, description: "Movie", category: "Entertainment", date: "2026-10-05", type: "want" },
  { id: "demo-4", amount: 500, description: "T-shirt", category: "Shopping", date: "2026-10-05", type: "want" },
  { id: "demo-5", amount: 580, description: "Groceries", category: "Food", date: "2026-10-04", type: "need" },
  { id: "demo-6", amount: 350, description: "Food & Snacks", category: "Food", date: "2026-10-03", type: "need" },
  { id: "demo-7", amount: 520, description: "Cab & Bus", category: "Travel", date: "2026-10-03", type: "need" },
  { id: "demo-8", amount: 400, description: "Course Material", category: "Education", date: "2026-10-02", type: "need" },
  { id: "demo-9", amount: 0, description: "Shopping", category: "Shopping", date: "2026-10-01", type: "want" },
  { id: "demo-10", amount: 200, description: "Cafe", category: "Entertainment", date: "2026-09-30", type: "want" },
  { id: "demo-11", amount: 300, description: "Bills", category: "Bills", date: "2026-09-29", type: "need" },
  { id: "demo-12", amount: 150, description: "Snacks", category: "Food", date: "2026-09-28", type: "need" },
];

export function seedDemoData() {
  return { budget: 6000, expenses: DEMO_EXPENSES };
}

export function getExpenses() {
  if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
    const sample = seedDemoData();
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(sample.expenses));
    localStorage.setItem(BUDGET_KEY, JSON.stringify(sample.budget));
    localStorage.setItem(DEMO_KEY, "true");
    return sample.expenses;
  }

  const saved = localStorage.getItem(EXPENSES_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }

  return [];
}

export function saveExpenses(expenses) {
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
}

export function getBudget() {
  if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
    const sample = seedDemoData();
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(sample.expenses));
    localStorage.setItem(BUDGET_KEY, JSON.stringify(sample.budget));
    localStorage.setItem(DEMO_KEY, "true");
    return sample.budget;
  }

  const saved = localStorage.getItem(BUDGET_KEY);
  if (saved) {
    const parsed = Number(JSON.parse(saved));
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }

  return 6000;
}

export function saveBudget(budget) {
  localStorage.setItem(BUDGET_KEY, JSON.stringify(budget));
}

export function getDemoMode() {
  return localStorage.getItem(DEMO_KEY) !== "false";
}

export function saveDemoMode(enabled) {
  localStorage.setItem(DEMO_KEY, String(enabled));
}
