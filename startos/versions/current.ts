import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.1:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.1, a patch release with bug fixes.

**Fixes**

- OAuth access tokens can now reach LFS endpoints.
- OAuth2 is initialized only when it is enabled.
- Fixed the form used when editing wiki pages.
- Assignment of projects to issues is now consistent.
- Right-to-left alignment fix for the options dropdown in the Actions list.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    es_ES: `Forgejo actualizado a 16.0.1, una versión de corrección con arreglos de errores.

**Correcciones**

- Los tokens de acceso OAuth ya pueden acceder a los endpoints LFS.
- OAuth2 solo se inicializa cuando está habilitado.
- Corregido el formulario usado al editar páginas del wiki.
- La asignación de proyectos a incidencias ahora es coherente.
- Corrección de la alineación de derecha a izquierda del menú desplegable de opciones en la lista de Actions.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    de_DE: `Forgejo auf 16.0.1 aktualisiert, ein Patch-Release mit Fehlerbehebungen.

**Fehlerbehebungen**

- OAuth-Zugriffstokens können jetzt auf LFS-Endpunkte zugreifen.
- OAuth2 wird nur noch initialisiert, wenn es aktiviert ist.
- Das Formular zum Bearbeiten von Wiki-Seiten wurde korrigiert.
- Die Zuordnung von Projekten zu Issues ist jetzt konsistent.
- Korrektur der Rechts-nach-links-Ausrichtung des Optionen-Dropdowns in der Actions-Liste.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.1 — wydanie poprawkowe z naprawami błędów.

**Poprawki**

- Tokeny dostępu OAuth mogą teraz korzystać z punktów końcowych LFS.
- OAuth2 jest inicjowany tylko wtedy, gdy jest włączony.
- Poprawiono formularz używany podczas edycji stron wiki.
- Przypisywanie projektów do zgłoszeń jest teraz spójne.
- Poprawka wyrównania od prawej do lewej dla menu rozwijanego opcji na liście Actions.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
    fr_FR: `Forgejo mis à jour vers 16.0.1, une version corrective avec des corrections de bogues.

**Corrections**

- Les jetons d'accès OAuth peuvent désormais accéder aux points de terminaison LFS.
- OAuth2 n'est initialisé que lorsqu'il est activé.
- Correction du formulaire utilisé pour l'édition des pages du wiki.
- L'affectation des projets aux tickets est désormais cohérente.
- Correction de l'alignement de droite à gauche du menu déroulant des options dans la liste Actions.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.1.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
