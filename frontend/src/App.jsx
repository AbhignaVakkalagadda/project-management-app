import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [page, setPage] = useState("dashboard");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member"
  });

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none"
  };

  const button = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  };

  const navBtn = (active) => ({
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    border: "none",
    borderRadius: "12px",
    background: active
      ? "linear-gradient(135deg,#2563eb,#3b82f6)"
      : "rgba(255,255,255,0.06)",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600"
  });

  const card = {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "18px",
    padding: "22px",
    color: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  };

  // SIGNUP
  const signup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup Successful");
    setIsSignup(false);
  };

  // LOGIN
  const login = () => {
    const saved = JSON.parse(localStorage.getItem("user"));

    if (
      saved &&
      saved.email === form.email &&
      saved.password === form.password
    ) {
      setUser(saved);
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  // LOGIN PAGE
  if (!user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#020617,#0f172a,#111827,#1e293b)",
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            width: "380px",
            background: "rgba(255,255,255,0.08)",
            padding: "32px",
            borderRadius: "20px",
            color: "white"
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "8px" }}>
            🚀 ProManage
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              marginBottom: "22px"
            }}
          >
            {isSignup
              ? "Create your account"
              : "Login to continue"}
          </p>

          {isSignup && (
            <input
              style={input}
              placeholder="Full Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          )}

          <input
            style={input}
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            style={input}
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {isSignup && (
            <select
              style={input}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <option>Member</option>
              <option>Admin</option>
            </select>
          )}

          <button
            style={button}
            onClick={isSignup ? signup : login}
          >
            {isSignup ? "Signup" : "Login"}
          </button>

          <p
            style={{
              marginTop: "16px",
              textAlign: "center",
              cursor: "pointer",
              color: "#cbd5e1"
            }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup
              ? "Already have account? Login"
              : "New user? Signup"}
          </p>
        </div>
      </div>
    );
  }

  // MAIN APP
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827,#1e293b)",
        fontFamily: "Arial"
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          padding: "28px",
          borderRight: "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <h2 style={{ color: "white", marginBottom: "10px" }}>
          🚀 ProManage
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "28px",
            lineHeight: "1.5"
          }}
        >
          {user.name}
          <br />
          ({user.role})
        </p>

        <button
          style={navBtn(page === "dashboard")}
          onClick={() => setPage("dashboard")}
        >
          📊 Dashboard
        </button>

        <button
          style={navBtn(page === "projects")}
          onClick={() => setPage("projects")}
        >
          📁 Projects
        </button>

        <button
          style={navBtn(page === "tasks")}
          onClick={() => setPage("tasks")}
        >
          ✅ Tasks
        </button>

        <button
          style={{
            ...navBtn(false),
            background: "#dc2626",
            marginTop: "18px"
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "38px",
          overflowY: "auto"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            margin: 0,
            marginBottom: "8px",
            lineHeight: "1.2"
          }}
        >
          Welcome, {user.name.split(" ")[0]} 👋
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "28px"
          }}
        >
          Manage your projects and team tasks efficiently.
        </p>

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "18px"
              }}
            >
              <div style={card}>
                📁
                <h3>Total Projects</h3>
                <h1>12</h1>
              </div>

              <div style={card}>
                ✅
                <h3>Completed Tasks</h3>
                <h1>28</h1>
              </div>

              <div style={card}>
                ⏳
                <h3>Pending Tasks</h3>
                <h1>9</h1>
              </div>

              <div style={card}>
                ⚠️
                <h3>Overdue Tasks</h3>
                <h1>2</h1>
              </div>
            </div>

            <div style={{ ...card, marginTop: "24px" }}>
              <h2>📈 Productivity Overview</h2>
              <p>Current completion rate: 76%</p>
              <p>3 important tasks due today</p>
              <p>Team performance improved this week</p>
            </div>
          </>
        )}

        {/* PROJECTS */}
        {page === "projects" && (
          <div style={{ display: "grid", gap: "18px" }}>
            <div style={card}>🌐 E-Commerce Website</div>
            <div style={card}>📊 CRM Dashboard</div>
            <div style={card}>📱 Mobile App UI</div>
            <div style={card}>🎨 Portfolio Redesign</div>
          </div>
        )}

        {/* TASKS */}
        {page === "tasks" && (
          <div style={{ display: "grid", gap: "18px" }}>
            <div style={card}>✔ Design Login Page</div>
            <div style={card}>⚙ Create APIs</div>
            <div style={card}>🚀 Deploy on Railway</div>
            <div style={card}>👥 Assign Members</div>
          </div>
        )}
      </div>
    </div>
  );
}