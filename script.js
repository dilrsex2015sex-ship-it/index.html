:root{
  --bg:#f7fbff;
  --card:#ffffff;
  --accent:#0b69ff;
  --muted:#6b7280;
  --radius:12px;
  --max-width:900px;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Inter,system-ui,Segoe UI,Roboto,"Helvetica Neue",Arial;
  background: linear-gradient(180deg,var(--bg),#eef6ff);
  color:#0f172a;
  display:flex;
  min-height:100vh;
  align-items:center;
  justify-content:center;
  padding:24px;
}
.container{
  width:100%;
  max-width:var(--max-width);
  background:transparent;
}
h1{margin:0 0 12px 0;font-size:1.6rem}
.search{display:flex;gap:8px;margin-bottom:12px}
.search input{
  flex:1;padding:10px 12px;border:1px solid #dbe7ff;border-radius:8px;
  font-size:1rem;background:white;
}
.search button{padding:10px 12px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer}
.search button#use-geo{background:#e6f0ff;color:var(--accent);width:44px}

.status{margin:10px 0;color:var(--muted)}

.card{
  background:var(--card);
  border-radius:var(--radius);
  padding:16px;
  box-shadow: 0 6px 18px rgba(11,105,255,0.08);
  margin-bottom:12px;
}

.current-row{display:flex;gap:16px;align-items:center}
.big{display:flex;align-items:center;gap:12px}
.emoji{font-size:48px}
.temp{font-size:36px;font-weight:600}
.details{color:var(--muted)}

.forecast-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:8px;
}
.forecast-card{
  background:linear-gradient(180deg,#fff,#fbfdff);
  padding:10px;border-radius:10px;border:1px solid #edf6ff;text-align:center;
}
.forecast-card .day{font-weight:600}
.forecast-card .small{font-size:0.85rem;color:var(--muted)}

.hidden{display:none}

footer{margin-top:14px;color:var(--muted)}
a{color:var(--accent)}
