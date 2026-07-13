// Service worker básico para PWA
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mitocol-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/panteon',
        '/criaturas',
        '/lugares',
        '/culturas',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});