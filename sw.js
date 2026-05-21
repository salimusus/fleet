// FleetCare Service Worker — Minimal pour PWA installable
// Permet d'apparaître dans la liste "Partager" Android

const CACHE_NAME = 'fleetcare-v1';

self.addEventListener('install', (event) => {
  // Installation immédiate sans cache (l'app reste online)
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pour les requêtes : on laisse passer normalement (pas de cache forcé)
self.addEventListener('fetch', (event) => {
  // Pas d'interception - l'app fonctionne online normalement
});
