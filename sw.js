if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const t=e=>i(e,r),f={module:{uri:r},exports:c,require:t};n[r]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CEbODIvS.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"index.html",revision:"67861ec33c874a0aa5b0beaf5aa30e32"},{url:"icon-192x192.png",revision:"8d3b60e66b92cc9153a3c026a2ff8ebc"},{url:"icon-512x512.png",revision:"f7d4d2b0534320b589d83eb31d5febea"},{url:"icon-512x512-mask.png",revision:"4cf0c17340acfdeec978e1b7a5ce4b0f"},{url:"manifest.webmanifest",revision:"100c0759e752fdf3e51c66f442f35e91"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
