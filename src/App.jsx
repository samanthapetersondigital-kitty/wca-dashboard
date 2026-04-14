import { useState } from "react";

const PASSWORD = "vot2026";

function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("wca_auth") === "1");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  if (authed) return children;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("wca_auth", "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#060f1a" }}>
      <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "40px 48px", minWidth: 320, textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Washington Conservation Action Votes Dashboard</div>
        <div style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Enter password to continue</div>
        <form onSubmit={handleSubmit}>
          <input type="password" value={input} onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password" autoFocus
            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: error ? "1px solid #ef4444" : "1px solid #1e3a5f", background: "#060f1a", color: "#fff", fontSize: 15, marginBottom: 8, boxSizing: "border-box", outline: "none" }} />
          {error && <div style={{ color: "#ef4444", fontSize: 13, marginBottom: 8 }}>Incorrect password</div>}
          <button type="submit" style={{ width: "100%", padding: "10px 0", borderRadius: 8, background: "#1d4ed8", color: "#fff", border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Enter</button>
        </form>
      </div>
    </div>
  );
}

// ─── CLIENT CONFIG ────────────────────────────────────────────────────────────
const CLIENT = {
  name: "Washington Conservation Action Votes",
  cycle: "2025–2026",
  lastUpdated: "April 14, 2026",
  reportWeek: "Current Week",
  reportMonth: "April 2026",
  reportQuarter: "Q2 2026",
};

// ─── EMAIL DATA ───────────────────────────────────────────────────────────────
const EMAIL_TOP_LINES = [
  {
    "subject": "WCAV_EM_FR_DO24_260227_1_1",
    "sendDate": "2/27/26",
    "period": "weekly",
    "recipients": 207,
    "opens": 64,
    "openRate": 31.0,
    "clicks": 289,
    "clickRate": 140.0,
    "unsubs": 99
  },
  {
    "subject": "WCAV_EM_FR_90DO_260317_1_1",
    "sendDate": "3/17/26",
    "period": "weekly",
    "recipients": 0,
    "opens": 0,
    "openRate": 55.0,
    "clicks": 0,
    "clickRate": 75.0,
    "unsubs": 0
  },
  {
    "subject": "WCAV_EM_SPLIT_90DO_260318_1_1",
    "sendDate": "3/18/26",
    "period": "weekly",
    "recipients": 0,
    "opens": 0,
    "openRate": 42.0,
    "clicks": 0,
    "clickRate": 89.0,
    "unsubs": 0
  },
  {
    "subject": "WCAV_EM_SPLIT_90DO_260320_1_2",
    "sendDate": "3/20/26",
    "period": "weekly",
    "recipients": 0,
    "opens": 0,
    "openRate": 42.0,
    "clicks": 0,
    "clickRate": 94.0,
    "unsubs": 0
  },
  {
    "subject": "WCAV_EM_Joyful_90DO_260320_1_1",
    "sendDate": "3/20/26",
    "period": "weekly",
    "recipients": 0,
    "opens": 0,
    "openRate": 59.0,
    "clicks": 0,
    "clickRate": 140.0,
    "unsubs": 0
  },
  {
    "subject": "WCAV_EM_FR_90DO_260322_1_1",
    "sendDate": "3/22/26",
    "period": "weekly",
    "recipients": 0,
    "opens": 0,
    "openRate": 26.0,
    "clicks": 0,
    "clickRate": 56.0,
    "unsubs": 0
  }
];

const EMAIL_MONTHLY_SUMMARY = {
  sends: 10,
  totalRecipients: 207,
  avgOpenRate: 48.5,
  avgClickRate: 62.4,
  totalUnsubs: 99,
};
const EMAIL_QUARTERLY_SUMMARY = EMAIL_MONTHLY_SUMMARY;

