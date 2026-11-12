const CACHE = "ricette-cucina-1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./media/cucina.jpg",
  "./media/ricetta.jpg",
  "./media/icona.png",
  "./media/chef-sorriso.mp4",
  "./media/chef-mestolo.mp4",
  "./media/chef-occhiolino.mp4",
  "./media/chef-impasto.mp4",
  "./media/chef-saluto.mp4",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
