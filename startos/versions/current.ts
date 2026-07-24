import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.1:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.1, a bug-fix release.

- OAuth access tokens can now access LFS endpoints.
- OAuth2 is only initialized when it is enabled.
- Assigning projects to issues is now consistent.
- UI fixes: options-dropdown alignment in the actions list and wiki editing.
- Bundled Forgejo runner updated to v12.13.1.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    es_ES: `Forgejo actualizado a 16.0.1, una versión de corrección de errores.

- Los tokens de acceso OAuth ya pueden acceder a los puntos de acceso de LFS.
- OAuth2 solo se inicializa cuando está habilitado.
- La asignación de proyectos a incidencias ahora es coherente.
- Correcciones de interfaz: alineación del menú desplegable de opciones en la lista de acciones y edición del wiki.
- El runner de Forgejo incluido se actualizó a la versión v12.13.1.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    de_DE: `Forgejo auf 16.0.1 aktualisiert, ein Fehlerbehebungs-Release.

- OAuth-Zugriffstoken können nun auf LFS-Endpunkte zugreifen.
- OAuth2 wird nur initialisiert, wenn es aktiviert ist.
- Die Zuordnung von Projekten zu Issues ist nun konsistent.
- UI-Korrekturen: Ausrichtung des Optionen-Dropdowns in der Aktionsliste und Wiki-Bearbeitung.
- Der mitgelieferte Forgejo-Runner wurde auf v12.13.1 aktualisiert.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.1 — wydanie poprawkowe.

- Tokeny dostępu OAuth mogą teraz korzystać z punktów końcowych LFS.
- OAuth2 jest inicjalizowane tylko wtedy, gdy jest włączone.
- Przypisywanie projektów do zgłoszeń jest teraz spójne.
- Poprawki interfejsu: wyrównanie listy rozwijanej opcji na liście akcji oraz edycja wiki.
- Dołączony runner Forgejo zaktualizowano do wersji v12.13.1.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    fr_FR: `Forgejo mis à jour vers 16.0.1, une version corrective.

- Les jetons d'accès OAuth peuvent désormais accéder aux points d'accès LFS.
- OAuth2 n'est initialisé que lorsqu'il est activé.
- L'affectation de projets aux tickets est désormais cohérente.
- Corrections de l'interface : alignement du menu déroulant d'options dans la liste des actions et édition du wiki.
- Le runner Forgejo inclus est mis à jour vers la version v12.13.1.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
