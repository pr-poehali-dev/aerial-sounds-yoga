import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const API_URL = "https://functions.poehali.dev/460e133a-853d-4f85-aefa-16408cdddcab";

const S = { fontFamily: "'Cormorant', Georgia, serif" };

const STATUS_CONFIG: Record<string, { label: string; bg: string; color: string; dot: string }> = {
  new:       { label: "Новая",      bg: "#EFF6FF", color: "#2563EB", dot: "#3B82F6" },
  contacted: { label: "Связались",  bg: "#FFFBEB", color: "#D97706", dot: "#F59E0B" },
  scheduled: { label: "Записана",   bg: "#F0FDF4", color: "#16A34A", dot: "#22C55E" },
  done:      { label: "Завершена",  bg: "#F0FDF4", color: "#15803D", dot: "#16A34A" },
  cancelled: { label: "Отменена",   bg: "#FEF2F2", color: "#DC2626", dot: "#EF4444" },
};

const SERVICE_EMOJI: Record<string, string> = {
  "Аэройога": "🪢",
  "Гонг-медитация": "🔔",
  "Aerial Sounds": "✨",
  "Обучение": "🎓",
};

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  message: string | null;
  status: string;
  source: string | null;
  note: string | null;
  created_at: string | null;
}

function formatDate(iso: string | null) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "short", year: "numeric" })
    + " " + d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
}

