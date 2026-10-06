const USERS_KEY = "pocketwise_users";
const SESSION_KEY = "pocketwise_session";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
}

export function loginUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = readUsers().find(
    (item) => item.email === normalizedEmail && item.password === password
  );

  if (!user) {
    return { ok: false, message: "Invalid email or password." };
  }

  const sessionUser = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return { ok: true, user: sessionUser };
}

export function signupUser(name, email, password) {
  const cleanName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (!cleanName || !normalizedEmail || !password) {
    return { ok: false, message: "Please fill in all fields." };
  }

  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters." };
  }

  const users = readUsers();
  if (users.some((item) => item.email === normalizedEmail)) {
    return { ok: false, message: "An account with this email already exists." };
  }

  const user = {
    id: crypto.randomUUID(),
    name: cleanName,
    email: normalizedEmail,
    password,
  };

  users.push(user);
  writeUsers(users);

  const sessionUser = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return { ok: true, user: sessionUser };
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}
