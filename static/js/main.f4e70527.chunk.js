(this.webpackJsonpapod=this.webpackJsonpapod||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},27:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(8),s=(t(26),t(27),t(2)),i=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(o.b,{className:"home-link",to:"/nasa-photo"},"See into the stars!"))},m=t(12),u=t.n(m),p=t(17),h=t(20),d=t(18),E=t(37);function f(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement(o.b,{className:"link",to:"/react-nasa",exact:!0},"Take Me Home")))}var v="ekgNzPLZcARJBEEnZcDNPyvmx2cOjujwbtuyqH44";function g(){var e=Object(n.useState)(null),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(v));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t),console.log(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"nasa-photo"},"image"===t.media_type?r.a.createElement(d.a,{src:t.url,alt:t.title,className:"photo",fallback:r.a.createElement(E.a,{style:{display:"flex",alignSelf:"center",justifyContent:"center",margin:"5rem 5rem 5rem 5rem ",width:"4rem",height:"4rem"},color:"warning"})}):r.a.createElement("iframe",{title:"space-video",src:t.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",{className:"date"},t.date),r.a.createElement("p",{className:"explanation"},t.explanation)))):r.a.createElement("div",null)}t(34);var w=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{component:i,path:"/react-nasa",exact:!0}),r.a.createElement(s.a,{component:g,path:"/nasa-photo",exact:!0})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f4e70527.chunk.js.map