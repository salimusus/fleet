# 🚛 FleetCare

> Application web de gestion d'entretien pour flotte de poids lourds

Application monofichier HTML pour le suivi opérationnel d'une flotte de véhicules industriels :
gestion des véhicules, interventions, stock pièces détachées, commandes, contrôles techniques,
calendrier et analyse des coûts.

## ✨ Fonctionnalités

- **Tableau de bord** avec KPIs et alertes
- **Flotte** : 40+ véhicules avec immat, VIN, marque, modèle, PTAC
- **Interventions** : création, suivi, planning, impression
- **Stock pièces** avec 236 patterns de référence reconnus automatiquement
- **Commandes fournisseurs** avec liaison automatique
- **Calendrier** mensuel avec impression
- **Contrôles** techniques, tachygraphes, ADR, hayons, ATP
- **Analyse des coûts** par véhicule
- **Export/Import JSON**
- **Compatibilité véhicules/pièces**
- 📋 **Coller depuis Google Lens** : pré-remplissage automatique des champs
  pour les cartes grises et les références pièces détachées
- 📅 **Détection automatique X.1** : prochain contrôle technique extrait
  de la carte grise et ajouté automatiquement dans l'onglet Contrôles

## 🚀 Déploiement

### Option A — GitHub Pages (recommandé)

1. **Forkez** ou **clonez** ce repository
2. Allez dans **Settings → Pages**
3. Sélectionnez la branche **main** (ou **master**) comme source
4. Cliquez sur **Save**
5. Votre application sera accessible à l'URL `https://votreusername.github.io/fleetcare/`

### Option B — Cloudflare Pages

1. Connectez-vous sur https://pages.cloudflare.com
2. **Create a project → Direct Upload**
3. Glissez-déposez le contenu du dossier
4. Votre application sera accessible à l'URL `https://fleetcare.pages.dev`

### Option C — Netlify

1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier
3. Votre application sera accessible à l'URL `https://votre-nom.netlify.app`

## 📱 Installation en application (PWA)

Sur tablette/smartphone Android, dans Chrome :
1. Ouvrir l'URL de l'application
2. Menu (⋮) → **Ajouter à l'écran d'accueil** ou **Installer l'application**
3. FleetCare devient une vraie application

## 📂 Structure des fichiers

```
fleetcare/
├── index.html              # Application complète (monofichier)
├── manifest.webmanifest    # Manifest PWA
├── sw.js                   # Service Worker (installation PWA)
├── icon-192.png            # Icône PWA 192×192
├── icon-512.png            # Icône PWA 512×512
└── README.md               # Ce fichier
```

## 🔒 Stockage des données

- Toutes les données sont stockées **localement** dans le navigateur (localStorage)
- **Aucune donnée n'est envoyée à un serveur tiers**
- Utilisez régulièrement la fonction **Export JSON** pour sauvegarder vos données

## 📋 Prérequis

- Navigateur moderne : Chrome, Firefox, Safari, Edge
- Hébergement en **HTTPS** obligatoire pour les fonctionnalités caméra/PWA

## 🛠 Technologies

- HTML5 / CSS3 / JavaScript Vanilla
- localStorage pour la persistance
- ZXing pour le scan de codes-barres
- Tesseract.js pour l'OCR local (optionnel)

## 📄 Licence

Application développée pour usage interne BEST TRANSPORT SAS.

---

**Version :** 2026
**Compatibilité :** Cartes grises françaises SIV (post-2009) et FNI