// ─── LIST SIZE ────────────────────────────────────────────────────────────────
const LIST_SIZE = [
  {
    "label": "Update segment sizes weekly. Yellow cells are manual inputs.",
    "key": "UPDATE",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  },
  {
    "label": "Segment Name",
    "key": "SEGMEN",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  },
  {
    "label": "Email \u2014 180DO",
    "key": "EMAIL\u2014",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  },
  {
    "label": "Email \u2014 90DO",
    "key": "EMAIL\u2014",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  },
  {
    "label": "Email \u2014 365 SF/Local",
    "key": "EMAIL\u2014",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  },
  {
    "label": "Texting \u2014 NTL",
    "key": "TEXTIN",
    "current": 0,
    "prev": 0,
    "change": 0,
    "goal": null
  }
];

// ─── FINANCES ─────────────────────────────────────────────────────────────────
const FINANCES = [
  {
    "period": "2025-11",
    "type": "month",
    "totalActBlue": 431.0,
    "digitalRaise": 47.0
  },
  {
    "period": "2025-12",
    "type": "month",
    "totalActBlue": 750.0,
    "digitalRaise": 47.0
  },
  {
    "period": "2026-01",
    "type": "month",
    "totalActBlue": 781.0,
    "digitalRaise": 47.0
  },
  {
    "period": "2026-02",
    "type": "month",
    "totalActBlue": 869.15,
    "digitalRaise": 47.0
  },
  {
    "period": "2026-03",
    "type": "month",
    "totalActBlue": 1911.0,
    "digitalRaise": 47.0
  },
  {
    "period": "2026-04",
    "type": "month",
    "totalActBlue": 649.5,
    "digitalRaise": 0.0
  }
];
const DIGITAL_PCT_MIN = 10;
const DIGITAL_PCT_MAX = 15;

const FINANCE_MONTHLY = {
  period: "April 2026",
  totalActBlue: 649.5,
  digitalRaise: 0.0,
  projection: 899,
};
const FINANCE_QUARTERLY = {
  period: "Q2 2026",
  totalActBlue: 5391.65,
  digitalRaise: 235.0,
  projection: 6200,
};

// ─── ACQUISITION ROI ──────────────────────────────────────────────────────────
const ACQUISITION_ROI = [];

// ─── TEXTING ROI ──────────────────────────────────────────────────────────────
const TEXTING_ROI = [];

// ─── ADS ──────────────────────────────────────────────────────────────────────
const META_ADS = [];
const GOOGLE_ADS = [];

// ─── GROWTH CALC ──────────────────────────────────────────────────────────────
const GROWTH_CALC = [
  { metric: "Avg Open Rate", value: "48.5%", benchmark: ">14% = Strong", status: "above" },
  { metric: "Avg Click Rate", value: "62.4%", benchmark: ">3.0%", status: "above" },
  { metric: "Digital % of ActBlue", value: "4.4%", benchmark: "10–15%", status: "below" },
];

const DEFAULT_HIGHLIGHTS = [
  "Dashboard initialized with data through April 14, 2026",
  "Digital raise: $235 (4.4% of total ActBlue)",
  "Average email open rate: 48.5%",
  "Total ActBlue raised: $5,392",
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = (n) => n?.toLocaleString() ?? "—";
const fmtD = (n) => n != null ? `$${n.toLocaleString()}` : "—";
const fmtP = (n) => n != null ? `${n}%` : "—";

function openRateColor(r) {
  if (r >= 14) return "#4ade80";
  if (r >= 10) return "#fbbf24";
  return "#f87171";
}
function openRateBadge(r) {
  if (r >= 14) return { label: "Strong", color: "#4ade80", bg: "#052e16", border: "#166534" };
  if (r >= 10) return { label: "Average", color: "#fbbf24", bg: "#2d1f00", border: "#92400e" };
  return { label: "Low", color: "#f87171", bg: "#3f0f0f", border: "#7f1d1d" };
}
function digitalPctStatus(p) {
  if (p >= DIGITAL_PCT_MIN && p <= DIGITAL_PCT_MAX) return { color: "#4ade80", label: "On Target", bg: "#052e16", border: "#166534" };
  if (p > DIGITAL_PCT_MAX) return { color: "#60a5fa", label: "Above Target", bg: "#0c1f3f", border: "#1d4ed8" };
  return { color: "#f87171", label: "Below Target", bg: "#3f0f0f", border: "#7f1d1d" };
}

function Delta({ val }) {
  if (val == null) return null;
  const up = val >= 0;
  return <span style={{ color: up ? "#22c55e" : "#ef4444", fontWeight: 600, fontSize: 13 }}>{up ? "▲" : "▼"} {Math.abs(val).toFixed(2)}%</span>;
}

function GoalBar({ current, goal }) {
  if (!goal) return null;
  const pct = Math.min((current / goal) * 100, 100);
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 3 }}>{fmt(current)} / {fmt(goal)} goal ({pct.toFixed(1)}%)</div>
      <div style={{ background: "#1e3a5f", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#1d4ed8,#60a5fa)", borderRadius: 99 }} />
      </div>
    </div>
  );
}

