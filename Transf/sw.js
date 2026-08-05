const CACHE_NAME = "jm-transfer-pro-v1";

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado");
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Passa as requisições normalmente
});