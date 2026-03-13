// WeBridge AI — VAPI Demo Widget
(function () {

  var apk = "788f6358-a7b6-4a8e-904e-b3e3d4dce62a";
  var ast = "eafc788d-c2fe-4b9e-ac12-ad72797726d9";
  var sqd = "78eaf66f-72db-4f78-a222-58b6aaf1e849";
  var bid = "69b28821b7ec241ddc60e586";
  var bkey = "$2a$10$aB8tvnx0wuM6EfxD.3Lm0OKcciC5VDS24yCQfSJhuIfid2Mr6tWcy";
  var popWin = null;

  function openVapi() {
    popWin = window.open(
      '', 'vapiCall',
      'width=400,height=620,left=' + Math.round((screen.width - 400) / 2) + ',top=' + Math.round((screen.height - 620) / 2)
    );

    // Build the entire page including the logic script as one string
    // so document.write gets everything in one shot
    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/>';
    html += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">';
    html += '<style>';

    // === CSS Reset & Base ===
    html += ':root{--bg:#060a13;--surface:rgba(255,255,255,0.03);--surface-border:rgba(255,255,255,0.06);--glass:rgba(12,17,30,0.8);--glass-border:rgba(255,255,255,0.08);--accent:#14b8a6;--accent-glow:rgba(20,184,166,0.15);--accent-bright:#2dd4bf;--text:#f0f2f5;--text-secondary:#6b7a8d;--text-muted:#3a4555;--danger:#ef4444;--hs-orange:#ff7a59;--font-display:"Sora",sans-serif;--font-body:"DM Sans",sans-serif}';
    html += '*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}';
    html += 'body{background:var(--bg);display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:var(--font-body);-webkit-font-smoothing:antialiased}';

    // === Ambient background glow ===
    html += 'body::before{content:"";position:fixed;top:-40%;left:-20%;width:60%;height:80%;background:radial-gradient(ellipse,rgba(20,184,166,0.06) 0%,transparent 70%);pointer-events:none}';
    html += 'body::after{content:"";position:fixed;bottom:-30%;right:-15%;width:50%;height:70%;background:radial-gradient(ellipse,rgba(99,102,241,0.04) 0%,transparent 70%);pointer-events:none}';

    // === Screen containers ===
    html += '#sn,#sc,#ss{display:none;width:360px}';
    html += '#sn.on{display:flex;align-items:center;justify-content:center}';
    html += '#sc.on,#ss.on{display:block}';

    // === Glass card ===
    html += '.card{background:var(--glass);backdrop-filter:blur(40px) saturate(1.4);-webkit-backdrop-filter:blur(40px) saturate(1.4);border:1px solid var(--glass-border);border-radius:24px;padding:36px 30px;text-align:center;width:100%;animation:cardIn 0.6s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.05)}';
    html += '@keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}';

    // --- subtle top edge highlight ---
    html += '.card::before{content:"";position:absolute;top:0;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)}';

    // --- noise texture overlay ---
    html += '.card::after{content:"";position:absolute;inset:0;border-radius:24px;opacity:0.025;background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E");pointer-events:none}';

    // ===== SCREEN 1: Name Input =====

    // --- branding ---
    html += '.wb-brand{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:24px;opacity:0;animation:fadeIn 0.5s 0.15s forwards}';
    html += '.wb-logo-mark{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,var(--accent),#0d9488);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;font-family:var(--font-display);box-shadow:0 2px 12px var(--accent-glow)}';
    html += '.wb-logo-text{font-family:var(--font-display);font-size:13px;font-weight:600;color:rgba(255,255,255,0.5);letter-spacing:0.8px;text-transform:uppercase}';
    html += '.wb-logo-text span{color:var(--accent)}';

    // --- icon & title ---
    html += '.s1-icon{font-size:40px;margin-bottom:16px;opacity:0;animation:floatIn 0.6s 0.25s forwards}';
    html += '@keyframes floatIn{from{opacity:0;transform:translateY(10px) scale(0.9)}to{opacity:1;transform:translateY(0) scale(1)}}';
    html += '.s1-title{color:var(--text);font-size:22px;font-weight:600;margin-bottom:8px;font-family:var(--font-display);letter-spacing:-0.4px;opacity:0;animation:fadeIn 0.5s 0.3s forwards}';
    html += '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
    html += '.s1-sub{color:var(--text-secondary);font-size:13px;margin-bottom:26px;line-height:1.7;opacity:0;animation:fadeIn 0.5s 0.4s forwards}';

    // --- input ---
    html += 'input#ni{width:100%;padding:13px 18px;background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.08);border-radius:14px;color:var(--text);font-size:15px;font-family:var(--font-body);font-weight:500;margin-bottom:14px;outline:none;transition:border-color 0.3s,box-shadow 0.3s,background 0.3s;opacity:0;animation:fadeSlideUp 0.5s 0.45s forwards}';
    html += '@keyframes fadeSlideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
    html += 'input#ni:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow);background:rgba(255,255,255,0.06)}';
    html += 'input#ni::placeholder{color:var(--text-muted);font-weight:400}';

    // --- start button ---
    html += '#sb{width:100%;padding:14px 0;background:var(--accent);color:#fff;border:none;border-radius:50px;font-size:15px;font-weight:600;cursor:pointer;font-family:var(--font-body);transition:all 0.2s;box-shadow:0 4px 20px var(--accent-glow);letter-spacing:0.2px;opacity:0;animation:fadeSlideUp 0.5s 0.5s forwards;position:relative;overflow:hidden}';
    html += '#sb::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent);opacity:0;transition:opacity 0.2s}';
    html += '#sb:hover{transform:translateY(-1px);box-shadow:0 6px 28px rgba(20,184,166,0.35)}';
    html += '#sb:hover::after{opacity:1}';
    html += '#sb:active{transform:translateY(0);box-shadow:0 2px 12px var(--accent-glow)}';

    // --- note ---
    html += '.s1-note{color:var(--text-muted);font-size:11px;margin-top:16px;letter-spacing:0.3px;opacity:0;animation:fadeIn 0.5s 0.6s forwards}';

    // ===== SCREEN 2: Active Call =====

    // --- avatar with breathing glow ---
    html += '#av{width:76px;height:76px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#0d9488);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:all 0.5s cubic-bezier(0.4,0,0.2,1);box-shadow:0 0 0 0 var(--accent-glow);animation:breathe 3s ease-in-out infinite}';
    html += '@keyframes breathe{0%,100%{box-shadow:0 4px 20px var(--accent-glow),0 0 0 0 transparent}50%{box-shadow:0 4px 30px rgba(20,184,166,0.25),0 0 0 10px rgba(20,184,166,0.05)}}';

    // --- name & status ---
    html += '#nd{color:var(--text);font-size:18px;font-weight:600;margin-bottom:4px;font-family:var(--font-display);letter-spacing:-0.3px}';
    html += '#st{color:var(--text-secondary);font-size:13px;margin-bottom:4px;min-height:18px;transition:color 0.3s}';
    html += '#st.ok{color:var(--accent-bright)}';
    html += '#tm{color:var(--text-muted);font-size:12px;font-family:var(--font-display);font-weight:400;margin-bottom:20px;min-height:16px;letter-spacing:1px}';

    // --- waveform ---
    html += '#wv{display:flex;align-items:center;justify-content:center;gap:3px;height:32px;margin-bottom:20px}';
    html += '#wv span{display:block;width:3px;border-radius:3px;background:var(--accent);opacity:0.7;animation:wv 1.2s ease-in-out infinite}';
    html += '#wv span:nth-child(1){animation-delay:0s}#wv span:nth-child(2){animation-delay:.1s}#wv span:nth-child(3){animation-delay:.2s}#wv span:nth-child(4){animation-delay:.3s}#wv span:nth-child(5){animation-delay:.2s}#wv span:nth-child(6){animation-delay:.1s}#wv span:nth-child(7){animation-delay:0s}';
    html += '#wv.sp span{background:#34d399;opacity:1}';
    html += '@keyframes wv{0%,100%{height:3px}50%{height:26px}}';

    // --- end call button ---
    html += '#eb{width:100%;padding:13px 0;background:rgba(239,68,68,0.12);color:#f87171;border:1.5px solid rgba(239,68,68,0.2);border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--font-body);transition:all 0.2s;letter-spacing:0.2px}';
    html += '#eb:hover{background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.35)}';

    // === Progress bar (post-call) ===
    html += '#prog-wrap{display:none;margin:6px 0 16px;text-align:center}';
    html += '#prog-track{width:100%;height:4px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;position:relative}';
    html += '#prog-fill{height:100%;width:0%;border-radius:4px;background:linear-gradient(90deg,var(--accent),var(--accent-bright));transition:width 1s linear;position:relative}';
    html += '#prog-fill::after{content:"";position:absolute;right:-2px;top:-3px;width:10px;height:10px;border-radius:50%;background:var(--accent-bright);box-shadow:0 0 12px var(--accent),0 0 4px var(--accent-bright);opacity:0.9}';
    html += '#prog-label{font-size:11px;color:var(--text-secondary);margin-top:10px;font-weight:500;letter-spacing:0.2px}';
    html += '@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}';
    html += '#prog-fill.shimmer{background:linear-gradient(90deg,var(--accent),var(--accent-bright),#5eead4,var(--accent-bright),var(--accent));background-size:200% 100%;animation:shimmer 2.5s ease-in-out infinite}';

    // ===== SCREEN 3: HubSpot CRM Summary =====
    html += '.ss-title{color:var(--text);font-size:17px;font-weight:600;margin-bottom:5px;font-family:var(--font-display);letter-spacing:-0.2px}';
    html += '.ss-sub{color:var(--text-secondary);font-size:12px;margin-bottom:16px;line-height:1.5}';

    // --- HubSpot card ---
    html += '.hs-card{background:#fff;border-radius:14px;overflow:hidden;margin-bottom:16px;box-shadow:0 8px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2)}';
    html += '.hs-header{background:linear-gradient(135deg,#ff7a59,#ff5c35);padding:10px 14px;display:flex;align-items:center;gap:8px}';
    html += '.hs-logo{width:20px;height:20px;flex-shrink:0}';
    html += '.hs-header-title{color:#fff;font-size:12px;font-weight:700;font-family:var(--font-body);letter-spacing:0.3px}';
    html += '.hs-sync{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:10px;color:rgba(255,255,255,0.85);font-weight:500}';
    html += '.hs-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.45)}';
    html += '.hs-dot.syncing{animation:pulse 0.8s ease-in-out infinite}';
    html += '.hs-dot.saved{background:#4ade80;animation:none;box-shadow:0 0 6px rgba(74,222,128,0.5)}';
    html += '@keyframes pulse{0%,100%{opacity:0.3}50%{opacity:1}}';
    html += '.hs-body{padding:10px 14px 6px}';
    html += '.hs-section{font-size:8px;font-weight:700;color:var(--hs-orange);letter-spacing:1.4px;text-transform:uppercase;margin:8px 0 4px;font-family:var(--font-body);opacity:0;animation:rowReveal 0.4s cubic-bezier(0.22,1,0.36,1) forwards}';
    html += '.hs-body>.hs-section:nth-child(1){animation-delay:0.1s}';
    html += '.hs-body>.hs-section:nth-child(4){animation-delay:0.35s}';
    html += '.hs-body>.hs-section:nth-child(10){animation-delay:0.75s}';

    // --- CRM rows with staggered reveal ---
    html += '.hs-row{display:flex;justify-content:space-between;align-items:baseline;padding:6px 0;border-bottom:1px solid #f3f4f6;opacity:0;transform:translateY(6px);animation:rowReveal 0.4s cubic-bezier(0.22,1,0.36,1) forwards}';
    html += '.hs-body>.hs-row:nth-child(2){animation-delay:0.15s}';
    html += '.hs-body>.hs-row:nth-child(3){animation-delay:0.22s}';
    html += '.hs-body>.hs-row:nth-child(5){animation-delay:0.4s}';
    html += '.hs-body>.hs-row:nth-child(6){animation-delay:0.47s}';
    html += '.hs-body>.hs-row:nth-child(7){animation-delay:0.54s}';
    html += '.hs-body>.hs-row:nth-child(8){animation-delay:0.61s}';
    html += '.hs-body>.hs-row:nth-child(9){animation-delay:0.68s}';
    html += '.hs-body>.hs-row:nth-child(11){animation-delay:0.82s}';
    html += '@keyframes rowReveal{to{opacity:1;transform:translateY(0)}}';
    html += '.hs-row:last-child{border-bottom:none}';
    html += '.hs-label{font-size:10px;color:#9ca3af;font-weight:500;flex-shrink:0;width:70px;font-family:var(--font-body)}';
    html += '.hs-value{font-size:11px;color:#1f2937;font-weight:600;text-align:right;flex:1;min-height:14px;font-family:var(--font-body)}';
    html += '.hs-value.hot{color:#059669}.hs-value.warm{color:#d97706}.hs-value.cold{color:#9ca3af}';
    html += '.hs-saved{display:none;align-items:center;justify-content:center;gap:6px;padding:8px 14px;background:#f0fdf4;font-size:11px;font-weight:700;color:#059669;border-top:1px solid #dcfce7;font-family:var(--font-body)}';

    // --- CTA button with pulse ---
    html += '@keyframes ctaGlow{0%,100%{box-shadow:0 4px 16px rgba(255,122,89,0.25)}50%{box-shadow:0 4px 32px rgba(255,122,89,0.45),0 0 0 4px rgba(255,122,89,0.08)}}';
    html += '#bk{width:100%;padding:14px 0;background:linear-gradient(135deg,#ff7a59,#ff5c35);color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;font-family:var(--font-body);animation:ctaGlow 3s ease-in-out infinite;transition:transform 0.15s;letter-spacing:0.2px;position:relative;overflow:hidden}';
    html += '#bk::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);opacity:0;transition:opacity 0.2s}';
    html += '#bk:hover{transform:translateY(-1px)}';
    html += '#bk:hover::after{opacity:1}';
    html += '.cta-sub{color:var(--text-secondary);font-size:11px;margin-bottom:12px;letter-spacing:0.2px;font-weight:400}';
    html += '.ss-note{color:var(--text-muted);font-size:11px;letter-spacing:0.2px}';

    html += '</style></head><body>';

    // Screen 1: Name input
    html += '<div id="sn" class="on"><div class="card">';
    html += '<div class="wb-brand"><div class="wb-logo-mark">W</div><div class="wb-logo-text">WeBridge <span>AI</span></div></div>';
    html += '<div class="s1-icon">&#127899;</div>';
    html += '<div class="s1-title">Talk to John</div>';
    html += '<div class="s1-sub">Experience your AI real estate concierge &#8212; exactly as your leads would.</div>';
    html += '<input id="ni" type="text" placeholder="Your first name" maxlength="30" autocomplete="off"/>';
    html += '<button id="sb">Start Demo Call</button>';
    html += '<div class="s1-note">Microphone required &middot; ~2 min</div>';
    html += '</div></div>';

    // Screen 2: Active call
    html += '<div id="sc"><div class="card">';
    html += '<div id="av">&#127899;</div>';
    html += '<div id="nd"></div>';
    html += '<div id="st">Connecting...</div>';
    html += '<div id="tm"></div>';
    html += '<div id="wv"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>';
    html += '<div id="prog-wrap"><div id="prog-track"><div id="prog-fill"></div></div><div id="prog-label">Analyzing conversation...</div></div>';
    html += '<button id="eb">End Call</button>';
    html += '</div></div>';

    // Screen 3: HubSpot CRM summary
    html += '<div id="ss"><div class="card">';
    html += '<div class="ss-title">&#9889; Live CRM Update</div>';
    html += '<div class="ss-sub">John is logging this lead into HubSpot right now.</div>';
    html += '<div class="hs-card">';
    html += '<div class="hs-header">';
    html += '<svg class="hs-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.97 14.62V9.8a3.07 3.07 0 1 0-3.94 0v4.82a8.57 8.57 0 0 0-4.13 2.42L8.44 11.2a3.3 3.3 0 1 0-.9 1.6l9.9 5.45a8.55 8.55 0 0 0 0 4.1L8.44 27.8a3.3 3.3 0 1 0 .9 1.6l10.46-5.86a8.57 8.57 0 1 0 7.17-8.92z" fill="white"/></svg>';
    html += '<span class="hs-header-title">HubSpot CRM</span>';
    html += '<span class="hs-sync"><span class="hs-dot syncing" id="hd"></span><span id="htxt">Syncing...</span></span>';
    html += '</div>';
    html += '<div class="hs-body">';
    html += '<div class="hs-section">Contact</div>';
    html += '<div class="hs-row"><span class="hs-label">Name</span><span class="hs-value" id="s-name"></span></div>';
    html += '<div class="hs-row"><span class="hs-label">Source</span><span class="hs-value" id="s-src"></span></div>';
    html += '<div class="hs-section">Deal</div>';
    html += '<div class="hs-row"><span class="hs-label">Intent</span><span class="hs-value" id="s-intent"></span></div>';
    html += '<div class="hs-row"><span class="hs-label">Lead Temp</span><span class="hs-value" id="s-temp"></span></div>';
    html += '<div class="hs-row"><span class="hs-label">Budget</span><span class="hs-value" id="s-budget"></span></div>';
    html += '<div class="hs-row"><span class="hs-label">Timeline</span><span class="hs-value" id="s-timeline"></span></div>';
    html += '<div class="hs-row"><span class="hs-label">Location</span><span class="hs-value" id="s-loc"></span></div>';
    html += '<div class="hs-section">Notes</div>';
    html += '<div class="hs-row"><span class="hs-value" id="s-notes" style="text-align:left;font-weight:400;font-size:10px;color:#374151;line-height:1.5;"></span></div>';
    html += '</div>';
    html += '<div class="hs-saved" id="hsv">&#10003; Contact saved to HubSpot</div>';
    html += '</div>';
    html += '<button id="bk">&#128197; Book My Free Setup Call</button>';
    html += '<div class="cta-sub">Free 30-min call &middot; No obligation</div>';
    html += '<div class="ss-note">Ready to set this up for your real leads?</div>';
    html += '</div></div>';

    // Everything in one inline script — no appendChild after document.close()
    html += '<script>';
    html += 'var ti=null,ts=0,callEnded=false;';
    html += 'var APK="' + apk + '",AST="' + ast + '",SQD="' + sqd + '",BID="' + bid + '",BKEY="' + bkey + '";';

    html += 'function sT(){ts=0;ti=setInterval(function(){ts++;var m=String(Math.floor(ts/60)).padStart(2,"0"),s=String(ts%60).padStart(2,"0");document.getElementById("tm").innerText=m+":"+s;},1000);}';

    html += 'function fetchAndShow(cn){';
    html += '  console.log("Fetching JSONBin...");';
    html += '  fetch("https://api.jsonbin.io/v3/b/"+BID+"/latest?t="+Date.now(),{headers:{"X-Master-Key":BKEY}})';
    html += '  .then(function(r){console.log("Status:",r.status);return r.json();})';
    html += '  .then(function(d){';
    html += '    console.log("Data:",JSON.stringify(d));';
    html += '    var a=d.record||{};';
    html += '    var gi=function(x){return document.getElementById(x);};';
    html += '    var temp=(a.temperature||"warm").toLowerCase();';
    html += '    gi("s-name").textContent=cn;';
    html += '    gi("s-src").textContent="WeBridge AI Demo";';
    html += '    gi("s-intent").textContent=(a.intent&&a.intent!="null")?a.intent:"--";';
    html += '    gi("s-budget").textContent=(a.budget&&a.budget!="null")?a.budget:"Not mentioned";';
    html += '    gi("s-timeline").textContent=(a.timeline&&a.timeline!="null")?a.timeline:"Not mentioned";';
    html += '    gi("s-loc").textContent=(a.location&&a.location!="null")?a.location:"Not mentioned";';
    html += '    gi("s-notes").textContent=(a.notes&&a.notes!="null")?a.notes:"--";';
    html += '    var te=gi("s-temp");';
    html += '    te.className="hs-value "+(temp==="hot"?"hot":temp==="cold"?"cold":"warm");';
    html += '    te.textContent=temp==="hot"?"\\ud83d\\udfe2 Hot":temp==="cold"?"\\u26aa Cold":"\\ud83d\\udfe1 Warm";';
    html += '    gi("sc").classList.remove("on");';
    html += '    gi("ss").classList.add("on");';
    html += '    setTimeout(function(){gi("hd").className="hs-dot saved";gi("htxt").textContent="Saved";gi("hsv").style.display="flex";},400);';
    html += '  })';
    html += '  .catch(function(e){console.log("Fetch error:",e);document.getElementById("sc").classList.remove("on");document.getElementById("ss").classList.add("on");});';
    html += '}';

    html += 'function endUI(cn){';
    html += '  if(callEnded)return;callEnded=true;';
    html += '  clearInterval(ti);';
    html += '  document.getElementById("wv").style.display="none";';
    html += '  document.getElementById("eb").style.display="none";';
    html += '  document.getElementById("av").style.background="linear-gradient(135deg,#374151,#4b5563)";';
    html += '  document.getElementById("av").style.animation="none";';
    html += '  document.getElementById("av").textContent="\\u23f3";';
    html += '  document.getElementById("st").className="";';
    html += '  document.getElementById("st").textContent="Getting your report, please wait...";';
    html += '  var c=20;';
    html += '  document.getElementById("tm").style.display="none";';
    html += '  var pw=document.getElementById("prog-wrap");pw.style.display="block";';
    html += '  var pf=document.getElementById("prog-fill");pf.classList.add("shimmer");';
    html += '  var pl=document.getElementById("prog-label");';
    html += '  var steps=["Analyzing conversation...","Extracting lead details...","Scoring lead temperature...","Preparing CRM card..."];';
    html += '  pf.style.width="2%";';
    html += '  var ci=setInterval(function(){';
    html += '    c--;';
    html += '    var pct=Math.round(((20-c)/20)*100);';
    html += '    pf.style.width=pct+"%";';
    html += '    if(c<=15&&c>10)pl.textContent=steps[1];';
    html += '    else if(c<=10&&c>5)pl.textContent=steps[2];';
    html += '    else if(c<=5&&c>0)pl.textContent=steps[3];';
    html += '    if(c<=0){clearInterval(ci);pf.style.width="100%";pl.textContent="Done!";fetchAndShow(cn);}';
    html += '  },1000);';
    html += '}';

    html += 'document.getElementById("sb").addEventListener("click",function(){';
    html += '  var cn=document.getElementById("ni").value.trim();';
    html += '  if(!cn){document.getElementById("ni").style.borderColor="#dc2626";return;}';
    html += '  document.getElementById("nd").textContent=cn;';
    html += '  document.getElementById("sn").classList.remove("on");';
    html += '  document.getElementById("sc").classList.add("on");';
    html += '  startVapi(cn);';
    html += '});';

    html += 'document.getElementById("ni").addEventListener("keydown",function(e){if(e.key==="Enter")document.getElementById("sb").click();});';
    html += 'document.getElementById("bk").addEventListener("click",function(){window.open("https://webridgeai.com","_blank");});';

    html += 'function startVapi(cn){';
    html += '  var g=document.createElement("script"),s=document.getElementsByTagName("script")[0];';
    html += '  g.src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";';
    html += '  g.async=true;s.parentNode.insertBefore(g,s);';
    html += '  g.onload=function(){';
    html += '    var v=window.vapiSDK.run({apiKey:APK,assistant:AST,config:{position:"bottom-right",idle:{color:"transparent",type:"pill",title:"",subtitle:""},active:{color:"transparent",type:"pill",title:"",subtitle:""}}});';
    html += '    v.on("call-start",function(){document.getElementById("st").textContent="Connected";document.getElementById("st").className="ok";sT();});';
    html += '    v.on("speech-start",function(){document.getElementById("av").style.background="linear-gradient(135deg,#059669,#34d399)";document.getElementById("wv").classList.add("sp");document.getElementById("st").textContent="John is speaking...";});';
    html += '    v.on("speech-end",function(){if(callEnded)return;document.getElementById("av").style.background="linear-gradient(135deg,#14b8a6,#0d9488)";document.getElementById("wv").classList.remove("sp");document.getElementById("st").className="ok";document.getElementById("st").textContent="Listening...";});';
    html += '    v.on("call-end",function(){endUI(cn);});';
    html += '    v.on("error",function(e){console.log("VAPI error",e);document.getElementById("st").textContent="Error connecting";});';
    html += '    v.start(null,{variableValues:{customer_name:cn}},SQD);';
    html += '    document.getElementById("eb").addEventListener("click",function(){v.stop();endUI(cn);});';
    html += '  };';
    html += '}';

    html += '<\/script></body></html>';

    popWin.document.write(html);
    popWin.document.close();
  }

  // Wire up "Live Demo" button
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
