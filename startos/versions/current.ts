import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.0:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.0, a major release.

**Highlights**

- Built-in code search powered by Zoekt.
- Granular per-unit notification settings for watched repositories.
- Dynamic OIDC group-to-team mappings.
- Multiline pull-request review comments, plus new REST API endpoints for Actions artifacts and job/run logs.
- Git hooks are now stored centrally instead of being duplicated in every repository (backwards-compatible).

**Security**

- CVE-2026-20896: container images no longer trust all reverse proxies by default. This package does not use reverse-proxy authentication, so no action is required.
- Hardened migration and mirror remote-access checks (including LFS) and added SSRF protection for federation.

**Note:** Git mirroring over HTTP no longer follows redirects, and EXIF metadata is no longer stripped from uploaded images.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.0.md · Announcement: https://forgejo.org/2026-07-release-v16-0/`,
    es_ES: `Forgejo actualizado a 16.0.0, una versión mayor.

**Novedades destacadas**

- Búsqueda de código integrada mediante Zoekt.
- Ajustes de notificación granulares por unidad para los repositorios seguidos.
- Asignaciones dinámicas de grupos OIDC a equipos.
- Comentarios de revisión multilínea en las solicitudes de incorporación de cambios, además de nuevos puntos de acceso de la API REST para artefactos de Actions y registros de trabajos/ejecuciones.
- Los hooks de git ahora se almacenan de forma centralizada en lugar de duplicarse en cada repositorio (retrocompatible).

**Seguridad**

- CVE-2026-20896: las imágenes de contenedor ya no confían en todos los proxies inversos de forma predeterminada. Este paquete no usa autenticación por proxy inverso, por lo que no se requiere ninguna acción.
- Reforzadas las comprobaciones de acceso a remotos para migración y replicación (incluido LFS) y añadida protección SSRF para la federación.

**Nota:** la replicación de git por HTTP ya no sigue redirecciones y los metadatos EXIF ya no se eliminan de las imágenes subidas.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.0.md · Anuncio: https://forgejo.org/2026-07-release-v16-0/`,
    de_DE: `Forgejo auf 16.0.0 aktualisiert, ein großes Release.

**Höhepunkte**

- Integrierte Codesuche auf Basis von Zoekt.
- Feingranulare Benachrichtigungseinstellungen pro Einheit für beobachtete Repositories.
- Dynamische OIDC-Gruppen-zu-Team-Zuordnungen.
- Mehrzeilige Review-Kommentare in Pull Requests sowie neue REST-API-Endpunkte für Actions-Artefakte und Job-/Run-Logs.
- Git-Hooks werden nun zentral gespeichert statt in jedem Repository dupliziert (abwärtskompatibel).

**Sicherheit**

- CVE-2026-20896: Container-Images vertrauen standardmäßig nicht mehr allen Reverse-Proxys. Dieses Paket nutzt keine Reverse-Proxy-Authentifizierung, daher ist keine Aktion erforderlich.
- Zugriffsprüfungen für Migration und Spiegelung (einschließlich LFS) gehärtet und SSRF-Schutz für Föderation ergänzt.

**Hinweis:** Git-Spiegelung über HTTP folgt keinen Weiterleitungen mehr, und EXIF-Metadaten werden nicht mehr aus hochgeladenen Bildern entfernt.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.0.md · Ankündigung: https://forgejo.org/2026-07-release-v16-0/`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.0 — wydanie główne.

**Najważniejsze zmiany**

- Wbudowane wyszukiwanie kodu oparte na Zoekt.
- Szczegółowe ustawienia powiadomień dla poszczególnych jednostek obserwowanych repozytoriów.
- Dynamiczne mapowania grup OIDC na zespoły.
- Wielowierszowe komentarze recenzji w żądaniach scalenia oraz nowe punkty końcowe API REST dla artefaktów Actions i logów zadań/uruchomień.
- Hooki git są teraz przechowywane centralnie zamiast powielane w każdym repozytorium (zgodne wstecz).

**Bezpieczeństwo**

- CVE-2026-20896: obrazy kontenerów nie ufają już domyślnie wszystkim odwrotnym serwerom proxy. Ten pakiet nie używa uwierzytelniania przez odwrotny serwer proxy, więc nie jest wymagane żadne działanie.
- Wzmocniono kontrole dostępu do zdalnych zasobów przy migracji i mirrorowaniu (w tym LFS) oraz dodano ochronę przed SSRF dla federacji.

**Uwaga:** mirrorowanie git przez HTTP nie podąża już za przekierowaniami, a metadane EXIF nie są już usuwane z przesyłanych obrazów.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.0.md · Ogłoszenie: https://forgejo.org/2026-07-release-v16-0/`,
    fr_FR: `Forgejo mis à jour vers 16.0.0, une version majeure.

**Points forts**

- Recherche de code intégrée basée sur Zoekt.
- Réglages de notification granulaires par unité pour les dépôts suivis.
- Correspondances dynamiques entre groupes OIDC et équipes.
- Commentaires de revue multilignes sur les demandes d'ajout, ainsi que de nouveaux points d'accès de l'API REST pour les artefacts Actions et les journaux de tâches/exécutions.
- Les hooks git sont désormais stockés de façon centralisée au lieu d'être dupliqués dans chaque dépôt (rétrocompatible).

**Sécurité**

- CVE-2026-20896 : les images de conteneur ne font plus confiance à tous les proxys inverses par défaut. Ce paquet n'utilise pas l'authentification par proxy inverse, aucune action n'est donc requise.
- Renforcement des contrôles d'accès aux distants pour la migration et la mise en miroir (y compris LFS) et ajout d'une protection SSRF pour la fédération.

**Remarque :** la mise en miroir git via HTTP ne suit plus les redirections, et les métadonnées EXIF ne sont plus supprimées des images téléversées.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.0.md · Annonce : https://forgejo.org/2026-07-release-v16-0/`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
