import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.3:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.3, a patch release with security and bug fixes.

**Security**

- Fixed access control on the pull-request update API endpoint, where tokens restricted to public or to specific repositories could update pull requests that read outside their scope.
- Fixed a vulnerability where \`pull_request_target\` workflows expanded local reusable workflows from the pull request's head branch instead of the trusted base branch.
- Fixed a privilege escalation that let a repository administrator promote a collaborator, including themselves, to owner.
- Security updates to the Go toolchain and several bundled dependencies.

**Fixes**

- Actions runs no longer execute a commit other than the one that triggered them.
- Endpoints that do not accept session authentication now return 401 instead of redirecting to the login page, so those requests no longer invalidate a valid session.
- Matrix webhooks no longer swallow messages through a state-key collision.
- Corrected quoting in git hook scripts, which caused hook errors.
- Replying to a review comment on a removed line of code works again.
- Adopting repositories from user settings works again.
- Deleted artifacts are excluded when calculating storage consumption.

Full notes: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.3.md`,
    es_ES: `Forgejo actualizado a 16.0.3, una versión de parche con correcciones de seguridad y de errores.

**Seguridad**

- Corregido el control de acceso en el endpoint de la API que actualiza solicitudes de incorporación de cambios: los tokens limitados a lo público o a repositorios concretos podían actualizar solicitudes que leían fuera de su alcance.
- Corregida una vulnerabilidad por la que los flujos de trabajo \`pull_request_target\` expandían los flujos reutilizables locales desde la rama de origen de la solicitud en lugar de la rama base de confianza.
- Corregida una escalada de privilegios que permitía a un administrador del repositorio ascender a un colaborador, incluido él mismo, a propietario.
- Actualizaciones de seguridad de la cadena de herramientas de Go y de varias dependencias incluidas.

**Correcciones**

- Las ejecuciones de Actions ya no ejecutan un commit distinto del que las desencadenó.
- Los endpoints que no aceptan autenticación por sesión ahora devuelven 401 en lugar de redirigir a la página de inicio de sesión, de modo que esas peticiones ya no invalidan una sesión válida.
- Los webhooks de Matrix ya no descartan mensajes por una colisión de claves de estado.
- Corregido el entrecomillado en los scripts de hooks de git, que provocaba errores en los hooks.
- Responder a un comentario de revisión en una línea de código eliminada vuelve a funcionar.
- La adopción de repositorios desde los ajustes de usuario vuelve a funcionar.
- Los artefactos eliminados se excluyen al calcular el consumo de almacenamiento.

Notas completas: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.3.md`,
    de_DE: `Forgejo auf 16.0.3 aktualisiert, ein Patch-Release mit Sicherheits- und Fehlerbehebungen.

**Sicherheit**

- Zugriffskontrolle des API-Endpunkts zum Aktualisieren von Pull Requests korrigiert: Tokens, die auf öffentliche oder auf bestimmte Repositories beschränkt sind, konnten Pull Requests aktualisieren, die außerhalb ihres Geltungsbereichs lasen.
- Sicherheitslücke behoben, bei der \`pull_request_target\`-Workflows lokale wiederverwendbare Workflows aus dem Head-Branch des Pull Requests statt aus dem vertrauenswürdigen Basis-Branch expandierten.
- Rechteausweitung behoben, mit der ein Repository-Administrator einen Mitarbeiter, auch sich selbst, zum Eigentümer befördern konnte.
- Sicherheitsaktualisierungen der Go-Toolchain und mehrerer mitgelieferter Abhängigkeiten.

**Fehlerbehebungen**

- Actions-Läufe führen keinen anderen Commit mehr aus als den, der sie ausgelöst hat.
- Endpunkte, die keine Sitzungsauthentifizierung akzeptieren, antworten nun mit 401, statt zur Anmeldeseite weiterzuleiten, sodass solche Anfragen eine gültige Sitzung nicht mehr ungültig machen.
- Matrix-Webhooks verwerfen durch eine State-Key-Kollision keine Nachrichten mehr.
- Fehlerhafte Quotierung in Git-Hook-Skripten behoben, die zu Hook-Fehlern führte.
- Das Antworten auf einen Review-Kommentar an einer entfernten Codezeile funktioniert wieder.
- Das Übernehmen von Repositories aus den Benutzereinstellungen funktioniert wieder.
- Gelöschte Artefakte werden bei der Berechnung des Speicherverbrauchs ausgeschlossen.

Vollständige Hinweise: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.3.md`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.3 — wydanie poprawkowe z poprawkami bezpieczeństwa i błędów.

