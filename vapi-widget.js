// WeBridge AI — VAPI Demo Widget
// Host this file on GitHub Pages and load it from Framer with one <script> tag

(function () {

  var apk = "788f6358-a7b6-4a8e-904e-b3e3d4dce62a";
  var ast = "eafc788d-c2fe-4b9e-ac12-ad72797726d9";
  var sqd = "78eaf66f-72db-4f78-a222-58b6aaf1e849";
  var bid = "69b28821b7ec241ddc60e586";
  var popWin = null;

  // ─── Popup HTML ────────────────────────────────────────────────────────────

  function buildPopupHTML() {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #0a0f1a;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow: hidden;
  }

  /* ── Screens ── */
  #sn, #sc, #ss { display: none; width: 360px; }
  #sn.on { display: flex; align-items: center; justify-content: center; }
  #sc.on, #ss.on { display: block; }

  /* ── Card base ── */
  .card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 20px;
    padding: 32px 28px;
    text-align: center;
    width: 100%;
    animation: fadeUp 0.35s ease;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Screen 1 — Name input ── */
  .s1-icon { font-size: 44px; margin-bottom: 14px; }
  .s1-title { color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
  .s1-sub { color: #6b7280; font-size: 13px; margin-bottom: 22px; line-height: 1.5; }
  input#ni {
    width: 100%; padding: 12px 16px;
    background: #1f2937; border: 1.5px solid #374151;
    border-radius: 12px; color: #fff; font-size: 15px;
    margin-bottom: 12px; outline: none; transition: border-color 0.2s;
  }
  input#ni:focus { border-color: #3b82f6; }
  input#ni::placeholder { color: #4b5563; }
  #sb {
    width: 100%; padding: 13px 0;
    background: linear-gradient(135deg, #1d4ed8, #2563eb);
    color: #fff; border: none; border-radius: 50px;
    font-size: 15px; font-weight: 600; cursor: pointer;
    transition: opacity 0.2s; letter-spacing: 0.01em;
  }
  #sb:hover { opacity: 0.9; }
  .s1-note { color: #374151; font-size: 11px; margin-top: 14px; }

  /* ── Screen 2 — Active call ── */
  #av {
    width: 72px; height: 72px; border-radius: 50%;
    background: linear-gradient(135deg, #1d4ed8, #7c3aed);
    margin: 0 auto 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; transition: background 0.4s;
  }
  #nd { color: #fff; font-size: 18px; font-weight: 700; margin-bottom: 6px; }
  #st { color: #6b7280; font-size: 13px; margin-bottom: 4px; min-height: 18px; transition: color 0.3s; }
  #st.ok { color: #22c55e; }
  #tm { color: #374151; font-size: 12px; margin-bottom: 18px; min-height: 16px; font-variant-numeric: tabular-nums; }

  /* wave */
  #wv {
    display: flex; align-items: center; justify-content: center;
    gap: 4px; height: 28px; margin-bottom: 18px;
  }
  #wv span {
    display: block; width: 4px; border-radius: 3px;
    background: #1d4ed8; animation: wv 1.2s ease-in-out infinite;
  }
  #wv span:nth-child(1) { animation-delay: 0s; }
  #wv span:nth-child(2) { animation-delay: .1s; }
  #wv span:nth-child(3) { animation-delay: .2s; }
  #wv span:nth-child(4) { animation-delay: .3s; }
  #wv span:nth-child(5) { animation-delay: .2s; }
  #wv span:nth-child(6) { animation-delay: .1s; }
  #wv span:nth-child(7) { animation-delay: 0s; }
  #wv.sp span { background: #22c55e; }
  @keyframes wv { 0%,100% { height: 4px; } 50% { height: 24px; } }

  #eb {
    width: 100%; padding: 12px 0;
    background: #991b1b; color: #fff; border: none;
    border-radius: 50px; font-size: 14px; font-weight: 600;
    cursor: pointer; transition: background 0.2s;
  }
  #eb:hover { background: #7f1d1d; }

  /* ── Screen 3 — HubSpot CRM card ── */
  .ss-title { color: #fff; font-size: 17px; font-weight: 700; margin-bottom: 4px; }
  .ss-sub { color: #6b7280; font-size: 12px; margin-bottom: 14px; }

  /* HubSpot card */
  .hs-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 14px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.35);
    animation: hsSlide 0.5s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes hsSlide {
    from { opacity: 0; transform: translateY(16px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* HubSpot header */
  .hs-header {
    background: #ff7a59;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hs-logo {
    width: 22px; height: 22px; flex-shrink: 0;
  }
  .hs-header-title {
    color: #fff; font-size: 13px; font-weight: 700;
    letter-spacing: 0.01em;
  }
  .hs-sync {
    margin-left: auto;
    display: flex; align-items: center; gap: 6px;
    font-size: 11px; color: rgba(255,255,255,0.9);
  }
  .hs-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transition: background 0.4s;
  }
  .hs-dot.syncing { animation: pulse 0.8s ease-in-out infinite; }
  .hs-dot.saved { background: #4ade80; animation: none; }
  @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

  /* HubSpot body */
  .hs-body { padding: 10px 14px 8px; }
  .hs-section {
    font-size: 9px; font-weight: 800; color: #ff7a59;
    letter-spacing: 1.2px; text-transform: uppercase;
    margin: 8px 0 4px;
  }
  .hs-row {
    display: flex; justify-content: space-between;
    align-items: baseline;
    padding: 5px 0;
    border-bottom: 1px solid #f3f4f6;
  }
  .hs-row:last-child { border-bottom: none; }
  .hs-label { font-size: 10px; color: #9ca3af; font-weight: 500; flex-shrink: 0; width: 72px; }
  .hs-value {
    font-size: 11px; color: #111827; font-weight: 600;
    text-align: right; flex: 1; min-height: 14px;
  }

  /* field reveal animation */
  .hs-value.reveal {
    animation: revealField 0.4s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes revealField {
    from { opacity: 0; transform: translateX(8px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* temperature colours */
  .hs-value.hot  { color: #16a34a; }
  .hs-value.warm { color: #d97706; }
  .hs-value.cold { color: #9ca3af; }

  /* saved banner */
  .hs-saved {
    display: none;
    align-items: center; justify-content: center; gap: 6px;
    padding: 8px 14px;
    background: #f0fdf4;
    font-size: 11px; font-weight: 700; color: #16a34a;
    border-top: 1px solid #dcfce7;
    animation: fadeIn 0.4s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  /* Book button */
  #bk {
    width: 100%; padding: 13px 0;
    background: #ff7a59; color: #fff; border: none;
    border-radius: 50px; font-size: 14px; font-weight: 700;
    cursor: pointer; letter-spacing: 0.01em;
    transition: background 0.2s; margin-bottom: 10px;
  }
  #bk:hover { background: #e8623e; }
  .ss-note { color: #374151; font-size: 11px; }
</style>
</head>
<body>

<!-- Screen 1: Name -->
<div id="sn" class="on">
  <div class="card">
    <div class="s1-icon">🎙️</div>
    <div class="s1-title">Talk to John</div>
    <div class="s1-sub">Experience your AI real estate concierge — exactly as your leads would.</div>
    <input id="ni" type="text" placeholder="Your first name" maxlength="30" autocomplete="off"/>
    <button id="sb">Start Demo Call</button>
    <div class="s1-note">Microphone required · ~2 min</div>
  </div>
</div>

<!-- Screen 2: Active call -->
<div id="sc">
  <div class="card">
    <div id="av">🎙️</div>
    <div id="nd"></div>
    <div id="st">Connecting...</div>
    <div id="tm"></div>
    <div id="wv">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span>
    </div>
    <button id="eb">End Call</button>
  </div>
</div>

<!-- Screen 3: HubSpot CRM summary -->
<div id="ss">
  <div class="card">
    <div class="ss-title">⚡ Live CRM Update</div>
    <div class="ss-sub">John is logging this lead into HubSpot right now.</div>

    <div class="hs-card">
      <!-- Header -->
      <div class="hs-header">
        <svg class="hs-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.97 14.62V9.8a3.07 3.07 0 1 0-3.94 0v4.82a8.57 8.57 0 0 0-4.13 2.42L8.44 11.2a3.3 3.3 0 1 0-.9 1.6l9.9 5.45a8.55 8.55 0 0 0 0 4.1L8.44 27.8a3.3 3.3 0 1 0 .9 1.6l10.46-5.86a8.57 8.57 0 1 0 7.17-8.92z" fill="white"/>
        </svg>
        <span class="hs-header-title">HubSpot CRM</span>
        <span class="hs-sync">
          <span class="hs-dot syncing" id="hd"></span>
          <span id="htxt">Syncing...</span>
        </span>
      </div>

      <!-- Body -->
      <div class="hs-body">
        <div class="hs-section">Contact</div>
        <div class="hs-row">
          <span class="hs-label">Name</span>
          <span class="hs-value" id="s-name"></span>
        </div>
        <div class="hs-row">
          <span class="hs-label">Source</span>
          <span class="hs-value" id="s-src"></span>
        </div>

        <div class="hs-section">Deal</div>
        <div class="hs-row">
          <span class="hs-label">Intent</span>
          <span class="hs-value" id="s-intent"></span>
        </div>
        <div class="hs-row">
          <span class="hs-label">Lead Temp</span>
          <span class="hs-value" id="s-temp"></span>
        </div>
        <div class="hs-row">
          <span class="hs-label">Budget</span>
          <span class="hs-value" id="s-budget"></span>
        </div>
        <div class="hs-row">
          <span class="hs-label">Timeline</span>
          <span class="hs-value" id="s-timeline"></span>
        </div>
        <div class="hs-row">
          <span class="hs-label">Location</span>
          <span class="hs-value" id="s-loc"></span>
        </div>

        <div class="hs-section">Notes</div>
        <div class="hs-row">
          <span class="hs-value" id="s-notes" style="text-align:left;font-weight:400;font-size:10px;color:#374151;line-height:1.5;"></span>
        </div>
      </div>

      <!-- Saved banner -->
      <div class="hs-saved" id="hsv">✓ Contact saved to HubSpot</div>
    </div>

    <button id="bk">📅 Book My Free Setup Call</button>
    <div class="ss-note">Ready to set this up for your real leads?</div>
  </div>
</div>

</body>
</html>`;
  }

  // ─── Show summary ───────────────────────────────────────────────────────────

  function showSummary(cn) {
    fetch('https://api.jsonbin.io/v3/b/' + bid + '/latest?t=' + Date.now())
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var a = d.record || {};
        var gi = function (x) { return popWin.document.getElementById(x); };

        var temp = (a.temperature || 'warm').toLowerCase();
        var tempTxt = temp === 'hot' ? '🟢 Hot' : temp === 'cold' ? '⚪ Cold' : '🟡 Warm';

        // Set all field values before showing screen
        gi('s-name').textContent     = cn || 'Unknown';
        gi('s-src').textContent      = 'WeBridge AI Demo';
        gi('s-intent').textContent   = a.intent || '—';
        gi('s-budget').textContent   = a.budget || 'Not mentioned';
        gi('s-timeline').textContent = a.timeline || 'Not mentioned';
        gi('s-loc').textContent      = a.location || 'Not mentioned';
        gi('s-notes').textContent    = a.notes || '—';

        var tempEl = gi('s-temp');
        tempEl.className = 'hs-value ' + (temp === 'hot' ? 'hot' : temp === 'cold' ? 'cold' : 'warm');
        tempEl.textContent = tempTxt;

        // Add staggered reveal animation to every row
        var rows = popWin.document.querySelectorAll('.hs-row');
        rows.forEach(function (row, i) {
          row.style.opacity = '0';
          row.style.transform = 'translateY(6px)';
          row.style.transition = 'opacity 0.35s ease ' + (i * 0.07) + 's, transform 0.35s ease ' + (i * 0.07) + 's';
        });

        // Switch to summary screen
        gi('sc').classList.remove('on');
        gi('ss').classList.add('on');

        // Trigger animations on next frame
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            rows.forEach(function (row) {
              row.style.opacity = '1';
              row.style.transform = 'translateY(0)';
            });
          });
        });

        // Show saved banner after all rows have animated in
        var totalDelay = (rows.length * 70) + 400;
        setTimeout(function () {
          gi('hd').className = 'hs-dot saved';
          gi('htxt').textContent = 'Saved';
          gi('hsv').style.display = 'flex';
        }, totalDelay);
      })
      .catch(function (e) {
        console.log('Summary fetch error:', e);
        if (popWin && !popWin.closed) {
          popWin.document.getElementById('sc').classList.remove('on');
          popWin.document.getElementById('ss').classList.add('on');
        }
      });
  }

  // ─── Start call (injected into popup) ──────────────────────────────────────

  function startCall(cn) {
    var s = '';
    s += 'var ti=null,ts=0;';
    s += 'function sT(){ts=0;ti=setInterval(function(){ts++;var m=String(Math.floor(ts/60)).padStart(2,"0");var sec=String(ts%60).padStart(2,"0");document.getElementById("tm").innerText=m+":"+sec;},1000);}';
    s += 'var callEnded=false;';
    s += 'function endUI(){';
    s += '  if(callEnded)return;callEnded=true;';
    s += '  clearInterval(ti);';
    s += '  document.getElementById("wv").style.display="none";';
    s += '  document.getElementById("eb").style.display="none";';
    s += '  document.getElementById("av").style.background="linear-gradient(135deg,#374151,#4b5563)";';
    s += '  document.getElementById("av").textContent="\u23f3";';
    s += '  document.getElementById("st").className="";';
    s += '  document.getElementById("st").textContent="Getting your report, please wait...";';
    s += '  var c=20;';
    s += '  document.getElementById("tm").textContent="Ready in ~"+c+"s";';
    s += '  var ci=setInterval(function(){c--;document.getElementById("tm").textContent=c>0?"Ready in ~"+c+"s":"Almost ready...";if(c<=0)clearInterval(ci);},1000);';
    s += '  window.opener.triggerSummary();';
    s += '}';
    s += '(function(d,t){';
    s += '  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];';
    s += '  g.src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";';
    s += '  g.defer=true;g.async=true;s.parentNode.insertBefore(g,s);';
    s += '  g.onload=function(){';
    s += '    var v=window.vapiSDK.run({apiKey:"' + apk + '",assistant:"' + ast + '",config:{position:"bottom-right",idle:{color:"transparent",type:"pill",title:"",subtitle:""},active:{color:"transparent",type:"pill",title:"",subtitle:""}}});';
    s += '    v.on("call-start",function(){document.getElementById("st").textContent="Connected";document.getElementById("st").className="ok";sT();});';
    s += '    v.on("speech-start",function(){document.getElementById("av").style.background="linear-gradient(135deg,#15803d,#22c55e)";document.getElementById("wv").classList.add("sp");document.getElementById("st").textContent="John is speaking...";});';
    s += '    v.on("speech-end",function(){if(callEnded)return;document.getElementById("av").style.background="linear-gradient(135deg,#1d4ed8,#7c3aed)";document.getElementById("wv").classList.remove("sp");document.getElementById("st").className="ok";document.getElementById("st").textContent="Listening \u2014 speak anytime";});';
    s += '    v.on("call-end",function(){endUI();});';
    s += '    v.on("error",function(e){document.getElementById("st").textContent="Error: "+(e&&e.message?e.message:JSON.stringify(e));});';
    s += '    v.start(null,{variableValues:{customer_name:"' + cn + '"}},"' + sqd + '");';
    s += '    document.getElementById("eb").addEventListener("click",function(){v.stop();endUI();});';
    s += '  };';
    s += '})(document,"script");';

    var script = popWin.document.createElement('script');
    script.textContent = s;
    popWin.document.body.appendChild(script);
  }

  // ─── Open popup ─────────────────────────────────────────────────────────────

  function openVapi() {
    popWin = window.open(
      '', 'vapiCall',
      'width=400,height=620,left=' + ((screen.width - 400) / 2) + ',top=' + ((screen.height - 620) / 2)
    );
    popWin.document.open();
    popWin.document.write(buildPopupHTML());
    popWin.document.close();

    setTimeout(function () {
      var ni = popWin.document.getElementById('ni');
      var sb = popWin.document.getElementById('sb');

      sb.addEventListener('click', function () {
        var cn = (ni.value || '').trim();
        if (!cn) { ni.style.borderColor = '#dc2626'; return; }

        popWin.document.getElementById('nd').textContent = cn;
        popWin.document.getElementById('sn').classList.remove('on');
        popWin.document.getElementById('sc').classList.add('on');

        // Set up triggerSummary in parent so popup can call it
        window.triggerSummary = function () {
          showSummary(cn);
        };

        startCall(cn);
      });

      ni.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') sb.click();
      });

      popWin.document.getElementById('bk').addEventListener('click', function () {
        popWin.open('https://webridgeai.com', '_blank');
      });
    }, 300);
  }

  // ─── Wire up "Live Demo" button on Framer page ──────────────────────────────

  setTimeout(function () {
    document.querySelectorAll('a,button,div,span').forEach(function (el) {
      if ((el.innerText || '').trim().toLowerCase() === 'live demo') {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          openVapi();
        });
      }
    });
  }, 3000);

})();
