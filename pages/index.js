export default function Home() { return <h1>Werk Namla Agency – Bonus System</h1>; }
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", color: "#fff", background: "#0f172a", minHeight: "100vh" }}>
      <h1>🐜 Werk Namla Agency</h1>
      <h3>Bonus & Profit System</h3>

      <hr style={{ margin: "20px 0", opacity: 0.3 }} />

      <p>Choose what you want to manage:</p>

      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/streamers">
          <button>👤 Streamers</button>
        </Link>

        <Link href="/periods">
          <button>📅 Bonus Periods</button>
        </Link>

        <Link href="/bonus">
          <button>💰 Bonus Results</button>
        </Link>
      </div>

      <style jsx>{`
        button {
          background: #facc15;
          border: none;
          padding: 12px 18px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;
        }
        button:hover {
          background: #eab308;
        }
      `}</style>
    </main>
  );
}
