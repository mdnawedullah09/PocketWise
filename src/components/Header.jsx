import { useState } from "react";
import Icon from "./Icon";

function Header({ user, onMonthChange }) {
  // Start with the real current date
  const [selectedDate, setSelectedDate] = useState(new Date());

  const month = selectedDate.toLocaleString("en-IN", {
    month: "long",
  });

  const year = selectedDate.getFullYear();

  // Go to previous month
  function handlePreviousMonth() {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );

    setSelectedDate(newDate);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }

  // Go to next month
  function handleNextMonth() {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );

    setSelectedDate(newDate);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="greeting-row">
          <span className="sun-icon">
            <Icon
              name="sun"
              size={34}
              strokeWidth={1.6}
            />
          </span>

          <div>
            <h1>
              Good afternoon, {user?.name || "Student"}!
            </h1>

            <p>
              Here&apos;s your spending overview.
            </p>
          </div>
        </div>
      </div>

      <div className="topbar-actions">

        {/* Notification */}
        <div className="quick-actions">
          <button
            className="icon-button notification-button"
            aria-label="Notifications"
            type="button"
          >
            <Icon name="bell" size={21} />
            <span className="notification-dot" />
          </button>
        </div>

        {/* Dynamic Month Selector */}
        <div className="month-selector">

          <button
            type="button"
            className="month-arrow"
            onClick={handlePreviousMonth}
            aria-label="Previous month"
          >
            ‹
          </button>

          <Icon name="calendar" size={18} />

          <span>
            {month} {year}
          </span>

          <button
            type="button"
            className="month-arrow"
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            ›
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;