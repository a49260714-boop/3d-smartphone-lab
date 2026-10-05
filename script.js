/* =========================================================
   3D SMARTPHONE LAB
   Main JavaScript
========================================================= */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const clamp = (v,min,max) =>
  Math.max(min,Math.min(max,v));


/* =========================================================
   PHONE DATA
========================================================= */

const phones = [

  {
    brand:"Apple",
    model:"iPhone 15 Pro",
    color:"#777d85",
    display:"Super Retina XDR",
    screenSize:"6.1-inch",
    refreshRate:"120Hz",
    processor:"A17 Pro",
    ram:"8 GB",
    storage:"256 GB",
    battery:"3274 mAh",
    camera:"48MP + 12MP + 12MP",
    os:"iOS"
  },

  {
    brand:"Apple",
    model:"iPhone 15",
    color:"#a7b6c7",
    display:"Super Retina XDR",
    screenSize:"6.1-inch",
    refreshRate:"60Hz",
    processor:"A16 Bionic",
    ram:"6 GB",
    storage:"128 GB",
    battery:"3349 mAh",
    camera:"48MP + 12MP",
    os:"iOS"
  },

  {
    brand:"Samsung",
    model:"Galaxy S24 Ultra",
    color:"#777b82",
    display:"Dynamic AMOLED 2X",
    screenSize:"6.8-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"5000 mAh",
    camera:"200MP + 50MP + 12MP + 10MP",
    os:"Android"
  },

  {
    brand:"Samsung",
    model:"Galaxy S24",
    color:"#aab1bb",
    display:"Dynamic AMOLED 2X",
    screenSize:"6.2-inch",
    refreshRate:"120Hz",
    processor:"Exynos 2400",
    ram:"8 GB",
    storage:"256 GB",
    battery:"4000 mAh",
    camera:"50MP + 12MP + 10MP",
    os:"Android"
  },

  {
    brand:"Google",
    model:"Pixel 9 Pro",
    color:"#8b949e",
    display:"Super Actua",
    screenSize:"6.3-inch",
    refreshRate:"120Hz",
    processor:"Tensor G4",
    ram:"16 GB",
    storage:"256 GB",
    battery:"4700 mAh",
    camera:"50MP + 48MP + 48MP",
    os:"Android"
  },

  {
    brand:"Google",
    model:"Pixel 8",
    color:"#a8c0d0",
    display:"OLED",
    screenSize:"6.2-inch",
    refreshRate:"120Hz",
    processor:"Tensor G3",
    ram:"8 GB",
    storage:"128 GB",
    battery:"4575 mAh",
    camera:"50MP + 12MP",
    os:"Android"
  },

  {
    brand:"OnePlus",
    model:"OnePlus 12",
    color:"#25282d",
    display:"LTPO AMOLED",
    screenSize:"6.82-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"5400 mAh",
    camera:"50MP + 64MP + 48MP",
    os:"Android"
  },

  {
    brand:"OnePlus",
    model:"OnePlus 11",
    color:"#202329",
    display:"LTPO AMOLED",
    screenSize:"6.7-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 2",
    ram:"8 GB",
    storage:"128 GB",
    battery:"5000 mAh",
    camera:"50MP + 48MP + 32MP",
    os:"Android"
  },

  {
    brand:"Xiaomi",
    model:"Xiaomi 14",
    color:"#9fa7ad",
    display:"LTPO AMOLED",
    screenSize:"6.36-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"4610 mAh",
    camera:"50MP + 50MP + 50MP",
    os:"Android"
  },

  {
    brand:"Xiaomi",
    model:"Redmi Note 13 Pro",
    color:"#656b72",
    display:"AMOLED",
    screenSize:"6.67-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 7s Gen 2",
    ram:"8 GB",
    storage:"256 GB",
    battery:"5100 mAh",
    camera:"200MP + 8MP + 2MP",
    os:"Android"
  },

  {
    brand:"Vivo",
    model:"Vivo X100",
    color:"#51778e",
    display:"AMOLED",
    screenSize:"6.78-inch",
    refreshRate:"120Hz",
    processor:"Dimensity 9300",
    ram:"12 GB",
    storage:"256 GB",
    battery:"5000 mAh",
    camera:"50MP + 64MP + 50MP",
    os:"Android"
  },

  {
    brand:"Vivo",
    model:"Vivo V30",
    color:"#7290a3",
    display:"AMOLED",
    screenSize:"6.78-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 7 Gen 3",
    ram:"8 GB",
    storage:"128 GB",
    battery:"5000 mAh",
    camera:"50MP + 50MP",
    os:"Android"
  },

  {
    brand:"OPPO",
    model:"Find X7 Ultra",
    color:"#aeb6bd",
    display:"AMOLED",
    screenSize:"6.82-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"16 GB",
    storage:"512 GB",
    battery:"5000 mAh",
    camera:"50MP + 50MP + 50MP + 50MP",
    os:"Android"
  },

  {
    brand:"OPPO",
    model:"Reno 11",
    color:"#c2c5c9",
    display:"AMOLED",
    screenSize:"6.7-inch",
    refreshRate:"120Hz",
    processor:"Dimensity 7050",
    ram:"8 GB",
    storage:"128 GB",
    battery:"5000 mAh",
    camera:"50MP + 32MP + 8MP",
    os:"Android"
  },

  {
    brand:"Realme",
    model:"GT 6",
    color:"#cba842",
    display:"LTPO AMOLED",
    screenSize:"6.78-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8s Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"5500 mAh",
    camera:"50MP + 8MP",
    os:"Android"
  },

  {
    brand:"Realme",
    model:"12 Pro+",
    color:"#b18b31",
    display:"OLED",
    screenSize:"6.7-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 7s Gen 2",
    ram:"8 GB",
    storage:"256 GB",
    battery:"5000 mAh",
    camera:"50MP + 64MP + 8MP",
    os:"Android"
  },

  {
    brand:"Motorola",
    model:"Edge 50 Pro",
    color:"#343940",
    display:"pOLED",
    screenSize:"6.7-inch",
    refreshRate:"144Hz",
    processor:"Snapdragon 7 Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"4500 mAh",
    camera:"50MP + 13MP + 10MP",
    os:"Android"
  },

  {
    brand:"Sony",
    model:"Xperia 1 VI",
    color:"#20252b",
    display:"OLED",
    screenSize:"6.5-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"12 GB",
    storage:"256 GB",
    battery:"5000 mAh",
    camera:"48MP + 12MP + 12MP",
    os:"Android"
  },

  {
    brand:"ASUS",
    model:"ROG Phone 8",
    color:"#171b20",
    display:"AMOLED",
    screenSize:"6.78-inch",
    refreshRate:"165Hz",
    processor:"Snapdragon 8 Gen 3",
    ram:"16 GB",
    storage:"512 GB",
    battery:"5500 mAh",
    camera:"50MP + 32MP + 13MP",
    os:"Android"
  },

  {
    brand:"Nothing",
    model:"Phone 2",
    color:"#d0d0d0",
    display:"OLED",
    screenSize:"6.7-inch",
    refreshRate:"120Hz",
    processor:"Snapdragon 8+ Gen 1",
    ram:"8 GB",
    storage:"128 GB",
    battery:"4700 mAh",
    camera:"50MP + 50MP",
    os:"Android"
  }

];


const BRANDS = [...new Set(phones.map(p=>p.brand))];

const THEME = {
  Apple:"t-apple",
  Samsung:"t-samsung",
  Xiaomi:"t-xiaomi",
  Google:"t-pixel",
  OnePlus:"t-pixel",
  Vivo:"t-samsung",
  OPPO:"t-pixel",
  Realme:"t-xiaomi",
  Motorola:"t-pixel",
  Sony:"t-samsung",
  ASUS:"t-samsung",
  Nothing:"t-pixel"
};


/* =========================================================
   MAIN REFERENCES
========================================================= */

const stage = $("#stage");
const ph = $("#ph");

let rot = {
  x:-8,
  y:-22
};