function DigitalPctBar({ pct }) {
  const status = digitalPctStatus(pct);
  const barWidth = Math.min(pct / 50 * 100, 100);
  const minMark = DIGITAL_PCT_MIN / 50 * 100;
  const maxMark = DIGITAL_PCT_MAX / 50 * 100;
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12 }}>
        <span style={{ color: "#94a3b8" }}>Digital % of Total Raise</span>
        <span style={{ color: status.color, fontWeight: 700 }}>{pct.toFixed(1)}% — {status.label}</span>
      </div>
      <div style={{ position: "relative", background: "#1e3a5f", borderRadius: 99, height: 10 }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${minMark}%`, width: `${maxMark - minMark}%`, background: "rgba(74,222,128,0.12)", borderLeft: "1px dashed #166534", borderRight: "1px dashed #166534" }} />
        <div style={{ width: `${barWidth}%`, height: "100%", background: `linear-gradient(90deg,#1d4ed8,${status.color})`, borderRadius: 99 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3, fontSize: 10, color: "#475569" }}>
        <span>0%</span>
        <span style={{ color: "#4ade80" }}>Target zone: {DIGITAL_PCT_MIN}–{DIGITAL_PCT_MAX}%</span>
        <span>50%</span>
      </div>
    </div>
  );
}

function PeriodToggle({ active, onChange }) {
  const options = [
    { id: "weekly", label: "Weekly", sub: CLIENT.reportWeek },
    { id: "monthly", label: "Monthly", sub: CLIENT.reportMonth },
    { id: "quarterly", label: "Quarterly", sub: CLIENT.reportQuarter },
  ];
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
      {options.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} style={{
          background: active === o.id ? "#1d4ed8" : "#091929",
          border: `1px solid ${active === o.id ? "#3b82f6" : "#1e3a5f"}`,
          borderRadius: 8, padding: "8px 18px", cursor: "pointer", textAlign: "left",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: active === o.id ? "#fff" : "#94a3b8", fontFamily: "'Sora', sans-serif" }}>{o.label}</div>
          <div style={{ fontSize: 11, color: active === o.id ? "#93c5fd" : "#475569" }}>{o.sub}</div>
        </button>
      ))}
    </div>
  );
}

function SummaryCallout({ label, children }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "16px 22px", marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>{children}</div>
    </div>
  );
}

