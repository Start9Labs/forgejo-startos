import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '15.0.4:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 15.0.4, a security and bug-fix patch.

**Security**

- Fixed caching of write permission on a repository's first pushed git reference.
- Hardened migration/mirror remote-access checks (ALLOWED_DOMAINS, BLOCKED_DOMAINS, ALLOW_LOCALNETWORKS), including LFS, against a time-of-check/time-of-use bypass.
- Patched a security issue in the golang.org/x/image dependency.

**Fixes**

- Generic packages now accept HTTP HEAD requests, the Swift registry follows the official metadata schema, and the API no longer errors on comments by deleted users.

**Note:** EXIF metadata is no longer stripped from uploaded images — upstream removed the AGPL-licensed EXIF library.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/15.0.4.md`,
    es_ES: `Forgejo actualizado a 15.0.4, un parche de seguridad y corrección de errores.

**Seguridad**

- Corregido el almacenamiento en caché del permiso de escritura en la primera referencia git enviada a un repositorio.
- Reforzadas las comprobaciones de acceso a remotos para migración/replicación (ALLOWED_DOMAINS, BLOCKED_DOMAINS, ALLOW_LOCALNETWORKS), incluido LFS, frente a un desvío de tipo tiempo-de-comprobación/tiempo-de-uso.
- Corregido un problema de seguridad en la dependencia golang.org/x/image.

**Correcciones**

- Los paquetes genéricos ahora aceptan peticiones HTTP HEAD, el registro Swift sigue el esquema de metadatos oficial y la API ya no falla con comentarios de usuarios eliminados.

**Nota:** los metadatos EXIF ya no se eliminan de las imágenes subidas: el proyecto original retiró la biblioteca EXIF con licencia AGPL.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/15.0.4.md`,
    de_DE: `Forgejo auf 15.0.4 aktualisiert, ein Sicherheits- und Fehlerbehebungs-Patch.

**Sicherheit**

- Zwischenspeichern der Schreibberechtigung bei der ersten in ein Repository geschobenen Git-Referenz behoben.
- Zugriffsprüfungen für Remotes bei Migration/Spiegelung (ALLOWED_DOMAINS, BLOCKED_DOMAINS, ALLOW_LOCALNETWORKS), einschließlich LFS, gegen eine Time-of-Check/Time-of-Use-Umgehung gehärtet.
- Sicherheitsproblem in der Abhängigkeit golang.org/x/image behoben.

**Fehlerbehebungen**

- Generische Pakete akzeptieren jetzt HTTP-HEAD-Anfragen, die Swift-Registry folgt dem offiziellen Metadatenschema und die API bricht bei Kommentaren gelöschter Benutzer nicht mehr ab.

**Hinweis:** EXIF-Metadaten werden nicht mehr aus hochgeladenen Bildern entfernt — das Upstream-Projekt hat die AGPL-lizenzierte EXIF-Bibliothek entfernt.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/15.0.4.md`,
    pl_PL: `Zaktualizowano Forgejo do 15.0.4 — poprawka bezpieczeństwa i błędów.

**Bezpieczeństwo**

- Naprawiono buforowanie uprawnień do zapisu przy pierwszym wypchniętym odwołaniu git w repozytorium.
- Wzmocniono sprawdzanie dostępu do zdalnych zasobów przy migracji/mirrorowaniu (ALLOWED_DOMAINS, BLOCKED_DOMAINS, ALLOW_LOCALNETWORKS), w tym LFS, przeciwko obejściu typu time-of-check/time-of-use.
- Załatano problem bezpieczeństwa w zależności golang.org/x/image.

**Poprawki**

- Pakiety generyczne akceptują teraz żądania HTTP HEAD, rejestr Swift stosuje oficjalny schemat metadanych, a API nie zgłasza już błędu przy komentarzach usuniętych użytkowników.

**Uwaga:** metadane EXIF nie są już usuwane z przesyłanych obrazów — projekt macierzysty usunął bibliotekę EXIF na licencji AGPL.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/15.0.4.md`,
    fr_FR: `Forgejo mis à jour vers 15.0.4, un correctif de sécurité et de bogues.

**Sécurité**

- Correction de la mise en cache de l'autorisation d'écriture sur la première référence git poussée vers un dépôt.
- Renforcement des contrôles d'accès aux distants pour la migration/mise en miroir (ALLOWED_DOMAINS, BLOCKED_DOMAINS, ALLOW_LOCALNETWORKS), y compris LFS, contre un contournement de type temps-de-vérification/temps-d'utilisation.
- Correction d'un problème de sécurité dans la dépendance golang.org/x/image.

**Corrections**

- Les paquets génériques acceptent désormais les requêtes HTTP HEAD, le registre Swift suit le schéma de métadonnées officiel et l'API ne renvoie plus d'erreur pour les commentaires d'utilisateurs supprimés.

**Remarque :** les métadonnées EXIF ne sont plus supprimées des images téléversées — le projet amont a retiré la bibliothèque EXIF sous licence AGPL.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/15.0.4.md`,
  },
  migrations: {
    // First release of the Forgejo package — nothing to migrate from.
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