let tgt = {
  x:-8,
  y:-22
};

let zoom = 1;
let tz = 1;

let testOn = false;


/* =========================================================
   3D PHONE LOOP
========================================================= */

function resetView(){
  tgt = {
    x:-8,
    y:-22
  };

  tz = 1;
}


let frames = 0;
let last = performance.now();
let fps = 0;


function loop(t){

  rot.x += (tgt.x-rot.x)*.12;
  rot.y += (tgt.y-rot.y)*.12;

  zoom += (tz-zoom)*.12;

  ph.style.transform =
    `scale(${zoom}) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`;

  frames++;

  if(t-last>=1000){
    fps=frames;
    frames=0;
    last=t;
  }

  if(testOn){
    updTest();
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


/* =========================================================
   DRAG / ROTATE
========================================================= */

const ptrs = new Map();
let pd = 0;

stage.addEventListener(
  "pointerdown",
  e=>{

    if(
      e.target.closest(
        "#scr,#ctrl,#cmp,#powerBtn,#backFlash"
      )
    ){
      return;
    }

    stage.setPointerCapture(e.pointerId);

    ptrs.set(e.pointerId,e);

    if(ptrs.size===2){

      const [a,b] = [...ptrs.values()];

      pd = Math.hypot(
        a.clientX-b.clientX,
        a.clientY-b.clientY
      );
    }

  }
);


stage.addEventListener(
  "pointermove",
  e=>{

    const p = ptrs.get(e.pointerId);

    if(!p) return;

    if(ptrs.size===2){

      ptrs.set(e.pointerId,e);

      const [a,b] = [...ptrs.values()];

      const d = Math.hypot(
        a.clientX-b.clientX,
        a.clientY-b.clientY
      );

      tz = clamp(
        tz*d/pd,
        .5,
        2.2
      );

      pd=d;

      return;
    }

    tgt.y +=
      (e.clientX-p.clientX)*.6;

    tgt.x =
      clamp(
        tgt.x-
        (e.clientY-p.clientY)*.5,
        -80,
        80
      );

    ptrs.set(e.pointerId,e);

  }
);


["pointerup","pointercancel"].forEach(
  n=>
    stage.addEventListener(
      n,
      e=>ptrs.delete(e.pointerId)
    )
);


stage.addEventListener(
  "wheel",
  e=>{
    e.preventDefault();

    tz =
      clamp(
        tz*(e.deltaY<0?1.08:.92),
        .5,
        2.2
      );
  },
  {passive:false}
);


stage.addEventListener(
  "dblclick",
  e=>{
    if(
      !e.target.closest("#scr,#cmp")
    ){
      resetView();
    }
  }
);


/* =========================================================
   CONTROLS
========================================================= */

function ctrl(c){

  if(c==="L")
    tgt.y-=45;

  if(c==="R")
    tgt.y+=45;

  if(c==="U")
    tgt.x =
      clamp(
        tgt.x+15,
        -80,
        80
      );

  if(c==="D")
    tgt.x =
      clamp(
        tgt.x-15,
        -80,
        80
      );

  if(c==="+")
    tz =
      clamp(
        tz*1.15,
        .5,
        2.2
      );

  if(c==="-")
    tz =
      clamp(
        tz/1.15,
        .5,
        2.2
      );

  if(c==="0")
    resetView();
}


$$("#ctrl button").forEach(
  b=>{
    b.onclick =
      ()=>ctrl(b.dataset.c);
  }
);


addEventListener(
  "keydown",
  e=>{

    if(
      /INPUT|TEXTAREA/.test(
        e.target.tagName
      )
    ){
      return;
    }

    const m = {
      ArrowLeft:"L",
      ArrowRight:"R",
      ArrowUp:"U",
      ArrowDown:"D",
      "+":"+",
      "=":"+",
      "-":"-",
      r:"0",
      R:"0"
    }[e.key];

    if(m){
      e.preventDefault();
      ctrl(m);
    }

    if(e.key==="Escape"){

      document.body.classList.remove(
        "focus"
      );

      $("#cmp").classList.add("hide");

      $("#bCmp").classList.remove("on");

      cmpMode=false;
    }

  }
);


/* =========================================================
   PHYSICAL POWER + FLASHLIGHT
========================================================= */

let powerOn = true;
let flashlightOn = false;


function setPowerState(on){

  powerOn = !!on;

  ph.classList.toggle(
    "is-off",
    !powerOn
  );

  const b = $("#powerBtn");

  if(b){

    b.classList.toggle(
      "active",
      powerOn
    );

    b.textContent =
      powerOn ? "⏻" : "○";

    b.title =
      powerOn
        ? "Power Off"
        : "Power On";
  }

  $("#scr").setAttribute(
    "aria-hidden",
    powerOn ? "false" : "true"
  );
}


function setFlashlight(on){

  flashlightOn = !!on;

  ph.classList.toggle(
    "flashlight-on",
    flashlightOn
  );

  const b = $("#backFlash");

  if(b){

    b.classList.toggle(
      "active",
      flashlightOn
    );

    b.textContent =
      flashlightOn
        ? "💡"
        : "⚡";

    b.title =
      flashlightOn
        ? "Turn flashlight off"
        : "Turn flashlight on";
  }
}


function bindPhysicalControls(){

  const p = $("#powerBtn");
  const f = $("#backFlash");

  if(p && !p.dataset.bound){

    p.dataset.bound="1";

    p.addEventListener(
      "pointerdown",
      e=>e.stopPropagation()
    );

    p.addEventListener(
      "click",
      e=>{
        e.stopPropagation();

        setPowerState(
          !powerOn
        );
      }
    );
  }


  if(f && !f.dataset.bound){

    f.dataset.bound="1";

    f.addEventListener(
      "pointerdown",
      e=>e.stopPropagation()
    );

    f.addEventListener(
      "click",
      e=>{
        e.stopPropagation();

        setFlashlight(
          !flashlightOn
        );
      }
    );
  }
}


bindPhysicalControls();


/* =========================================================
   SCREEN OS
========================================================= */

const scr = $("#scr");


const APPS = [

  ["Phone","📞","#22c55e"],
  ["Messages","💬","#3b82f6"],
  ["Camera","📷","#6b7280"],
  ["Gallery","🖼️","#ec4899"],
  ["Settings","⚙️","#64748b"],
  ["Calculator","🧮","#f59e0b"],
  ["Clock","⏰","#111827"],
  ["Calendar","📅","#ef4444"],
  ["Browser","🌐","#0ea5e9"],
  ["Files","📁","#eab308"],
  ["Music","🎵","#a855f7"],
  ["Maps","🗺️","#10b981"]

];


let hist = [];
let curApp = "Home";
let curScreen = "Home";
let lastTap = "";
let recents = [];


let state = {

  wifi:true,
  bt:true,
  air:false,
  dark:true,
  bright:100,
  vol:60,
  hz:"120Hz",
  photos:0,

  msgs:[
    ["Alex","See you at 6?"],
    ["Mom","Call me when free"]
  ],

  notes:[
    "System update available",
    "New message",
    "Battery fully charged"
  ]

};


function shell(){

  scr.innerHTML = `

    <div class="wall"></div>

    <div class="sb">

      <span id="tm1"></span>

      <span>
        ${state.air?"✈️":"📶"}
        ${state.wifi&&!state.air?"Wi-Fi":""}
        🔋82%
      </span>

    </div>

    <div id="vw"></div>

    <div class="pnl" id="qsP">

      <div class="qs">

        ${
          [
            ["wifi","Wi-Fi"],
            ["bt","Bluetooth"],
            ["air","Airplane"],
            ["dark","Dark Mode"]
          ]
          .map(
            ([k,l])=>
              `<button
                data-q="${k}"
                class="${state[k]?"on":""}"
              >${l}</button>`
          )
          .join("")
        }

      </div>

      Brightness

      <input
        type="range"
        id="qb"
        min="30"
        max="100"
        value="${state.bright}"
        style="width:100%"
      >

      Volume

      <input
        type="range"
        id="qv"
        min="0"
        max="100"
        value="${state.vol}"
        style="width:100%"
      >

    </div>

    <div class="pnl" id="ntP"></div>

    <div class="nav">

      <span data-n="back">◀</span>
      <span data-n="home">●</span>
      <span data-n="rec">■</span>

    </div>
  `;


  $("#qb").oninput =
    e=>{
      state.bright=e.target.value;
      applyBright();
    };


  $("#qv").oninput =
    e=>{
      state.vol=e.target.value;
    };


  $$("[data-q]").forEach(
    b=>{
      b.onclick=()=>{

        state[b.dataset.q] =
          !state[b.dataset.q];

        if(
          b.dataset.q==="dark"
        ){
          applyDark();
        }

        b.classList.toggle(
          "on"
        );

        $(".sb span:last-child")
          .innerHTML =
          `${state.air?"✈️":"📶"}
           ${state.wifi&&!state.air?"Wi-Fi":""}
           🔋82%`;
      };
    }
  );


  $$("[data-n]").forEach(
    b=>{
      b.onclick =
        ()=>nav(b.dataset.n);
    }
  );


  $(".sb").onclick =
    e=>
      togglePanel(
        e.offsetY<14 &&
        e.offsetX>100
          ? "ntP"
          : "qsP"
      );


  applyBright();
  applyDark();

}


const applyBright = ()=>
  scr.style.filter =
    `brightness(${state.bright}%)`;


const applyDark = ()=>
  scr.classList.toggle(
    "light",
    !state.dark
  );


function togglePanel(id){

  const p = $("#"+id);

  const open =
    !p.classList.contains("show");

  $$(".pnl").forEach(
    x=>
      x.classList.remove("show")
  );


  if(id==="ntP"){

    p.innerHTML =
      state.notes.map(
        (n,i)=>
          `<div class="note">
            ${n}
            <i data-d="${i}">✕</i>
          </div>`
      ).join("")
      ||
      "No notifications";
  }


  if(open)
    p.classList.add("show");


  $$("[data-d]").forEach(
    b=>{
      b.onclick=()=>{

        state.notes.splice(
          +b.dataset.d,
          1
        );

        togglePanel("ntP");
        togglePanel("ntP");
      };
    }
  );

}


function setView(
  html,
  app,
  screen
){

  curApp=app;
  curScreen=
    screen||app;

  const v=$("#vw");

  v.className="view";

  v.innerHTML=html;

  v.style.animation="none";

  void v.offsetWidth;

  v.style.animation="";

  $$(".pnl").forEach(
    x=>
      x.classList.remove("show")
  );
}


/* =========================================================
   HOME
========================================================= */

function goHome(init){

  if(init){

    shell();

    hist=[];
  }


  const t =
    new Date();


  setView(

    `<div class="home">

      <div class="clock">
        ${t.toLocaleTimeString(
          [],
          {
            hour:"2-digit",
            minute:"2-digit"
          }
        )}
      </div>

      <div class="date">
        ${t.toDateString()}
      </div>

      <div class="icons">

        ${
          APPS
          .slice(0,8)
          .map(iconHTML)
          .join("")
        }

      </div>

    </div>

    <div class="dock">

      ${
        [
          APPS[0],
          APPS[1],
          APPS[8],
          APPS[2]
        ]
        .map(iconHTML)
        .join("")
      }

    </div>`,

    "Home",
    "Home Screen"
  );


  $$(".ic").forEach(
    i=>{
      i.onclick =
        ()=>openApp(
          i.dataset.a
        );
    }
  );


  $(".icons").insertAdjacentHTML(
    "beforeend",
    APPS
      .slice(8)
      .map(iconHTML)
      .join("")
  );


  $$(".icons .ic").forEach(
    i=>{
      i.onclick =
        ()=>openApp(
          i.dataset.a
        );
    }
  );

}


const iconHTML =
  ([n,e,c])=>
    `<div
      class="ic"
      data-a="${n}"
    >
      <b style="--c:${c}">
        ${e}
      </b>
      ${n}
    </div>`;


/* =========================================================
   NAVIGATION
========================================================= */

function nav(a){

  const rc = $(".rc");

  /* HOME BUTTON */
  if(a==="home"){

    if(rc) rc.remove();

    hist = [];
    goHome();
    return;
  }

  /* BACK BUTTON */
  if(a==="back"){

    /* 1) close recents screen */
    if(rc){
      rc.remove();
      return;
    }

    /* 2) close quick settings / notifications */
    const openPanels = $$(".pnl.show");

    if(openPanels.length){
      openPanels.forEach(
        x=>x.classList.remove("show")
      );
      return;
    }

    /* 3) already on home screen */
    if(curApp==="Home") return;

    /* 4) go to previous app, or home screen */
    const p = hist.pop();

    if(p && p!=="Home"){
      openApp(p,true);
    }
    else{
      goHome();
    }

    return;
  }

  /* RECENTS BUTTON (toggle) */
  if(rc){
    rc.remove();
    return;
  }

  recentsView();
}


function openApp(
  n,
  noPush
){

  if(
    !noPush &&
    curApp!=="Home"
  ){

    hist.push(curApp);

  }

  else if(!noPush){

    hist=["Home"];

  }


  recents =
    [
      n,
      ...recents.filter(
        x=>x!==n
      )
    ].slice(0,6);


  const R = {

    Phone:phoneApp,
    Messages:msgApp,
    Camera:camApp,
    Gallery:galApp,

    Settings:
      ()=>setPage(),

    Calculator:calcApp,
    Clock:clockApp,
    Calendar:calApp,

    Browser:
      ()=>browse("home"),

    Files:filesApp,
    Music:musicApp,
    Maps:mapsApp

  };


  if(R[n])
    R[n]();

  curApp=n;

}


/* =========================================================
   RECENTS
========================================================= */

function recentsView(){

  $$(".rc").forEach(
    x=>x.remove()
  );


  const r =
    document.createElement(
      "div"
    );

  r.className="rc";


  r.innerHTML =
    recents.length

      ?

      recents.map(
        n=>
          `<div data-r="${n}">
            <b>${n}</b>
            <br>
            <small>
              Tap to open
            </small>
            <i
              style="
                position:absolute;
                top:8px;
                right:12px
              "
              data-x="${n}"
            >
              ✕
            </i>
          </div>`
      ).join("")

      :

      "No recent apps";


  scr.appendChild(r);


  $$("[data-r]").forEach(
    c=>{

      c.onclick=e=>{

        if(
          e.target.dataset.x
        ){

          recents =
            recents.filter(
              x=>
                x!==e.target.dataset.x
            );

          c.remove();

          return;
        }

        r.remove();

        openApp(
          c.dataset.r,
          true
        );

      };

    }
  );


  r.onclick =
    e=>{
      if(e.target===r)
        r.remove();
    };

}


const pad =
  h =>
    `<div class="pad">${h}</div>`;


/* =========================================================
   PHONE APP
========================================================= */

function phoneApp(){

  let n="";


  setView(

    pad(

      `<div
        class="disp"
        id="dn"
      >
        &nbsp;
      </div>

      <div class="calc">

        ${
          [
            1,2,3,
            4,5,6,
            7,8,9,
            "*",0,"#"
          ]
          .map(
            k=>
              `<button
                data-k="${k}"
              >
                ${k}
              </button>`
          )
          .join("")
        }

      </div>

      <br>

      <button
        class="btn"
        id="call"
        style="width:100%"
      >
        📞 Call
      </button>`
    ),

    "Phone"
  );


  $$("[data-k]").forEach(
    b=>{
      b.onclick=()=>{

        n +=
          b.dataset.k;

        $("#dn").textContent=n;

      };
    }
  );


  $("#call").onclick=()=>{

    $("#dn").textContent =
      n
        ? "Calling "+n+"…"
        : "Enter a number";

  };

}


/* =========================================================
   MESSAGES
========================================================= */

function msgApp(){

  const draw=()=>{

    $("#ml").innerHTML =
      state.msgs.map(
        m=>
          `<div class="row">
            <span>
              <b>${m[0]}</b>
              <br>
              <small>${m[1]}</small>
            </span>
          </div>`
      ).join("");

  };


  setView(

    pad(

      `<h4>Messages</h4>

      <div id="ml"></div>

      <input
        id="mi"
        placeholder="Type a message"
        style="
          width:70%;
          padding:8px
        "
      >

      <button
        class="btn"
        id="ms"
      >
        Send
      </button>`
    ),

    "Messages"
  );


  draw();


  $("#ms").onclick=()=>{

    const v =
      $("#mi").value.trim();

    if(v){

      state.msgs.unshift(
        ["You",v]
      );

      draw();

      $("#mi").value="";

    }

  };

}


/* =========================================================
   CAMERA
========================================================= */

function camApp(){

  let fl=false;
  let z=1;
  let front=false;


  setView(

    `<div class="cam-v">

      <span
        id="cl"
        style="font-size:60px"
      >
        📷
      </span>

      <div
        style="
          position:absolute;
          top:8px;
          left:0;
          right:0;
          display:flex;
          justify-content:space-around
        "
      >

        <button
          class="btn"
          id="cf"
        >
          ⚡ Off
        </button>

        <button
          class="btn"
          id="cz"
        >
          1x
        </button>

        <button
          class="btn"
          id="cs"
        >
          🔄 Rear
        </button>

      </div>

      <div
        class="shut"
        id="sh"
      ></div>

      <small
        id="cc"
        style="
          position:absolute;
          bottom:22px;
          right:14px
        "
      >
        ${state.photos} photos
      </small>

    </div>`,

    "Camera"
  );


  $("#sh").onclick=()=>{

    state.photos++;

    $("#cc").textContent =
      state.photos+" photos";

    $(".cam-v")
      .insertAdjacentHTML(
        "beforeend",
        `<div
          style="
            position:absolute;
            inset:0;
            background:white;
            opacity:.85
          "
        ></div>`
      );

    setTimeout(
      ()=>{
        const x =
          $(".cam-v>div:last-child");

        if(x)
          x.remove();
      },
      120
    );

  };


  $("#cf").onclick=e=>{

    fl=!fl;

    e.target.textContent =
      fl
        ? "⚡ On"
        : "⚡ Off";

  };


  $("#cz").onclick=e=>{

    z =
      z===1
        ?2
        :z===2
          ?3
          :1;

    e.target.textContent =
      z+"x";

  };


  $("#cs").onclick=e=>{

    front=!front;

    e.target.textContent =
      front
        ? "🔄 Front"
        : "🔄 Rear";

    $("#cl").textContent =
      front
        ? "🤳"
        : "📷";

  };

}


/* =========================================================
   GALLERY
========================================================= */

function galApp(){

  setView(

    pad(

      `<h4>Gallery</h4>

      <div
        style="
          display:grid;
          grid-template-columns:
            repeat(3,1fr);
          gap:6px
        "
      >

        ${
          Array.from(
            {
              length:
                Math.max(
                  6,
                  state.photos
                )
            },
            (_,i)=>
              `<div
                style="
                  aspect-ratio:1;
                  display:grid;
                  place-items:center;
                  background:
                    linear-gradient(
                      135deg,
                      #334155,
                      #0f172a
                    );
                  border-radius:8px
                "
              >
                📷
              </div>`
          ).join("")
        }

      </div>`
    ),

    "Gallery"
  );

}


/* =========================================================
   CALCULATOR
========================================================= */

function calcApp(){

  let value="";


  setView(

    pad(

      `<div
        class="disp"
        id="calcDisplay"
      >
        0
      </div>

      <div
        class="calc"
        style="
          grid-template-columns:
            repeat(4,1fr)
        "
      >

        ${
          [
            "C",
            "7","8","9","/",
            "4","5","6","*",
            "1","2","3","-",
            "0",".","=","+"
          ]
          .map(
            k=>
              `<button
                data-calc="${k}"
              >
                ${k}
              </button>`
          ).join("")
        }

      </div>`
    ),

    "Calculator"
  );


  $$("[data-calc]").forEach(
    b=>{

      b.onclick=()=>{

        const k =
          b.dataset.calc;


        if(k==="C"){

          value="";

        }

        else if(k==="="){

          try{

            value =
              String(
                Function(
                  "return "+value
                )()
              );

          }
          catch{

            value="Error";

          }

        }

        else{

          value += k;

        }


        $("#calcDisplay")
          .textContent =
            value || "0";

      };

    }
  );

}


/* =========================================================
   CLOCK
========================================================= */

function clockApp(){

  setView(

    pad(

      `<h4>Clock</h4>

      <div
        style="
          text-align:center;
          padding:30px 5px
        "
      >

        <div
          id="bigClock"
          style="
            font-size:40px
          "
        >
          --
        </div>

        <p>
          Digital Clock
        </p>

      </div>`
    ),

    "Clock"
  );


  const update=()=>{

    const x =
      $("#bigClock");

    if(x){

      x.textContent =
        new Date()
          .toLocaleTimeString();

    }

  };


  update();

  setInterval(
    update,
    1000
  );

}


/* =========================================================
   CALENDAR
========================================================= */

function calApp(){

  const d =
    new Date();

  const month =
    d.toLocaleString(
      [],
      {
        month:"long"
      }
    );

  const year =
    d.getFullYear();


  setView(

    pad(

      `<h4>
        ${month} ${year}
      </h4>

      <div
        style="
          text-align:center;
          padding:30px
        "
      >

        📅

        <h3>
          ${d.getDate()}
        </h3>

        <p>
          Today
        </p>

      </div>`
    ),

    "Calendar"
  );

}


/* =========================================================
   SETTINGS
========================================================= */

function setPage(){

  setView(

    pad(

      `<h4>Settings</h4>

      <div
        class="row"
        id="wifiRow"
      >
        Wi-Fi
        <span>
          ${state.wifi?"On":"Off"}
        </span>
      </div>

      <div
        class="row"
        id="btRow"
      >
        Bluetooth
        <span>
          ${state.bt?"On":"Off"}
        </span>
      </div>

      <div
        class="row"
        id="darkRow"
      >
        Dark Mode
        <span>
          ${state.dark?"On":"Off"}
        </span>
      </div>

      <div
        class="row"
        id="powerRow"
      >
        Phone Power
        <span>
          ${powerOn?"On":"Off"}
        </span>
      </div>

      <button
        class="btn"
        id="settingsPower"
        style="width:100%"
      >
        ${powerOn
          ?"Turn Phone Off"
          :"Turn Phone On"}
      </button>`
    ),

    "Settings"
  );


  $("#wifiRow").onclick=()=>{

    state.wifi=!state.wifi;

    setPage();

  };


  $("#btRow").onclick=()=>{

    state.bt=!state.bt;

    setPage();

  };


  $("#darkRow").onclick=()=>{

    state.dark=!state.dark;

    setPage();

  };


  $("#settingsPower").onclick=()=>{

    setPowerState(
      !powerOn
    );

    setPage();

  };

}


/* =========================================================
   BROWSER
========================================================= */

const PAGES = {

  home:[
    "Home",
    "Welcome to Smartphone Lab",
    ["news","about"]
  ],

  news:[
    "News",
    "Demo news page",
    ["home","technology"]
  ],

  about:[
    "About",
    "This is a simulated browser inside the phone.",
    ["home","news"]
  ],

  technology:[
    "Technology",
    "Technology demo page",
    ["home","news"]
  ]

};


function browse(p){

  const [
    t,
    b,
    l
  ] =
    PAGES[p] ||
    PAGES.home;


  setView(

    pad(

      `<input
        id="ad"
        value="lab://${p}"
        style="
          width:100%;
          padding:8px;
          border-radius:14px
        "
      >

      <h4
        style="
          margin-top:12px
        "
      >
        ${t}
      </h4>

      <p>
        ${b}
      </p>

      <br>

      ${
        l.map(
          x=>
            `<div
              class="row"
              data-p="${x}"
            >
              lab://${x}
            </div>`
        ).join("")
      }`
    ),

    "Browser",
    "lab://"+p
  );


  $$("[data-p]").forEach(
    r=>{

      r.onclick =
        ()=>browse(
          r.dataset.p
        );

    }
  );


  $("#ad").onkeydown=e=>{

    if(e.key==="Enter"){

      browse(
        $("#ad")
          .value
          .replace(
            "lab://",
            ""
          )
          .trim()
      );

    }

  };

}


/* =========================================================
   FILES
========================================================= */

function filesApp(){

  setView(

    pad(

      `<h4>Files</h4>

      ${
        [
          "Documents",
          "Downloads",
          "DCIM",
          "Music"
        ]
        .map(
          f=>
            `<div class="row">
              📁 ${f}
              <span>›</span>
            </div>`
        ).join("")
      }`
    ),

    "Files"
  );

}


/* =========================================================
   MUSIC
========================================================= */

function musicApp(){

  let on=false;
  let t=0;
  let iv;


  setView(

    pad(

      `<div
        style="
          height:150px;
          border-radius:20px;
          background:
            linear-gradient(
              135deg,
              #a855f7,
              #06b6d4
            )
        "
      ></div>

      <h4
        style="
          margin:12px 0
        "
      >
        Demo Track · Lab Beats
      </h4>

      <progress
        id="pg"
        value="0"
        max="100"
        style="width:100%"
      ></progress>

      <br><br>

      <button
        class="btn"
        id="pl"
      >
        ▶ Play
      </button>`
    ),

    "Music"
  );


  $("#pl").onclick =
    e=>{

      on=!on;

      e.target.textContent =
        on
          ? "⏸ Pause"
          : "▶ Play";

      clearInterval(iv);


      if(on){

        iv =
          setInterval(
            ()=>{

              t =
                (t+1)%100;

              const p =
                $("#pg");

              if(
                p &&
                curApp==="Music"
              ){

                p.value=t;

              }
              else{

                clearInterval(iv);

              }

            },
            200
          );

      }

    };

}


/* =========================================================
   MAPS
========================================================= */

function mapsApp(){

  setView(

    `<div
      style="
        height:100%;
        background:
          repeating-linear-gradient(
            0deg,
            #1e3a2f 0 28px,
            #244a3a 28px 30px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0 40px,
            #ffffff22 40px 42px
          );
        position:relative
      "
    >

      <div
        id="pin"
        style="
          position:absolute;
          left:50%;
          top:50%;
          font-size:30px
        "
      >
        📍
      </div>

      <div
        style="
          position:absolute;
          bottom:10px;
          left:10px;
          right:10px
        "
        class="note"
      >
        Tap map to move pin
      </div>

    </div>`,

    "Maps"
  );


  $("#vw>div").onclick=e=>{

    const r =
      e.currentTarget
       .getBoundingClientRect();

    const p =
      $("#pin");

    p.style.left =
      e.clientX-
      r.left-
      12+
      "px";

    p.style.top =
      e.clientY-
      r.top-
      28+
      "px";

  };

}


/* =========================================================
   TEST MODE
========================================================= */

function updTest(){

  const tm =
    $("#tm");

  if(!tm)
    return;


  tm.innerHTML = [

    ["FPS",fps],
    ["Power",powerOn?"ON":"OFF"],
    ["Flashlight",flashlightOn?"ON":"OFF"],
    ["Touch","Ready"],
    ["Zoom",zoom.toFixed(2)],
    ["Rotation",
      Math.round(rot.y)+"°"
    ]

  ]
  .map(
    ([k,v])=>
      `<div>
        <dt>${k}</dt>
        <dd>${v}</dd>
      </div>`
  )
  .join("");

}


/* =========================================================
   CAPTURE DEVICE
========================================================= */

$("#bCap").onclick=()=>{

  const c =
    document.createElement(
      "canvas"
    );

  c.width=720;
  c.height=900;

  const x =
    c.getContext("2d");


  const g =
    x.createLinearGradient(
      0,0,720,900
    );

  g.addColorStop(
    0,
    "#14213a"
  );

  g.addColorStop(
    1,
    "#07090f"
  );

  x.fillStyle=g;

  x.fillRect(
    0,0,720,900
  );


  x.fillStyle =
    cur.color;

  x.beginPath();

  x.roundRect(
    220,
    80,
    280,
    580,
    40
  );

  x.fill();


  const w =
    x.createLinearGradient(
      0,80,0,660
    );

  w.addColorStop(
    0,
    "#3b2f8f"
  );

  w.addColorStop(
    1,
    "#0f766e"
  );

  x.fillStyle=w;

  x.beginPath();

  x.roundRect(
    230,
    92,
    260,
    556,
    32
  );

  x.fill();


  x.fillStyle="#fff";

  x.textAlign="center";

  x.font="40px sans-serif";

  x.fillText(
    new Date().toLocaleTimeString(
      [],
      {
        hour:"2-digit",
        minute:"2-digit"
      }
    ),
    360,
    200
  );


  x.font="16px sans-serif";

  x.fillText(
    "Screen: "+curApp,
    360,
    240
  );


  x.font="bold 26px sans-serif";

  x.fillText(
    cur.brand+" "+cur.model,
    360,
    740
  );


  x.font="16px sans-serif";

  x.fillStyle="#9fb0cc";

  x.fillText(
    `${cur.screenSize} · ${cur.refreshRate} · ${cur.ram}/${cur.storage} · ${cur.battery}`,
    360,
    775
  );


  const a =
    document.createElement("a");

  a.download =
    "smartphone-lab-"+
    cur.model.replace(
      /\s+/g,
      "-"
    )+
    ".png";

  a.href =
    c.toDataURL();

  a.click();

};


/* =========================================================
   SELECTOR / INFO / COMPARE
========================================================= */

let cur =
  phones[2];

let brand =
  "Samsung";

let cmpMode =
  false;

let cmpList =
  [];


function drawBrands(){

  $("#brands").innerHTML =
    BRANDS.map(
      b=>
        `<button
          class="${b===brand?"on":""}"
          data-b="${b}"
        >
          ${b}
        </button>`
    ).join("");


  $$("#brands button").forEach(
    x=>{
      x.onclick=()=>{

        brand =
          x.dataset.b;

        $("#q").value="";

        drawBrands();
        drawModels();

      };
    }
  );

}


function drawModels(){

  const q =
    $("#q")
      .value
      .trim()
      .toLowerCase();


  const list =
    q

      ?

      phones.filter(
        p=>
          (
            p.brand+
            " "+
            p.model
          )
          .toLowerCase()
          .includes(q)
      )

      :

      phones.filter(
        p=>
          p.brand===brand
      );


  $("#models").innerHTML =

    list.map(
      p=>
        `<button
          class="${p===cur?"on":""}"
          data-i="${phones.indexOf(p)}"
        >
          ${
            cmpMode &&
            cmpList.includes(p)
              ? "✓ "
              : ""
          }

          ${p.model}

        </button>`
    ).join("")

    ||

    "<small>No match</small>";


  $$("#models button").forEach(
    x=>{
      x.onclick =
        ()=>pick(
          phones[
            +x.dataset.i
          ]
        );
    }
  );

}


$("#q").oninput =
  drawModels;


function pick(p){

  if(cmpMode){

    cmpList =
      cmpList.includes(p)

        ?

        cmpList.filter(
          x=>x!==p
        )

        :

        [
          ...cmpList,
          p
        ].slice(-3);


    drawModels();
    drawCmp();

    return;
  }


  cur=p;


  ph.animate(
    [
      {
        opacity:0,
        transform:
          "translateY(30px)"
      },

      {
        opacity:1
      }
    ],
    {
      duration:450,
      easing:"ease-out"
    }
  );


  drawModels();

  applyPhone();

}


/* =========================================================
   APPLY SELECTED PHONE
========================================================= */

function applyPhone(){

  ph.style.setProperty(
    "--body",
    cur.color
  );


  ph.className="";


  ph.classList.add(
    "phone-"+
    cur.brand
      .toLowerCase()
      .replace(
        /[^a-z0-9]+/g,
        "-"
      )
  );


  ph.dataset.brand =
    cur.brand;

  ph.dataset.model =
    cur.model;


  $("#selName").textContent =
    cur.brand+
    " "+
    cur.model;


  $("#bk").textContent =
    cur.brand.toUpperCase();


  $("#info").innerHTML = [

    ["Brand",cur.brand],
    ["Model",cur.model],

    [
      "Display",
      cur.display+
      " · "+
      cur.screenSize
    ],

    [
      "Refresh Rate",
      cur.refreshRate
    ],

    [
      "Processor",
      cur.processor
    ],

    ["RAM",cur.ram],

    [
      "Storage",
      cur.storage
    ],

    [
      "Battery",
      cur.battery
    ],

    [
      "Camera",
      cur.camera
    ],

    ["OS",cur.os]

  ]
  .map(
    ([k,v])=>
      `<div>
        <dt>${k}</dt>
        <dd>${v}</dd>
      </div>`
  )
  .join("");


  $("#scr").className =
    THEME[cur.brand] ||
    "t-pixel";


  powerOn=true;

  flashlightOn=false;


  setPowerState(true);

  setFlashlight(false);


  buildCam();

  goHome(true);

}


/* =========================================================
   COMPARE
========================================================= */

const CMP_FIELDS = [

  ["Display","display"],
  ["Refresh Rate","refreshRate"],
  ["Processor","processor"],
  ["RAM","ram"],
  ["Storage","storage"],
  ["Battery","battery"],
  ["Camera","camera"],
  ["OS","os"],
  ["Screen Size","screenSize"]

];


function drawCmp(){

  const box =
    $("#cmp");


  box.classList.toggle(
    "hide",
    !cmpMode
  );


  box.innerHTML =
    cmpList.length

      ?

      cmpList.map(
        p=>
          `<div class="card">

            <h4>
              ${p.brand}
              ${p.model}
            </h4>

            ${
              CMP_FIELDS
              .map(
                ([label,key])=>
                  `<p>
                    <span>
                      ${label}
                    </span>
                    <b>
                      ${p[key]}
                    </b>
                  </p>`
              )
              .join("")
            }

          </div>`
      ).join("")

      :

      `<div class="card">
        <h4>Compare Phones</h4>
        <p>
          Select phones from the
          model list.
        </p>
      </div>`;

}


/* =========================================================
   HEADER BUTTONS
========================================================= */

$("#bCmp").onclick=()=>{

  cmpMode =
    !cmpMode;

  $("#bCmp")
    .classList.toggle(
      "on",
      cmpMode
    );

  if(!cmpMode){

    cmpList=[];

  }

  drawBrands();
  drawModels();
  drawCmp();

};


$("#bTest").onclick=()=>{

  testOn =
    !testOn;

  $("#bTest")
    .classList.toggle(
      "on",
      testOn
    );

  $("#testBox")
    .classList.toggle(
      "hide",
      !testOn
    );

};


$("#bFocus").onclick=()=>{

  document.body.classList.toggle(
    "focus"
  );

};


$("#tglL").onclick=()=>{

  $("#left")
    .classList.toggle(
      "show"
    );

};


$("#tglR").onclick=()=>{

  $("#right")
    .classList.toggle(
      "show"
    );

};


/* =========================================================
   SCREEN TAP RIPPLE
========================================================= */

scr.addEventListener(
  "pointerdown",
  e=>{

    const r =
      scr.getBoundingClientRect();

    const sx =
      scr.offsetWidth/r.width;


    const x =
      (e.clientX-r.left)*sx;

    const y =
      (e.clientY-r.top)*sx;


    const d =
      document.createElement(
        "div"
      );

    d.className="rip";

    d.style.left =
      x+"px";

    d.style.top =
      y+"px";


    scr.appendChild(d);


    setTimeout(
      ()=>d.remove(),
      500
    );


    lastTap =
      `x ${x.toFixed(0)},
       y ${y.toFixed(0)}`;

  }
);


/* =========================================================
   CLOCK UPDATE
========================================================= */

setInterval(
  ()=>{
    const el =
      $("#tm1");

    if(el){

      el.textContent =
        new Date()
          .toLocaleTimeString(
            [],
            {
              hour:"2-digit",
              minute:"2-digit"
            }
          );

    }
  },
  1000
);



/* =========================================================
   EXTENSIONS: CAMERA DESIGNS, SNAKE, MORE APPS & SETTINGS
========================================================= */

const timers = new Set();
let appKey = null;
const tick = (f,ms)=>{ const id=setInterval(f,ms); timers.add(id); return id; };
const untick = id=>{ clearInterval(id); timers.delete(id); };

function setView(html,app,screen){
  timers.forEach(clearInterval); timers.clear(); appKey=null;
  curApp=app; curScreen=screen||app;
  const v=$("#vw");
  v.className="view"; v.innerHTML=html;
  v.style.animation="none"; void v.offsetWidth; v.style.animation="";
  $$(".pnl").forEach(x=>x.classList.remove("show"));
}

/* arrow keys go to the running game instead of rotating the phone */
addEventListener("keydown",e=>{
  if(appKey && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && appKey(e)){
    e.preventDefault(); e.stopImmediatePropagation();
  }
},true);

/* ---------- MODEL-WISE REAR CAMERA DESIGN ---------- */
const CS = {
  "iPhone 15 Pro":"tri","iPhone 15":"diag","Galaxy S24 Ultra":"vert","Galaxy S24":"vert",
  "Pixel 9 Pro":"pill","Pixel 8":"bar","OnePlus 12":"circ","OnePlus 11":"circ",
  "Xiaomi 14":"grid","Redmi Note 13 Pro":"box","Vivo X100":"ring","Vivo V30":"box",
  "Find X7 Ultra":"ring","Reno 11":"box","GT 6":"box","12 Pro+":"ring",
  "Edge 50 Pro":"box","Xperia 1 VI":"vert","ROG Phone 8":"pill","Phone 2":"nth"
};

function shade(hex,a){
  const n=parseInt(hex.slice(1),16);
  const f=v=>Math.max(0,Math.min(255,v+a));
  return `rgb(${f(n>>16)},${f((n>>8)&255)},${f(n&255)})`;
}

function buildCam(){
  const n=cur.camera.split("+").length, st=CS[cur.model]||"box", cam=$(".cam");
  const col=(x,y,g)=>[...Array(n)].map((_,i)=>[x,y+i*g]);
  const row=(x,y,g)=>[...Array(n)].map((_,i)=>[x+i*g,y]);
  let w,h,r,l=20,t=24,L=[],F=[50,10,10],S=34,bg="";

  if(st=="tri"){w=98;h=104;r=28;L=[[10,10],[10,58],[52,34]];F=[62,10,11];}
  else if(st=="diag"){w=88;h=88;r=26;L=[[9,9],[45,45]];F=[58,12,11];}
  else if(st=="vert"){w=64;h=n*48+14;r=0;bg="sep";L=col(14,8,48);F=[52,8,10];}
  else if(st=="box"){w=64;h=n*46+26;r=24;L=col(14,12,46);F=[52,10,10];}
  else if(st=="bar"){w=260;h=66;r=0;l=-2;t=92;L=row(88,16,42);F=[196,27,11];}
  else if(st=="pill"){w=n*42+40;h=60;r=30;l=Math.round((256-w)/2);t=28;L=row(14,13,42);F=[w-26,25,11];}
  else if(st=="grid"){w=112;h=112;r=30;S=40;L=[[10,10],[62,10],[10,62],[62,62]].slice(0,n);F=n<4?[72,72,14]:[0,0,0];}
  else if(st=="nth"){w=100;h=124;r=28;bg="glass";L=[[14,14],[14,66]];F=[66,20,10];}
  else{
    const D=st=="ring"?120:112; w=h=D; r=D/2; S=30;
    const R=D/2-S/2-12, pts=n+1;
    const P=i=>{const a=-Math.PI/2+i*2*Math.PI/pts;return [D/2+R*Math.cos(a),D/2+R*Math.sin(a)];};
    L=[...Array(n)].map((_,i)=>{const p=P(i);return [p[0]-S/2,p[1]-S/2];});
    const p=P(n); F=[p[0]-5,p[1]-5,10];
  }

  cam.style.cssText =
    `width:${w}px;height:${h}px;border-radius:${r}px;left:${l}px;top:${t}px;right:auto;transform:none;`+
    (bg=="sep"?"background:transparent;border:0;box-shadow:none;":"")+
    (bg=="glass"?"background:#ffffff14;border:2px solid #ffffff55;":"")+
    (st=="ring"?"border:4px solid #c3c8d0;":"");

  cam.innerHTML =
    L.map(([x,y])=>`<i style="left:${x}px;top:${y}px;right:auto;bottom:auto;width:${S}px;height:${S}px"></i>`).join("")+
    `<u style="left:${F[0]}px;top:${F[1]}px;right:auto;bottom:auto;width:${F[2]}px;height:${F[2]}px"></u>`;

  $(".back").style.background =
    `linear-gradient(145deg,${shade(cur.color,50)},${cur.color},${shade(cur.color,-45)})`;
}

/* ---------- STATUS BAR ---------- */
const statusHTML = ()=>`${state.air?"✈️":"📶"} ${state.wifi&&!state.air?"Wi-Fi":""} 🔋${state.saver?"82% 🌿":"82%"}`;
const updStatus = ()=>{ const s=$(".sb span:last-child"); if(s) s.innerHTML=statusHTML(); };

/* ---------- MORE APPS ---------- */
APPS.push(
  ["Snake","🐍","#16a34a"],["Tic Tac Toe","⭕","#7c3aed"],["Notes","📝","#f59e0b"],
  ["Weather","⛅","#38bdf8"],["Stopwatch","⏱️","#ef4444"],["Torch","🔦","#eab308"],
  ["Dice","🎲","#db2777"],["Contacts","👤","#0d9488"]
);

function openApp(n,noPush){
  if(!noPush && curApp!=="Home") hist.push(curApp);
  else if(!noPush) hist=["Home"];

  recents=[n,...recents.filter(x=>x!==n)].slice(0,6);

  const R={
    Phone:phoneApp, Messages:msgApp, Camera:camApp, Gallery:galApp,
    Settings:()=>setPage(), Calculator:calcApp, Clock:clockApp, Calendar:calApp,
    Browser:()=>browse("home"), Files:filesApp, Music:musicApp, Maps:mapsApp,
    Snake:snakeApp, "Tic Tac Toe":tttApp, Notes:notesApp, Weather:weatherApp,
    Stopwatch:stopApp, Torch:torchApp, Dice:diceApp, Contacts:contactsApp
  };
  if(R[n]) R[n]();
  curApp=n;
}

/* ---------- SNAKE ---------- */
function snakeApp(){
  const N=14,C=16;
  let sn,dir,q,food,sc,run,over,tid;
  const sp=()=>Math.max(70,150-sc*4);

  setView(pad(
    `<div style="display:flex;justify-content:space-between"><b>🐍 Snake</b><span id="ss"></span></div>
     <canvas id="sk" width="224" height="224"
       style="width:100%;max-width:224px;display:block;margin:8px auto;border-radius:12px;background:#0b1220;touch-action:none"></canvas>
     <div class="calc" style="max-width:150px;margin:0 auto">
       <i></i><button data-d="U">▲</button><i></i>
       <button data-d="L">◀</button><button data-d="P">⏸</button><button data-d="R">▶</button>
       <i></i><button data-d="D">▼</button><i></i>
     </div>`),"Snake");

  const cv=$("#sk"), g=cv.getContext("2d");
  const V={U:[0,-1],D:[0,1],L:[-1,0],R:[1,0]};

  function spawn(){
    do{ food=[Math.floor(Math.random()*N),Math.floor(Math.random()*N)]; }
    while(sn.some(s=>s[0]==food[0]&&s[1]==food[1]));
  }
  function reset(){
    sn=[[7,7],[6,7],[5,7]]; dir=[1,0]; q=[]; sc=0; run=false; over=false;
    untick(tid); spawn(); draw();
  }
  function go(){ run=true; untick(tid); tid=tick(step,sp()); }
  function step(){
    if(!run||over) return;
    if(q.length) dir=q.shift();
    const h=[sn[0][0]+dir[0],sn[0][1]+dir[1]];
    if(h[0]<0||h[1]<0||h[0]>=N||h[1]>=N||sn.slice(0,-1).some(s=>s[0]==h[0]&&s[1]==h[1])){
      over=true; run=false; state.hi=Math.max(state.hi||0,sc); untick(tid); draw(); return;
    }
    sn.unshift(h);
    if(h[0]==food[0]&&h[1]==food[1]){ sc++; spawn(); go(); } else sn.pop();
    draw();
  }
  function turn(k){
    if(k=="P"){ if(over) return reset(); if(run){run=false;untick(tid);} else go(); return draw(); }
    if(over) reset();
    const d=V[k], last=q.length?q[q.length-1]:dir;
    if(d[0]==-last[0]&&d[1]==-last[1]) return;
    if(q.length<2) q.push(d);
    if(!run) go();
    draw();
  }
  function draw(){
    g.fillStyle="#0b1220"; g.fillRect(0,0,224,224);
    g.fillStyle="#ffffff08";
    for(let i=0;i<N;i++) for(let j=0;j<N;j++) if((i+j)%2) g.fillRect(i*C,j*C,C,C);
    g.fillStyle="#ef4444"; g.beginPath();
    g.arc(food[0]*C+C/2,food[1]*C+C/2,C/2-2,0,7); g.fill();
    sn.forEach((s,i)=>{
      g.fillStyle=i?"#22c55e":"#86efac";
      g.beginPath(); g.roundRect(s[0]*C+1,s[1]*C+1,C-2,C-2,5); g.fill();
    });
    $("#ss").textContent=`Score ${sc} · Best ${Math.max(state.hi||0,sc)}`;
    if(!run){
      g.fillStyle="#000a"; g.fillRect(0,0,224,224);
      g.fillStyle="#fff"; g.textAlign="center"; g.font="bold 18px sans-serif";
      g.fillText(over?"Game Over":sc?"Paused":"Tap ▲ ◀ ▶ ▼ to start",112,108);
      g.font="12px sans-serif";
      g.fillText(over?"Press ⏸ to restart":"Swipe or use arrow keys",112,130);
    }
  }

  $$("[data-d]").forEach(b=>b.onclick=()=>turn(b.dataset.d));
  appKey=e=>{
    const m={ArrowUp:"U",ArrowDown:"D",ArrowLeft:"L",ArrowRight:"R",w:"U",s:"D",a:"L",d:"R"," ":"P"}[e.key];
    if(m){ turn(m); return true; }
  };

  let sx,sy;
  cv.onpointerdown=e=>{ sx=e.clientX; sy=e.clientY; };
  cv.onpointerup=e=>{
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.max(Math.abs(dx),Math.abs(dy))<18) return;
    turn(Math.abs(dx)>Math.abs(dy)?(dx>0?"R":"L"):(dy>0?"D":"U"));
  };
  reset();
}

/* ---------- TIC TAC TOE ---------- */
function tttApp(){
  let b=Array(9).fill(""), t="X", w="";
  const W=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  setView(pad(`<h4>Tic Tac Toe</h4><p id="tw" style="margin:8px 0"></p>
    <div id="tb" class="calc"></div><br><button class="btn" id="tr" style="width:100%">Restart</button>`),"Tic Tac Toe");
  const draw=()=>{
    const f=W.map(l=>l.map(i=>b[i]).join("")).find(x=>x=="XXX"||x=="OOO");
    w=f?f[0]:"";
    $("#tw").textContent=w?w+" wins! 🎉":b.every(Boolean)?"Draw":"Turn: "+t;
    $("#tb").innerHTML=b.map((v,i)=>`<button data-i="${i}" style="height:62px;font-size:26px">${v}</button>`).join("");
    $$("#tb button").forEach(x=>x.onclick=()=>{
      const i=+x.dataset.i;
      if(b[i]||w) return;
      b[i]=t; t=t=="X"?"O":"X"; draw();
    });
  };
  $("#tr").onclick=()=>{ b=Array(9).fill(""); t="X"; draw(); };
  draw();
}

/* ---------- NOTES / STOPWATCH / TORCH / WEATHER / DICE / CONTACTS ---------- */
function notesApp(){
  setView(pad(`<h4>Notes</h4><textarea id="nt" placeholder="Write something…"
    style="width:100%;height:250px;margin-top:8px;padding:10px;border-radius:12px;border:0;background:#ffffff18;color:inherit;resize:none">${state.note||""}</textarea>`),"Notes");
  $("#nt").oninput=e=>state.note=e.target.value;
}

function stopApp(){
  let t=0,id=null,last=0;
  setView(pad(`<h4>Stopwatch</h4><div class="disp" id="sw" style="margin-top:10px">00:00.00</div>
    <button class="btn" id="s1" style="width:49%">Start</button>
    <button class="btn" id="s2" style="width:49%">Reset</button>`),"Stopwatch");
  const show=()=>{
    const m=Math.floor(t/60000),s=Math.floor(t/1000)%60,c=Math.floor(t/10)%100;
    const el=$("#sw"); if(el) el.textContent=[m,s].map(v=>String(v).padStart(2,"0")).join(":")+"."+String(c).padStart(2,"0");
  };
  $("#s1").onclick=e=>{
    if(id){ untick(id); id=null; e.target.textContent="Start"; }
    else{ last=Date.now(); id=tick(()=>{t+=Date.now()-last;last=Date.now();show();},40); e.target.textContent="Stop"; }
  };
  $("#s2").onclick=()=>{ t=0; show(); };
}

function torchApp(){
  const draw=()=>setView(pad(`<h4>Torch</h4><div style="text-align:center;padding:40px 0">
    <button class="btn" id="tb2" style="font-size:60px;border-radius:50%;width:130px;height:130px">${flashlightOn?"💡":"🔦"}</button>
    <p style="margin-top:14px">${flashlightOn?"ON — rear flash is lit":"OFF"}</p></div>`),"Torch");
  draw();
  $("#tb2").onclick=()=>{ setFlashlight(!flashlightOn); draw(); };
}

function weatherApp(){
  const d=["Mon","Tue","Wed","Thu","Fri"], i=["☀️","⛅","🌧️","⛈️","🌤️"], t=[31,29,26,24,30];
  setView(pad(`<div style="text-align:center;padding:10px 0"><div style="font-size:50px">⛅</div>
    <div style="font-size:40px;font-weight:300">28°C</div><p>Partly Cloudy</p></div>`+
    d.map((x,k)=>`<div class="row">${x}<span>${i[k]} ${t[k]}°</span></div>`).join("")),"Weather");
}

function diceApp(){
  setView(pad(`<h4>Dice</h4><div id="dv" style="font-size:90px;text-align:center;margin:20px 0">⚀</div>
    <button class="btn" id="dr" style="width:100%">Roll 🎲</button>`),"Dice");
  $("#dr").onclick=()=>{ $("#dv").textContent="⚀⚁⚂⚃⚄⚅"[Math.floor(Math.random()*6)]; };
}

function contactsApp(){
  setView(pad(`<h4>Contacts</h4>`+
    ["Alex","Mom","Dad","Riya","Sam","Work"].map(n=>`<div class="row">👤 ${n}<span>📞</span></div>`).join("")),"Contacts");
}

/* ---------- MORE SETTINGS ---------- */
function setPage(){
  const keep=$("#vw")?$("#vw").scrollTop:0;
  const T=(k,l)=>`<div class="row" data-t="${k}">${l}<b class="tg ${state[k]?"on":""}">${state[k]?"On":"Off"}</b></div>`;
  const hz=[...new Set(["60Hz","90Hz",cur.refreshRate])];
  const opt=(a,v)=>a.map(x=>`<option ${x==v?"selected":""}>${x}</option>`).join("");
  const WP=["linear-gradient(160deg,#3b2f8f,#0f766e)","linear-gradient(160deg,#ff9a8b,#6a82fb)",
            "linear-gradient(160deg,#0f2027,#2c5364)","linear-gradient(160deg,#ff512f,#2b1055)","linear-gradient(160deg,#134e5e,#71b280)"];

  setView(pad(`<h4>Settings</h4>`+
    [["wifi","Wi-Fi"],["bt","Bluetooth"],["air","Airplane mode"],["hot","Hotspot"],["dark","Dark mode"],
     ["saver","Battery saver"],["dnd","Do not disturb"],["loc","Location"],["rot","Auto-rotate"],["haptic","Vibration"]]
     .map(([k,l])=>T(k,l)).join("")+
    `<div class="row">Brightness<input type="range" id="sb2" min="30" max="100" value="${state.bright}"></div>
     <div class="row">Volume<input type="range" id="sv2" min="0" max="100" value="${state.vol}"></div>
     <div class="row">Text size<select id="fs">${opt(["Small","Medium","Large"],state.fs||"Medium")}</select></div>
     <div class="row">Refresh rate<select id="hz">${opt(hz,state.hz)}</select></div>
     <div class="row">Screen timeout<select id="to">${opt(["Never","15s","30s","1 min"],state.toL||"Never")}</select></div>
     <div class="row">Wallpaper<span>${WP.map((g,i)=>`<button class="btn wp" data-w="${i}" style="background:${g};width:22px;height:22px;padding:0;margin-left:4px"></button>`).join("")}</span></div>
     <div class="row">Model<span>${cur.brand} ${cur.model}</span></div>
     <div class="row">Software<span>${cur.os}</span></div>
     <div class="row">Processor<span>${cur.processor}</span></div>
     <div class="row">RAM / Storage<span>${cur.ram} / ${cur.storage}</span></div>
     <div class="row">Battery<span>${cur.battery}</span></div>
     <button class="btn" id="settingsPower" style="width:100%;margin-top:6px">${powerOn?"Turn Phone Off":"Turn Phone On"}</button>`),"Settings");

  $("#vw").scrollTop=keep;

  $$("[data-t]").forEach(r=>r.onclick=()=>{
    const k=r.dataset.t; state[k]=!state[k];
    if(k=="dark") applyDark();
    if(k=="air"&&state.air){ state.wifi=false; state.bt=false; }
    if(k=="saver"){ state.bright=state.saver?50:100; applyBright(); }
    updStatus(); setPage();
  });
  $("#sb2").oninput=e=>{ state.bright=e.target.value; applyBright(); };
  $("#sv2").oninput=e=>{ state.vol=e.target.value; };
  $("#fs").onchange=e=>{ state.fs=e.target.value; scr.style.fontSize={Small:"12px",Medium:"13px",Large:"15px"}[state.fs]; };
  $("#hz").onchange=e=>{ state.hz=e.target.value; };
  $("#to").onchange=e=>{ state.toL=e.target.value; state.timeout={Never:0,"15s":15,"30s":30,"1 min":60}[state.toL]; };
  $$("[data-w]").forEach(b=>b.onclick=()=>scr.style.setProperty("--wp",WP[+b.dataset.w]));
  $("#settingsPower").onclick=()=>{ setPowerState(!powerOn); setPage(); };
}

/* auto screen-off (Screen timeout setting) */
let idleAt=Date.now();
scr.addEventListener("pointerdown",()=>idleAt=Date.now());
setInterval(()=>{
  if(!powerOn) idleAt=Date.now();
  else if(state.timeout && Date.now()-idleAt>state.timeout*1000) setPowerState(false);
},1000);


/* =========================================================
   START
========================================================= */

drawBrands();
drawModels();
applyPhone();
bindPhysicalControls();