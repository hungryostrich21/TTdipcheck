const cacheName = 'truck-app-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Install Service Worker and cache files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Fetch requests
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