**Bezpieczeństwo**

- Naprawiono kontrolę dostępu w punkcie końcowym API aktualizującym żądania scalenia: tokeny ograniczone do zasobów publicznych lub do wybranych repozytoriów mogły aktualizować żądania odczytujące dane spoza swojego zakresu.
- Naprawiono lukę bezpieczeństwa, przez którą przepływy pracy \`pull_request_target\` rozwijały lokalne przepływy pracy wielokrotnego użytku z gałęzi źródłowej żądania scalenia zamiast z zaufanej gałęzi bazowej.
- Naprawiono błąd umożliwiający podniesienie uprawnień, dzięki któremu administrator repozytorium mógł awansować współpracownika, w tym samego siebie, na właściciela.
- Aktualizacje bezpieczeństwa łańcucha narzędzi Go oraz kilku dołączonych zależności.

**Poprawki**

- Uruchomienia Actions nie wykonują już innego commita niż ten, który je wyzwolił.
- Punkty końcowe nieobsługujące uwierzytelniania sesyjnego zwracają teraz 401 zamiast przekierowania na stronę logowania, dzięki czemu takie żądania nie unieważniają już poprawnej sesji.
- Webhooki Matrix nie gubią już wiadomości z powodu kolizji kluczy stanu.
- Poprawiono cytowanie w skryptach hooków git, które powodowało błędy hooków.
- Odpowiadanie na komentarz recenzji przy usuniętej linii kodu znów działa.
- Przejmowanie repozytoriów z ustawień użytkownika znów działa.
- Usunięte artefakty są pomijane przy obliczaniu zużycia przestrzeni dyskowej.

Pełne informacje: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.3.md`,
    fr_FR: `Forgejo mis à jour vers 16.0.3, une version corrective apportant des correctifs de sécurité et de bogues.

**Sécurité**

- Correction du contrôle d'accès sur le point de terminaison de l'API mettant à jour les demandes d'ajout : les jetons limités au public ou à certains dépôts pouvaient mettre à jour des demandes lisant hors de leur portée.
- Correction d'une vulnérabilité où les flux de travail \`pull_request_target\` développaient les flux réutilisables locaux depuis la branche source de la demande d'ajout au lieu de la branche de base de confiance.
- Correction d'une élévation de privilèges permettant à un administrateur de dépôt de promouvoir un collaborateur, y compris lui-même, au rang de propriétaire.
- Mises à jour de sécurité de la chaîne d'outils Go et de plusieurs dépendances intégrées.

**Corrections**

- Les exécutions d'Actions ne portent plus que sur le commit qui les a déclenchées.
- Les points de terminaison qui n'acceptent pas l'authentification par session renvoient désormais 401 au lieu de rediriger vers la page de connexion, si bien que ces requêtes n'invalident plus une session valide.
- Les webhooks Matrix ne perdent plus de messages à cause d'une collision de clés d'état.
- Correction de la mise entre guillemets dans les scripts de hooks git, qui provoquait des erreurs de hooks.
- Répondre à un commentaire de revue sur une ligne de code supprimée fonctionne de nouveau.
- L'adoption de dépôts depuis les réglages utilisateur fonctionne de nouveau.
- Les artefacts supprimés sont exclus du calcul de la consommation de stockage.

Notes complètes : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.3.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
