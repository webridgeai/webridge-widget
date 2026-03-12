// WeBridge AI — VAPI Demo Widget
(function () {

  var apk  = "788f6358-a7b6-4a8e-904e-b3e3d4dce62a";
  var ast  = "eafc788d-c2fe-4b9e-ac12-ad72797726d9";
  var sqd  = "78eaf66f-72db-4f78-a222-58b6aaf1e849";
  var bid  = "69b28821b7ec241ddc60e586";
  var bkey = "$2a$10$aB8tvnx0wuM6EfxD.3Lm0OKcciC5VDS24yCQfSJhuIfid2Mr6tWcy";
  var popWin = null;

  function openVapi() {
    popWin = window.open(
      '', 'vapiCall',
      'width=400,height=620,left=' + Math.round((screen.width-400)/2) + ',top=' + Math.round((screen.height-620)/2)
    );

    // Build the entire page including the logic script as one string
    // so document.write gets everything in one shot
    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><style>';
    html += '*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}';
    html += 'body{background:#0a0f1a;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}';
    html += '#sn,#sc,#ss{display:none;width:360px}';
    html += '#sn.on{display:flex;align-items:center;justify-content:center}';
    html += '#sc.on,#ss.on{display:block}';
    html += '.card{background:#111827;border:1px solid #1f2937;border-radius:20px;padding:32px 28px;text-align:center;width:100%;animation:fadeUp 0.35s ease}';
    html += '@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
    html += '.s1-icon{font-size:44px;margin-bottom:14px}';
    html += '.s1-title{color:#fff;font-size:20px;font-weight:700;margin-bottom:6px}';
    html += '.s1-sub{color:#6b7280;font-size:13px;margin-bottom:22px;line-height:1.5}';
    html += 'input#ni{width:100%;padding:12px 16px;background:#1f2937;border:1.5px solid #374151;border-radius:12px;color:#fff;font-size:15px;margin-bottom:12px;outline:none;transition:border-color 0.2s}';
    html += 'input#ni:focus{border-color:#3b82f6}input#ni::placeholder{color:#4b5563}';
    html += '#sb{width:100%;padding:13px 0;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#fff;border:none;border-radius:50px;font-size:15px;font-weight:600;cursor:pointer}';
    html += '.s1-note{color:#374151;font-size:11px;margin-top:14px}';
    html += '#av{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#1d4ed8,#7c3aed);margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-size:28px;transition:background 0.4s}';
    html += '#nd{color:#fff;font-size:18px;font-weight:700;margin-bottom:6px}';
    html += '#st{color:#6b7280;font-size:13px;margin-bottom:4px;min-height:18px}#st.ok{color:#22c55e}';
    html += '#tm{color:#374151;font-size:12px;margin-bottom:18px;min-height:16px}';
    html += '#wv{display:flex;align-items:center;justify-content:center;gap:4px;height:28px;margin-bottom:18px}';
    html += '#wv span{display:block;width:4px;border-radius:3px;background:#1d4ed8;animation:wv 1.2s ease-in-out infinite}';
    html += '#wv span:nth-child(2){animation-delay:.1s}#wv span:nth-child(3){animation-delay:.2s}#wv span:nth-child(4){animation-delay:.3s}#wv span:nth-child(5){animation-delay:.2s}#wv span:nth-child(6){animation-delay:.1s}';
    html += '#wv.sp span{background:#22c55e}@keyframes wv{0%,100%{height:4px}50%{height:24px}}';
    html += '#eb{width:100%;padding:12px 0;background:#991b1b;color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer}';
    html += '.ss-title{color:#fff;font-size:17px;font-weight:700;margin-bottom:4px}';
    html += '.ss-sub{color:#6b7280;font-size:12px;margin-bottom:14px}';
    html += '.hs-card{background:#fff;border-radius:12px;overflow:hidden;margin-bottom:14px;box-shadow:0 4px 24px rgba(0,0,0,0.35)}';
    html += '.hs-header{background:#ff7a59;padding:10px 14px;display:flex;align-items:center;gap:8px}';
    html += '.hs-logo{width:22px;height:22px;flex-shrink:0}';
    html += '.hs-header-title{color:#fff;font-size:13px;font-weight:700}';
    html += '.hs-sync{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:11px;color:rgba(255,255,255,0.9)}';
    html += '.hs-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.5)}';
    html += '.hs-dot.syncing{animation:pulse 0.8s ease-in-out infinite}.hs-dot.saved{background:#4ade80;animation:none}';
    html += '@keyframes pulse{0%,100%{opacity:0.3}50%{opacity:1}}';
    html += '.hs-body{padding:10px 14px 8px}';
    html += '.hs-section{font-size:9px;font-weight:800;color:#ff7a59;letter-spacing:1.2px;text-transform:uppercase;margin:8px 0 4px}';
    html += '.hs-row{display:flex;justify-content:space-between;align-items:baseline;padding:5px 0;border-bottom:1px solid #f3f4f6}';
    html += '.hs-row:last-child{border-bottom:none}';
    html += '.hs-label{font-size:10px;color:#9ca3af;font-weight:500;flex-shrink:0;width:72px}';
    html += '.hs-value{font-size:11px;color:#111827;font-weight:600;text-align:right;flex:1;min-height:14px}';
    html += '.hs-value.hot{color:#16a34a}.hs-value.warm{color:#d97706}.hs-value.cold{color:#9ca3af}';
    html += '.hs-saved{display:none;align-items:center;justify-content:center;gap:6px;padding:8px 14px;background:#f0fdf4;font-size:11px;font-weight:700;color:#16a34a;border-top:1px solid #dcfce7}';
    html += '#bk{width:100%;padding:13px 0;background:#ff7a59;color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:10px}';
    html += '.ss-note{color:#374151;font-size:11px}';
    html += '</style></head><body>';

    // Screen 1: Name input
    html += '<div id="sn" class="on"><div class="card">';
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
    html += '    gi("s-intent").textContent=a.intent||"--";';
    html += '    gi("s-budget").textContent=a.budget||"Not mentioned";';
    html += '    gi("s-timeline").textContent=a.timeline||"Not mentioned";';
    html += '    gi("s-loc").textContent=a.location||"Not mentioned";';
    html += '    gi("s-notes").textContent=a.notes||"--";';
    html += '    var te=gi("s-temp");';
    html += '    te.className="hs-value "+(temp==="hot"?"hot":temp==="cold"?"cold":"warm");';
    html += '    te.textContent=temp==="hot"?"Hot":temp==="cold"?"Cold":"Warm";';
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
    html += '  document.getElementById("av").textContent="⏳";';
    html += '  document.getElementById("st").className="";';
    html += '  document.getElementById("st").textContent="Getting your report, please wait...";';
    html += '  var c=10;';
    html += '  document.getElementById("tm").textContent="Ready in ~"+c+"s";';
    html += '  var ci=setInterval(function(){';
    html += '    c--;';
    html += '    if(c>0){document.getElementById("tm").textContent="Ready in ~"+c+"s";}';
    html += '    else{clearInterval(ci);fetchAndShow(cn);}';
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
    html += '    v.on("speech-start",function(){document.getElementById("av").style.background="linear-gradient(135deg,#15803d,#22c55e)";document.getElementById("wv").classList.add("sp");document.getElementById("st").textContent="John is speaking...";});';
    html += '    v.on("speech-end",function(){if(callEnded)return;document.getElementById("av").style.background="linear-gradient(135deg,#1d4ed8,#7c3aed)";document.getElementById("wv").classList.remove("sp");document.getElementById("st").className="ok";document.getElementById("st").textContent="Listening...";});';
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