export default function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState<Contact | null>(null);
  const [editNote, setEditNote] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setContacts(data.contacts || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch(API_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  const saveNote = async () => {
    if (!selected) return;
    setSaving(true);
    await fetch(API_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selected.id, note: editNote }),
    });
    setContacts(prev => prev.map(c => c.id === selected.id ? { ...c, note: editNote } : c));
    setSelected(prev => prev ? { ...prev, note: editNote } : null);
    setSaving(false);
  };

  const filtered = contacts.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.phone.includes(q) || (c.service || "").toLowerCase().includes(q);
    const matchStatus = filterStatus === "all" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const counts = Object.keys(STATUS_CONFIG).reduce((acc, s) => {
    acc[s] = contacts.filter(c => c.status === s).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ minHeight: "100vh", background: "var(--pp-cream)", color: "var(--pp-text)", fontFamily: "'Golos Text', sans-serif" }}>

      {/* Шапка */}
      <header style={{ background: "var(--pp-cream-2)", borderBottom: "1px solid var(--pp-border)", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--pp-muted)", fontSize: 13 }}>
            <Icon name="ArrowLeft" size={15} />
            На сайт
          </a>
          <div style={{ width: 1, height: 20, background: "var(--pp-border)" }} />
          <div style={{ ...S, fontSize: 20, fontWeight: 500, fontStyle: "italic" }}>Пространство Пара</div>
          <span style={{ fontSize: 11, background: "var(--pp-teal-light)", color: "var(--pp-teal)", borderRadius: 100, padding: "2px 10px", fontWeight: 600 }}>CRM</span>
        </div>
        <button onClick={load} style={{ display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "1px solid var(--pp-border)", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 13, color: "var(--pp-muted)" }}>
          <Icon name="RefreshCw" size={13} />
          Обновить
        </button>
      </header>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "28px 32px" }}>

        {/* Статистика */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Всего заявок", value: contacts.length, icon: "Users", color: "var(--pp-teal)" },
            { label: "Новых", value: counts.new || 0, icon: "Bell", color: "#3B82F6" },
            { label: "Связались", value: counts.contacted || 0, icon: "Phone", color: "#F59E0B" },
            { label: "Записаны", value: counts.scheduled || 0, icon: "CalendarCheck", color: "#22C55E" },
            { label: "Завершены", value: counts.done || 0, icon: "CheckCircle", color: "#16A34A" },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon name={s.icon as "Users"} size={14} style={{ color: s.color }} />
                <span style={{ fontSize: 11, color: "var(--pp-muted)", fontWeight: 500 }}>{s.label}</span>
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Фильтры */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20, alignItems: "center" }}>
          {/* Поиск */}
          <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
            <Icon name="Search" size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--pp-faint)" }} />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по имени, телефону, услуге..."
              style={{ width: "100%", paddingLeft: 36, paddingRight: 12, paddingTop: 10, paddingBottom: 10, background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 10, fontSize: 14, color: "var(--pp-text)", outline: "none", boxSizing: "border-box", fontFamily: "'Golos Text', sans-serif" }} />
          </div>

          {/* Фильтр по статусу */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[{ key: "all", label: `Все (${contacts.length})` }, ...Object.entries(STATUS_CONFIG).map(([k, v]) => ({ key: k, label: `${v.label} (${counts[k] || 0})` }))].map(f => (
              <button key={f.key} onClick={() => setFilterStatus(f.key)}
                style={{ padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", border: filterStatus === f.key ? "1.5px solid var(--pp-teal)" : "1.5px solid var(--pp-border)", background: filterStatus === f.key ? "var(--pp-teal-light)" : "var(--pp-cream-2)", color: filterStatus === f.key ? "var(--pp-teal)" : "var(--pp-muted)", transition: "all 0.15s" }}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Таблица + детали */}
        <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 360px" : "1fr", gap: 16 }}>

          {/* Таблица */}
          <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, overflow: "hidden" }}>
            {loading ? (
              <div style={{ padding: 60, textAlign: "center", color: "var(--pp-muted)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
                <div>Загружаем данные...</div>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ padding: 60, textAlign: "center", color: "var(--pp-muted)" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Ничего не найдено</div>
                <div style={{ fontSize: 13, marginTop: 6 }}>Попробуйте другой запрос</div>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--pp-border)" }}>
                      {["Клиент", "Телефон", "Услуга", "Статус", "Дата", ""].map(h => (
                        <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pp-faint)", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c, i) => {
                      const st = STATUS_CONFIG[c.status] || STATUS_CONFIG.new;
                      const isActive = selected?.id === c.id;
                      return (
                        <tr key={c.id}
                          onClick={() => { setSelected(isActive ? null : c); setEditNote(c.note || ""); }}
                          style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--pp-border)" : "none", background: isActive ? "rgba(58,125,107,0.05)" : "transparent", cursor: "pointer", transition: "background 0.15s" }}
                          onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(58,125,107,0.03)"; }}
                          onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}>

                          {/* Имя */}
                          <td style={{ padding: "14px 16px", minWidth: 160 }}>
                            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--pp-text)" }}>{c.name}</div>
                            {c.email && <div style={{ fontSize: 12, color: "var(--pp-muted)", marginTop: 2 }}>{c.email}</div>}
                            {c.note && <div style={{ fontSize: 11, color: "var(--pp-teal)", marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}><Icon name="StickyNote" size={11} />есть заметка</div>}
                          </td>

                          {/* Телефон */}
                          <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                            <a href={`tel:${c.phone}`} onClick={e => e.stopPropagation()}
                              style={{ fontSize: 14, color: "var(--pp-teal)", textDecoration: "none", fontWeight: 500 }}>
                              {c.phone}
                            </a>
                          </td>

                          {/* Услуга */}
                          <td style={{ padding: "14px 16px" }}>
                            {c.service ? (
                              <span style={{ fontSize: 13, color: "var(--pp-text)" }}>
                                {SERVICE_EMOJI[c.service] || "📌"} {c.service}
                              </span>
                            ) : <span style={{ color: "var(--pp-faint)", fontSize: 13 }}>—</span>}
                          </td>

                          {/* Статус */}
                          <td style={{ padding: "14px 16px" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: st.bg, color: st.color, borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
                              <span style={{ width: 6, height: 6, borderRadius: "50%", background: st.dot, flexShrink: 0 }} />
                              {st.label}
                            </span>
                          </td>

                          {/* Дата */}
                          <td style={{ padding: "14px 16px", fontSize: 12, color: "var(--pp-muted)", whiteSpace: "nowrap" }}>
                            {formatDate(c.created_at)}
                          </td>

                          {/* Стрелка */}
                          <td style={{ padding: "14px 16px", textAlign: "right" }}>
                            <Icon name={isActive ? "ChevronRight" : "ChevronRight"} size={14} style={{ color: "var(--pp-faint)", transform: isActive ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Детали клиента */}
          {selected && (
            <div style={{ background: "var(--pp-cream-2)", border: "1px solid var(--pp-border)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 20, alignSelf: "start", position: "sticky", top: 80 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "var(--pp-text)", marginBottom: 4 }}>{selected.name}</div>
                  <a href={`tel:${selected.phone}`} style={{ fontSize: 14, color: "var(--pp-teal)", textDecoration: "none", fontWeight: 500 }}>{selected.phone}</a>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: "var(--pp-cream-3)", border: "none", borderRadius: "50%", width: 30, height: 30, cursor: "pointer", color: "var(--pp-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="X" size={14} />
                </button>
              </div>

              {/* Инфо */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Услуга", value: selected.service ? `${SERVICE_EMOJI[selected.service] || "📌"} ${selected.service}` : null },
                  { label: "Email", value: selected.email },
                  { label: "Источник", value: selected.source },
                  { label: "Дата заявки", value: formatDate(selected.created_at) },
                ].map(row => row.value && (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--pp-faint)", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: 13, color: "var(--pp-text)", textAlign: "right" }}>{row.value}</span>
                  </div>
                ))}
                {selected.message && (
                  <div style={{ padding: "10px 12px", background: "var(--pp-cream-3)", borderRadius: 8, fontSize: 13, color: "var(--pp-muted)", lineHeight: 1.6 }}>
                    💬 {selected.message}
                  </div>
                )}
              </div>

              {/* Статус */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 10 }}>Статус</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                    <button key={key} onClick={() => updateStatus(selected.id, key)}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", border: selected.status === key ? `1.5px solid ${cfg.dot}` : "1.5px solid var(--pp-border)", background: selected.status === key ? cfg.bg : "transparent", color: selected.status === key ? cfg.color : "var(--pp-muted)", fontSize: 13, fontWeight: selected.status === key ? 600 : 400, transition: "all 0.15s", textAlign: "left" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.dot, flexShrink: 0 }} />
                      {cfg.label}
                      {selected.status === key && <Icon name="Check" size={13} style={{ marginLeft: "auto" }} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Заметка */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pp-muted)", marginBottom: 10 }}>Заметка</div>
                <textarea value={editNote} onChange={e => setEditNote(e.target.value)}
                  placeholder="Добавьте заметку о клиенте..."
                  rows={3}
                  style={{ width: "100%", background: "var(--pp-cream-3)", border: "1.5px solid var(--pp-border)", borderRadius: 10, padding: "10px 12px", fontSize: 13, color: "var(--pp-text)", outline: "none", resize: "none", fontFamily: "'Golos Text', sans-serif", boxSizing: "border-box", lineHeight: 1.6 }}
                  onFocus={e => (e.target.style.borderColor = "var(--pp-teal)")}
                  onBlur={e => (e.target.style.borderColor = "var(--pp-border)")} />
                <button onClick={saveNote} disabled={saving}
                  style={{ marginTop: 8, width: "100%", padding: "10px", background: saving ? "var(--pp-cream-3)" : "var(--pp-teal)", color: saving ? "var(--pp-muted)" : "#fff", border: "none", borderRadius: 8, cursor: saving ? "default" : "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s" }}>
                  {saving ? "Сохраняем..." : "Сохранить заметку"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 16, fontSize: 12, color: "var(--pp-faint)", textAlign: "center" }}>
          Показано {filtered.length} из {contacts.length} клиентов
        </div>
      </div>
    </div>
  );
}
