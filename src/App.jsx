import { useEffect, useMemo, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";

import { getCurrentUser, logoutUser } from "./utils/auth";

import {
  getExpenses,
  saveExpenses,
  getBudget,
  saveBudget,
  seedDemoData,
} from "./utils/storage";

import {
  calculateTotalSpent,
  calculateRemainingBudget,
  calculateBudgetUsed,
} from "./utils/calculations";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // -----------------------------
  // Authentication
  // -----------------------------
  const [currentUser, setCurrentUser] = useState(getCurrentUser);

  // -----------------------------
  // Expense & Budget State
  // -----------------------------
  const [expenses, setExpenses] = useState(() => getExpenses());
  const [budget, setBudget] = useState(() => getBudget());

  // -----------------------------
  // Calculations
  // -----------------------------
  const totalSpent = useMemo(
    () => calculateTotalSpent(expenses),
    [expenses]
  );

  const remaining = useMemo(
    () => calculateRemainingBudget(budget, totalSpent),
    [budget, totalSpent]
  );

  const budgetUsed = useMemo(
    () => calculateBudgetUsed(budget, totalSpent),
    [budget, totalSpent]
  );

  // -----------------------------
  // LocalStorage
  // -----------------------------
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  useEffect(() => {
    saveBudget(budget);
  }, [budget]);

  // -----------------------------
  // Expense Functions
  // -----------------------------
  function handleAddExpense(expense) {
    setExpenses((current) => [...current, expense]);
  }

  function handleDeleteExpense(id) {
    setExpenses((current) =>
      current.filter((expense) => expense.id !== id)
    );
  }

  // -----------------------------
  // Budget Function
  // -----------------------------
  function handleUpdateBudget(value) {
    const amount = Number(value);

    if (!Number.isFinite(amount) || amount <= 0) {
      return false;
    }

    setBudget(amount);
    return true;
  }

  // -----------------------------
  // Reset Data
  // -----------------------------
  function handleResetData() {
    const confirmed = window.confirm(
      "Reset PocketWise? This will restore the sample budget and expenses."
    );

    if (!confirmed) return;

    const sample = seedDemoData();

    setExpenses(sample.expenses);
    setBudget(sample.budget);
  }

  // -----------------------------
  // Authentication
  // -----------------------------
  function handleAuthenticated(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    logoutUser();
    setCurrentUser(null);

    navigate("/login", {
      replace: true,
    });
  }

  // -----------------------------
  // Login / Signup Routes
  // -----------------------------
  if (!currentUser) {
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <Auth
              mode="login"
              onAuthenticated={handleAuthenticated}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <Auth
              mode="signup"
              onAuthenticated={handleAuthenticated}
            />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
              state={{ from: location.pathname }}
            />
          }
        />
      </Routes>
    );
  }

  // -----------------------------
  // Main Application
  // -----------------------------
  return (
    <div className="app-shell">

      {/* Sidebar */}
      <Sidebar
        user={currentUser}
        onLogout={handleLogout}
      />

      <div className="main-shell">

        {/* Header */}
        <Header user={currentUser} />

        {/* Application Routes */}
        <Routes>

          {/* Dashboard */}
          <Route
            path="/"
            element={
              <Dashboard
                budget={budget}
                expenses={expenses}
                totalSpent={totalSpent}
                remaining={remaining}
                budgetUsed={budgetUsed}
                onAddExpense={handleAddExpense}
                onDeleteExpense={handleDeleteExpense}
                onBudgetChange={handleUpdateBudget}
              />
            }
          />

          {/* Expenses */}
          <Route
            path="/expenses"
            element={
              <Expenses
                expenses={expenses}
                onAddExpense={handleAddExpense}
                onDeleteExpense={handleDeleteExpense}
              />
            }
          />

          {/* Budget */}
          <Route
            path="/budget"
            element={
              <Budget
                budget={budget}
                totalSpent={totalSpent}
                remaining={remaining}
                budgetUsed={budgetUsed}
                onBudgetChange={handleUpdateBudget}
              />
            }
          />

          {/* Insights */}
          <Route
            path="/insights"
            element={
              <Insights
                expenses={expenses}
                budget={budget}
                totalSpent={totalSpent}
                remaining={remaining}
                budgetUsed={budgetUsed}
              />
            }
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <Settings
                onResetData={handleResetData}
              />
            }
          />

          {/* Prevent logged-in users from seeing Auth pages */}
          <Route
            path="/login"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="/signup"
            element={<Navigate to="/" replace />}
          />

          {/* Unknown route */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </div>
    </div>
  );
}

export default App;