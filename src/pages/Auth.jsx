import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { loginUser, signupUser } from "../utils/auth";

function Auth({ mode = "login", onAuthenticated }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setBusy(true);

    const result = isSignup
      ? signupUser(name, email, password)
      : loginUser(email, password);

    setBusy(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    onAuthenticated(result.user);
    const destination = location.state?.from || "/";
    navigate(destination, { replace: true });
  }

  return (
    <main className="auth-page">
      <section className="auth-brand-panel">
        <div className="auth-brand">
          <div className="auth-brand-mark"><Icon name="wallet" size={32} strokeWidth={1.9} /></div>
          <div>
            <div className="auth-brand-name">PocketWise</div>
            <div className="auth-brand-tagline">Know where your money goes.</div>
          </div>
        </div>
        <div className="auth-promo">
          <span className="auth-promo-icon"><Icon name="chart" size={24} /></span>
          <h1>Spend smarter.<br />Save better.</h1>
          <p>Track your student expenses, understand your habits, and stay in control of your monthly budget.</p>
        </div>
      </section>

      <section className="auth-form-panel">
        <div className="auth-card">
          <div className="auth-card-heading">
            <p className="eyebrow">POCKETWISE</p>
            <h2>{isSignup ? "Create your account" : "Welcome back"}</h2>
            <p>{isSignup ? "Start tracking your money in a few seconds." : "Sign in to continue to your dashboard."}</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignup && (
              <label>
                Full name
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Samar Khan" autoComplete="name" required />
              </label>
            )}

            <label>
              Email address
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required />
            </label>

            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters" autoComplete={isSignup ? "new-password" : "current-password"} minLength={6} required />
            </label>

            {error && <p className="auth-error" role="alert">{error}</p>}

            <button className="auth-submit" type="submit" disabled={busy}>
              {busy ? "Please wait..." : isSignup ? "Create account" : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link to={isSignup ? "/login" : "/signup"}>{isSignup ? "Login" : "Sign up"}</Link>
          </p>
          <p className="auth-note">Hackathon MVP: authentication is stored locally in your browser.</p>
        </div>
      </section>
    </main>
  );
}

export default Auth;