function SummaryItem({ label, value, color }) {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: color || "#60a5fa", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 3 }}>{label}</div>
    </div>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, color: "#e2e8f0", margin: 0 }}>{title}</h2>
        {subtitle && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function Table({ headers, rows, alignRight = [] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1e3a5f" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#0c2340" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 16px", textAlign: alignRight.includes(i) ? "right" : "left", color: "#94a3b8", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: "1px solid #1e3a5f", background: ri % 2 === 0 ? "#091929" : "#0b1f33" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "10px 16px", textAlign: alignRight.includes(ci) ? "right" : "left", color: "#cbd5e1", whiteSpace: "nowrap" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px", flex: "1 1 180px", minWidth: 160 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: accent || "#60a5fa", lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ marginTop: 6, fontSize: 12, color: "#64748b" }}>{sub}</div>}
    </div>
  );
}

function EditableHighlights({ highlights, onChange }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(highlights.join("\n"));
  const save = () => { onChange(draft.split("\n").map(s => s.trim()).filter(Boolean)); setEditing(false); };
  const cancel = () => { setDraft(highlights.join("\n")); setEditing(false); };
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Highlights</div>
        {editing ? (
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save} style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>Save</button>
            <button onClick={cancel} style={{ background: "#1e3a5f", color: "#94a3b8", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer" }}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => { setDraft(highlights.join("\n")); setEditing(true); }} style={{ background: "transparent", color: "#60a5fa", border: "1px solid #1e4976", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer" }}>&#9998; Edit</button>
        )}
      </div>
      {editing ? (
        <textarea value={draft} onChange={e => setDraft(e.target.value)}
          style={{ width: "100%", background: "#060f1a", border: "1px solid #1e4976", borderRadius: 8, color: "#e2e8f0", padding: "12px", fontSize: 13, lineHeight: 1.9, resize: "vertical", minHeight: 140, outline: "none", boxSizing: "border-box" }}
          placeholder="One highlight per line..." />
      ) : (
        <ul style={{ margin: 0, paddingLeft: 20, color: "#94a3b8", fontSize: 13, lineHeight: 2.1 }}>
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
    </div>
  );
}

const NAV_ITEMS = [
  { id: "overview", label: "Digital Overview" },
  { id: "email", label: "Email" },
  { id: "listsize", label: "List Size" },
  { id: "finances", label: "Finances" },
  { id: "texting", label: "Texting ROI" },
  { id: "ads", label: "Ad Reporting" },
  { id: "growth", label: "Growth" },
];

export default function Dashboard() {
  const [active, setActive] = useState("overview");
  const [period, setPeriod] = useState("weekly");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const emailRows = EMAIL_TOP_LINES.slice(0, period === "weekly" ? 5 : 10);
  const textingRows = TEXTING_ROI;
  const metaRows = META_ADS;
  const googleRows = GOOGLE_ADS;

  const financeRows = FINANCES;
  const totalActBlue = FINANCES.reduce((s, r) => s + r.totalActBlue, 0);
  const totalDigital = FINANCES.reduce((s, r) => s + r.digitalRaise, 0);
  const overallPct = totalActBlue > 0 ? (totalDigital / totalActBlue) * 100 : 0;
  const overallStatus = digitalPctStatus(overallPct);

  const periodLabel = period === "weekly" ? CLIENT.reportWeek : period === "monthly" ? CLIENT.reportMonth : CLIENT.reportQuarter;

  return (
    <PasswordGate>
      <div style={{ minHeight: "100vh", background: "#060f1a", color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');
          * { box-sizing: border-box; }
          ::-webkit-scrollbar { width: 6px; height: 6px; }
          ::-webkit-scrollbar-track { background: #060f1a; }
          ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
          .nav-item { cursor: pointer; transition: color 0.15s; }
          .nav-item:hover { color: #60a5fa !important; }
          .badge-above { background: #052e16; color: #4ade80; border: 1px solid #166534; }
          .badge-below { background: #3f0f0f; color: #f87171; border: 1px solid #7f1d1d; }
        `}</style>

        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,15,26,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e3a5f", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Sora', sans-serif", color: "#fff" }}>{"WC"}</div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#e2e8f0", lineHeight: 1.1 }}>{CLIENT.name}</div>
              <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.06em" }}>{CLIENT.cycle} CAMPAIGN REPORT</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", background: "#091929", border: "1px solid #1e3a5f", borderRadius: 8, overflow: "hidden" }}>
              {["weekly","monthly","quarterly"].map(p => (
                <button key={p} onClick={() => setPeriod(p)} style={{ background: period === p ? "#1d4ed8" : "transparent", border: "none", color: period === p ? "#fff" : "#64748b", padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{p}</button>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "#475569" }}>Updated <span style={{ color: "#60a5fa" }}>{CLIENT.lastUpdated}</span></div>
          </div>
        </header>

        <div style={{ display: "flex" }}>
          <nav style={{ width: 200, flexShrink: 0, position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid #1e3a5f", padding: "24px 0", background: "#07121e" }}>
            {NAV_ITEMS.map(item => (
              <div key={item.id} className="nav-item" onClick={() => scrollTo(item.id)} style={{ padding: "9px 24px", fontSize: 13, fontWeight: active === item.id ? 600 : 400, color: active === item.id ? "#60a5fa" : "#64748b", borderLeft: active === item.id ? "2px solid #3b82f6" : "2px solid transparent" }}>
                {item.label}
              </div>
            ))}
          </nav>

          <main style={{ flex: 1, padding: "40px 48px", maxWidth: "calc(100% - 200px)" }}>

            <div id="overview">
              <Section title="Digital Overview" subtitle={`${periodLabel} · ${CLIENT.lastUpdated}`}>
                <PeriodToggle active={period} onChange={setPeriod} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                  <StatCard label="Total ActBlue" value={fmtD(totalActBlue)} sub="All time" />
                  <StatCard label="Digital Raised" value={fmtD(totalDigital)} sub={`${overallPct.toFixed(1)}% of ActBlue`} accent="#34d399" />
                  <StatCard label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} sub="14%+ = Strong" accent="#fbbf24" />
                  <StatCard label="Email Sends" value={EMAIL_MONTHLY_SUMMARY.sends} sub="Total tracked" accent="#a78bfa" />
                </div>
                <EditableHighlights highlights={highlights} onChange={setHighlights} />
              </Section>
            </div>

            <div id="email">
              <Section title="Email" subtitle="Broadcast performance">
                <PeriodToggle active={period} onChange={setPeriod} />
                {emailRows.length > 0 ? (
                  <Table
                    headers={["Subject / Email Name", "Date", "Recipients", "Opens", "Open Rate", "Rating", "Clicks", "Click Rate", "Unsubs"]}
                    alignRight={[2,3,4,6,7,8]}
                    rows={emailRows.map(r => {
                      const badge = openRateBadge(r.openRate);
                      return [
                        <span style={{ color: "#e2e8f0", maxWidth: 280, display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>{r.subject}</span>,
                        r.sendDate, fmt(r.recipients), fmt(r.opens),
                        <span style={{ color: openRateColor(r.openRate), fontWeight: 600 }}>{fmtP(r.openRate)}</span>,
                        <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>{badge.label}</span>,
                        fmt(r.clicks), fmtP(r.clickRate), fmt(r.unsubs),
                      ];
                    })}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No email data available yet.</div>}
              </Section>
            </div>

            <div id="listsize">
              <Section title="List Size" subtitle="Subscriber segment counts">
                {LIST_SIZE.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {LIST_SIZE.map(row => (
                      <div key={row.key} style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "18px 24px", display: "flex", alignItems: "center", gap: 24 }}>
                        <div style={{ minWidth: 160 }}>
                          <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>{row.key}</div>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, color: "#e2e8f0", marginTop: 2 }}>{row.label}</div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#60a5fa", lineHeight: 1 }}>{fmt(row.current)}</div>
                          <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>prev: {fmt(row.prev)} &nbsp; <Delta val={row.change} /></div>
                          <GoalBar current={row.current} goal={row.goal} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No list size data available yet.</div>}
              </Section>
            </div>

            <div id="finances">
              <Section title="Finances" subtitle={`ActBlue fundraising — digital target: ${DIGITAL_PCT_MIN}–${DIGITAL_PCT_MAX}%`}>
                <PeriodToggle active={period} onChange={setPeriod} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
                  <StatCard label="Total ActBlue" value={fmtD(totalActBlue)} accent="#60a5fa" />
                  <StatCard label="Digital Raise" value={fmtD(totalDigital)} sub="Email + SMS" accent="#4ade80" />
                  <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px", flex: "2 1 260px" }}>
                    <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Digital % of ActBlue</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: overallStatus.color }}>{overallPct.toFixed(1)}%</div>
                      <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: overallStatus.bg, color: overallStatus.color, border: `1px solid ${overallStatus.border}` }}>{overallStatus.label}</span>
                    </div>
                    <DigitalPctBar pct={overallPct} />
                  </div>
                </div>
                <Table
                  headers={["Period", "Total ActBlue", "Digital Raise", "Digital %", "vs Target"]}
                  alignRight={[1,2,3]}
                  rows={financeRows.map(r => {
                    const pct = r.totalActBlue > 0 ? (r.digitalRaise / r.totalActBlue) * 100 : 0;
                    const s = digitalPctStatus(pct);
                    return [
                      r.period,
                      <span style={{ color: "#60a5fa" }}>{fmtD(r.totalActBlue)}</span>,
                      <span style={{ color: "#4ade80" }}>{fmtD(r.digitalRaise)}</span>,
                      <span style={{ color: s.color, fontWeight: 600 }}>{pct.toFixed(1)}%</span>,
                      <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>{s.label}</span>,
                    ];
                  })}
                />
              </Section>
            </div>

            <div id="texting">
              <Section title="Texting ROI" subtitle="SMS campaign performance">
                {textingRows.length > 0 ? (
                  <Table
                    headers={["Campaign", "Date", "Delivered", "Link Clicks", "Revenue"]}
                    alignRight={[2,3,4]}
                    rows={textingRows.map(r => [
                      r.campaign, r.sendDate, fmt(r.delivered), fmt(r.responses),
                      <span style={{ color: "#4ade80" }}>{fmtD(r.raised)}</span>,
                    ])}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No texting data available yet.</div>}
              </Section>
            </div>

            <div id="ads">
              <Section title="Ad Reporting" subtitle="Meta Ads + Google Ads">
                {googleRows.length > 0 ? (
                  <>
                    <div style={{ marginBottom: 8, fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Google Ads</div>
                    <Table
                      headers={["Campaign", "Spend", "Impressions", "Clicks", "CTR", "CPC", "Conversions", "Cost/Conv."]}
                      alignRight={[1,2,3,4,5,6,7]}
                      rows={googleRows.map(r => [
                        r.campaign, fmtD(r.spend), fmt(r.impressions), fmt(r.clicks),
                        fmtP(r.ctr), fmtD(r.cpc), fmt(r.conversions), fmtD(r.costPerConv),
                      ])}
                    />
                  </>
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No ad data available yet.</div>}
              </Section>
            </div>

            <div id="growth">
              <Section title="Growth" subtitle="Key metrics vs benchmarks">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {GROWTH_CALC.map((row, i) => (
                    <div key={i} style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 10, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ fontSize: 14, color: "#cbd5e1" }}>{row.metric}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#60a5fa" }}>{row.value}</div>
                          <div style={{ fontSize: 11, color: "#475569" }}>Benchmark: {row.benchmark}</div>
                        </div>
                        <span className={row.status === "above" ? "badge-above" : "badge-below"} style={{ padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>
                          {row.status === "above" ? "✓ On Track" : "↓ Needs Attention"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: 24, marginTop: 24, fontSize: 12, color: "#334155", textAlign: "center" }}>
              Report generated for {CLIENT.name} · {CLIENT.cycle} · {CLIENT.lastUpdated} · Confidential
            </div>

          </main>
        </div>
      </div>
    </PasswordGate>
  );
}
