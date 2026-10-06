import { useState } from "react";
import { CATEGORIES } from "../utils/calculations";

function ExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("need");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || !description.trim() || !category) {
      setError("Enter a valid amount, description and category.");
      return;
    }

    onAddExpense({
      id: `expense-${Date.now()}`,
      amount: value,
      description: description.trim(),
      category,
      type,
      date: new Date().toISOString().slice(0, 10),
    });

    setAmount("");
    setDescription("");
    setCategory("Food");
    setType("need");
    setError("");
  }

  return (
    <div className="panel form-panel">
      <div className="panel-title-row">
        <div>
          <h2>Add Expense</h2>
          <p>Quickly record where your money went.</p>
        </div>
      </div>

      <form className="expense-form" onSubmit={handleSubmit}>
        <label>
          Amount
          <div className="input-with-prefix">
            <span>₹</span>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </label>

        <label>
          Description
          <input
            type="text"
            placeholder="e.g. Lunch, Bus, Books"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <div className="form-two-col">
          <label>
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {CATEGORIES.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            Type
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="need">Need</option>
              <option value="want">Want</option>
            </select>
          </label>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button className="primary-button" type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
