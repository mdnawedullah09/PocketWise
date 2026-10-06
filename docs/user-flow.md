# PocketWise — User Flow

## 1. Overview

PocketWise is a personal expense-tracking application designed to help users record, monitor, and understand their spending through a simple dashboard.

The primary user flow is centered around adding expenses, viewing recorded transactions, and understanding spending through summaries, charts, and insights.

## 2. Main User Flow

```text
Start
  ↓
Open PocketWise
  ↓
Dashboard
  ↓
View Spending Summary
  ├── Summary Cards
  ├── Spending Chart
  └── Insights
  ↓
Add Expense
  ↓
Enter Expense Details
  ↓
Save Expense
  ↓
Expense Added
  ↓
Expense List Updated
  ↓
Calculations Updated
  ↓
Dashboard Updated
```

## 3. Dashboard

The Dashboard is the main screen of PocketWise.

The user can view:

- Overall spending information
- Summary cards
- Spending trends through a chart
- Financial insights
- Recent expense records

The dashboard acts as the central point from which the user can monitor their financial activity.

## 4. Adding an Expense

The user can add a new expense through the Expense Form.

### Flow

```text
Dashboard
  ↓
Add Expense
  ↓
Enter Expense Information
  ↓
Submit Expense
  ↓
Store Expense
  ↓
Update Calculations
  ↓
Refresh Dashboard
```

The expense information is processed and stored so that it can be displayed in the expense list and included in spending calculations.

## 5. Expense List

After an expense is added, it appears in the Expense List.

The list allows the user to review their recorded transactions and understand where their money is being spent.

```text
Expense Added
     ↓
Expense List
     ↓
Review Transactions
```

## 6. Spending Analysis

PocketWise uses the recorded expenses to calculate spending information.

The calculated data is used by:

- Summary Cards
- Spending Chart
- Insight Cards

```text
Recorded Expenses
       ↓
Calculations
       ↓
 ┌─────┼──────────┐
 ↓     ↓          ↓
Summary Chart   Insights
Cards
```

This gives the user a clearer understanding of their spending patterns.

## 7. Data Storage

Expense data is intended to be stored locally so that the application can retrieve and use the user's recorded expenses.

The storage layer works with the application's calculation and dashboard components.

```text
User Input
    ↓
Expense Form
    ↓
Storage
    ↓
Calculations
    ↓
Dashboard Components
```

## 8. Complete User Journey

```text
┌───────────────┐
│     User      │
└───────┬───────┘
        ↓
┌───────────────┐
│   Dashboard   │
└───────┬───────┘
        ↓
┌─────────────────────┐
│ View Spending Data  │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│    Add Expense      │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Expense Form       │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Save Expense        │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│     Storage         │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│    Calculations     │
└─────────┬───────────┘
          ↓
     ┌────┴─────┐
     ↓          ↓
┌─────────┐ ┌──────────┐
│ Expense │ │Dashboard │
│  List   │ │ Updates  │
└─────────┘ └──────────┘
                ↓
        ┌───────────────┐
        │ Charts &      │
        │ Insights      │
        └───────────────┘
```

## 9. Key Components

The current project structure defines the following intended application components:

- `Dashboard.jsx` — Main dashboard page
- `ExpenseForm.jsx` — Expense input interface
- `ExpenseList.jsx` — Displays recorded expenses
- `SummaryCards.jsx` — Displays summarized financial information
- `SpendingChart.jsx` — Visualizes spending data
- `InsightCard.jsx` — Displays spending insights
- `Header.jsx` — Application header
- `Sidebar.jsx` — Application navigation
- `calculations.js` — Handles financial calculations
- `storage.js` — Handles expense data storage

## 10. End Goal

The goal of the user flow is to make expense tracking simple:

**Add an expense → Store it → Calculate spending → Visualize the data → Understand spending habits.**