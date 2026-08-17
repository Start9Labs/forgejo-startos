import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.2:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.2, a patch release with security and bug fixes.

**Security**

- Carrier-grade NAT addresses (100.64.0.0/10) are now treated as private by the host allow/block rules.
- Fixed arbitrary file reads through org-mode rendering.
- Fixed stored cross-site scripting in Actions pre-execution warnings and errors.
- Security updates to several bundled dependencies.

**Fixes**

- Runner jobs no longer get stuck when task fetching is slower than the client timeout.
- Jobs are only looked for in repositories where Actions are enabled.
- Reverse-proxy authentication now works on git routes.
- OAuth2 support initialises correctly even when OAuth2 is disabled.
- Session state is now shared between session middlewares.
- Git subcommand errors caused by shutdown are no longer logged as failures.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.2.md`,
    es_ES: `Forgejo actualizado a 16.0.2, una versión de parche con correcciones de seguridad y de errores.

**Seguridad**

- Las direcciones de NAT de nivel de operador (100.64.0.0/10) ahora se tratan como privadas en las reglas de permiso y bloqueo de hosts.
- Corregida la lectura arbitraria de archivos mediante la representación de org-mode.
- Corregido un XSS almacenado en los avisos y errores previos a la ejecución de Actions.
- Actualizaciones de seguridad de varias dependencias incluidas.

**Correcciones**

- Los trabajos del ejecutor ya no se quedan bloqueados cuando la obtención de tareas es más lenta que el tiempo de espera del cliente.
- Solo se buscan trabajos en repositorios donde Actions está habilitado.
- La autenticación mediante proxy inverso ya funciona en las rutas de git.
- La compatibilidad con OAuth2 se inicializa correctamente incluso cuando OAuth2 está deshabilitado.
- El estado de sesión ahora se comparte entre los middlewares de sesión.
- Los errores de subcomandos de git causados por el apagado ya no se registran como fallos.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.2.md`,
    de_DE: `Forgejo auf 16.0.2 aktualisiert, ein Patch-Release mit Sicherheits- und Fehlerbehebungen.

**Sicherheit**

- Carrier-Grade-NAT-Adressen (100.64.0.0/10) werden von den Host-Zulassungs- und Sperrregeln nun als privat behandelt.
- Beliebiges Lesen von Dateien über das Rendern von Org-Mode behoben.
- Gespeichertes Cross-Site-Scripting in Warnungen und Fehlern vor der Ausführung von Actions behoben.
- Sicherheitsaktualisierungen mehrerer mitgelieferter Abhängigkeiten.

**Fehlerbehebungen**

- Runner-Jobs bleiben nicht mehr hängen, wenn das Abrufen von Aufgaben langsamer als das Client-Timeout ist.
- Jobs werden nur noch in Repositories gesucht, in denen Actions aktiviert ist.
- Die Authentifizierung über Reverse-Proxy funktioniert jetzt auch auf Git-Routen.
- Die OAuth2-Unterstützung wird korrekt initialisiert, auch wenn OAuth2 deaktiviert ist.
- Der Sitzungszustand wird jetzt zwischen den Sitzungs-Middlewares geteilt.
- Durch das Herunterfahren verursachte Git-Unterbefehlsfehler werden nicht mehr als Fehler protokolliert.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.2.md`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.2 — wydanie poprawkowe z poprawkami bezpieczeństwa i błędów.

**Bezpieczeństwo**

- Adresy CGNAT (100.64.0.0/10) są teraz traktowane jako prywatne przez reguły zezwalania i blokowania hostów.
- Naprawiono możliwość odczytu dowolnych plików przez renderowanie org-mode.
- Naprawiono trwały XSS w ostrzeżeniach i błędach poprzedzających wykonanie Actions.
- Aktualizacje bezpieczeństwa kilku dołączonych zależności.

**Poprawki**

- Zadania wykonawcy nie zawieszają się już, gdy pobieranie zadań jest wolniejsze niż limit czasu klienta.
- Zadania są wyszukiwane wyłącznie w repozytoriach z włączonym Actions.
- Uwierzytelnianie przez odwrotne proxy działa teraz na ścieżkach git.
- Obsługa OAuth2 inicjalizuje się poprawnie nawet wtedy, gdy OAuth2 jest wyłączone.
- Stan sesji jest teraz współdzielony między warstwami pośrednimi sesji.
- Błędy podpoleceń git spowodowane zamykaniem nie są już zapisywane jako niepowodzenia.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.2.md`,
    fr_FR: `Forgejo mis à jour vers 16.0.2, une version corrective apportant des correctifs de sécurité et de bogues.

**Sécurité**

- Les adresses CGNAT (100.64.0.0/10) sont désormais considérées comme privées par les règles d'autorisation et de blocage des hôtes.
- Correction de la lecture arbitraire de fichiers via le rendu org-mode.
- Correction d'un XSS stocké dans les avertissements et erreurs précédant l'exécution des Actions.
- Mises à jour de sécurité de plusieurs dépendances intégrées.

**Corrections**

- Les tâches de l'exécuteur ne restent plus bloquées lorsque la récupération des tâches est plus lente que le délai d'attente du client.
- Les tâches ne sont recherchées que dans les dépôts où les Actions sont activées.
- L'authentification par proxy inverse fonctionne désormais sur les routes git.
- La prise en charge d'OAuth2 s'initialise correctement même lorsque OAuth2 est désactivé.
- L'état de session est maintenant partagé entre les intergiciels de session.
- Les erreurs de sous-commandes git dues à l'arrêt ne sont plus consignées comme des échecs.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.2.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
