const CACHE_NAME = "actionroll-v2";

const FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./ActionRollPicture.png",
    "./icon-192.png",
    "./icon-512.png",
    "./IMFellEnglish-Regular.ttf",
    "./icon-maskable.png"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
