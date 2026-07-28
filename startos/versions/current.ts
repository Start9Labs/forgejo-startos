import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.1:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.1, a patch release with bug fixes only.

- OAuth2 is now initialised only when it is enabled.
- OAuth access tokens can now be used with LFS endpoints.
- Assigning projects to issues behaves consistently.
- Interface fixes for the wiki editor and the options dropdown in the actions list.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    es_ES: `Forgejo actualizado a 16.0.1, una versión de parche que solo corrige errores.

- OAuth2 ahora se inicializa únicamente cuando está habilitado.
- Los tokens de acceso OAuth ya se pueden usar con los puntos de acceso LFS.
- La asignación de proyectos a incidencias se comporta de forma coherente.
- Correcciones de interfaz en el editor del wiki y en el menú desplegable de opciones de la lista de acciones.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    de_DE: `Forgejo auf 16.0.1 aktualisiert, ein Patch-Release mit reinen Fehlerbehebungen.

- OAuth2 wird nun nur noch initialisiert, wenn es aktiviert ist.
- OAuth-Zugriffstokens können jetzt mit LFS-Endpunkten verwendet werden.
- Das Zuweisen von Projekten zu Issues verhält sich konsistent.
- Oberflächenkorrekturen am Wiki-Editor und am Optionen-Dropdown in der Actions-Liste.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.1 — wydanie poprawkowe zawierające wyłącznie poprawki błędów.

- OAuth2 jest teraz inicjalizowane tylko wtedy, gdy jest włączone.
- Tokenów dostępu OAuth można teraz używać z punktami końcowymi LFS.
- Przypisywanie projektów do zgłoszeń działa spójnie.
- Poprawki interfejsu w edytorze wiki i w menu opcji na liście akcji.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    fr_FR: `Forgejo mis à jour vers 16.0.1, une version corrective ne contenant que des correctifs.

- OAuth2 n'est désormais initialisé que lorsqu'il est activé.
- Les jetons d'accès OAuth peuvent maintenant être utilisés avec les points d'accès LFS.
- L'affectation de projets aux tickets se comporte de manière cohérente.
- Corrections d'interface pour l'éditeur de wiki et le menu déroulant d'options de la liste des actions.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
