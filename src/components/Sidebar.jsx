import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const items = [
  { to: "/", label: "Dashboard", icon: "home", end: true },
  { to: "/expenses", label: "Expenses", icon: "receipt" },
  { to: "/budget", label: "Budget", icon: "calendar" },
  { to: "/insights", label: "Insights", icon: "chart" },
  { to: "/settings", label: "Settings", icon: "settings" },
];

function Sidebar({ user, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Icon name="wallet" size={31} strokeWidth={1.9} />
        </div>

        <div>
          <div className="brand-name">PocketWise</div>
          <div className="brand-tagline">
            Know where your money goes.
          </div>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Primary navigation">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <Icon name={item.icon} size={21} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="account-row">
          <div className="avatar">
            {(user?.name || "S").charAt(0).toUpperCase()}
          </div>

          <div className="account-copy">
            <strong>{user?.name || "Student"}</strong>
            <small>Student Account</small>
          </div>

          <button
            className="logout-button"
            onClick={onLogout}
            type="button"
            title="Logout"
            aria-label="Logout"
          >
            ↪
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;