if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/247-44f585f1b7f0a218.js",revision:"44f585f1b7f0a218"},{url:"/_next/static/chunks/865-bcde1344a39cb31d.js",revision:"bcde1344a39cb31d"},{url:"/_next/static/chunks/d7eeaac4-30c4392cebe5f353.js",revision:"30c4392cebe5f353"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-afd697f83a9a2cb5.js",revision:"afd697f83a9a2cb5"},{url:"/_next/static/chunks/pages/_app-6608f31c784668ec.js",revision:"6608f31c784668ec"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/fruits-2057e5c9f3ed7565.js",revision:"2057e5c9f3ed7565"},{url:"/_next/static/chunks/pages/index-5e3caabd01ca9d2d.js",revision:"5e3caabd01ca9d2d"},{url:"/_next/static/chunks/pages/login-a2ad46ad2f3c8bf4.js",revision:"a2ad46ad2f3c8bf4"},{url:"/_next/static/chunks/pages/products/%5Bproduct%5D-e2d2ab775b4f1afb.js",revision:"e2d2ab775b4f1afb"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/592e4fe48e19cb40.css",revision:"592e4fe48e19cb40"},{url:"/_next/static/lZ0J1VpScxvqXXwMiUQcf/_buildManifest.js",revision:"bc245f22246afddf179a10313b6a7bc2"},{url:"/_next/static/lZ0J1VpScxvqXXwMiUQcf/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/lZ0J1VpScxvqXXwMiUQcf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/apple.png",revision:"4a948b2726c11bb185b7e5a0e1665a00"},{url:"/img/banner1.png",revision:"d77e254eaec144afdd2e0b20327722b2"},{url:"/img/bb.png",revision:"c01ee9718755bc7f40e0ef98cb55129e"},{url:"/img/bg.svg",revision:"8d2bbcf25609c216737220fd7e455f52"},{url:"/img/broc.png",revision:"f8d589a19a81c506fb2f824d3b29a6b0"},{url:"/img/broc2.png",revision:"5af1d57e8431ba7a765b9253ad3a4fc8"},{url:"/img/cabbage.png",revision:"c0c3ee2c28e1d3ba81b1b4ea53da6f71"},{url:"/img/cheese.png",revision:"d7c18d2b915f3e837adad5259dc66479"},{url:"/img/cheese2.png",revision:"a135e7999fb6668ab3f3fd06786adeeb"},{url:"/img/delivery192.png",revision:"01a5376398c47669cbc547e2d32dbe9d"},{url:"/img/delivery512.png",revision:"336f8d6b78911bb7004f92477690a261"},{url:"/manifest.json",revision:"5ed685c8cb77bbe1d0d8315337da050c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
