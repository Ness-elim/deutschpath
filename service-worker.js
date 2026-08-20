const CACHE_NAME='deutschpath-unified-5.1.0';
const APP_ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./levels/a1a2/index.html",
  "./levels/a1a2/course-data.js",
  "./levels/a1a2/course-engine.js",
  "./levels/b1/index.html",
  "./levels/b1/course-data.js",
  "./levels/b1/course-engine.js",
  "./levels/b2/index.html",
  "./levels/b2/course-data.js",
  "./levels/b2/course-engine.js"
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k.startsWith('deutschpath')).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{if(resp&&resp.ok){const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy))}return resp}).catch(()=>caches.match('./index.html'))))});
