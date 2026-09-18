import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.5:0',
  releaseNotes: {
    en_US: `Updated Forgejo through 16.0.5. This includes the 16.0.5 bug fixes and the security and bug fixes from 16.0.4.

**Security**

- Prevented malicious repository templates from reading host data or executing processes on the Forgejo host.
- Enforced repository-scoped API-token restrictions when maintainers edit pull-request branches.
- Prevented read-only and unauthenticated users from downloading hidden draft-release attachments.
- Updated bundled SSH and gRPC dependencies to address denial-of-service vulnerabilities.

**Fixes**

- Corrected organization-team and restricted-user repository permissions.
- Package quota calculations no longer count the same blob more than once.
- Actions logs from previous attempts remain visible while the newest attempt waits for a runner.
- Corrected Git process cleanup in compare and hook paths.

Full notes:

- 16.0.5: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.5.md
- 16.0.4: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md`,
    es_ES: `Forgejo actualizado hasta la versión 16.0.5. Incluye las correcciones de errores de 16.0.5 y las correcciones de seguridad y errores de 16.0.4.

**Seguridad**

- Se impide que las plantillas de repositorio maliciosas lean datos del sistema anfitrión o ejecuten procesos en el anfitrión de Forgejo.
- Se aplican las restricciones de los tokens de API limitados a repositorios cuando los mantenedores editan ramas de solicitudes de incorporación de cambios.
- Se impide que usuarios con acceso de solo lectura o sin autenticar descarguen adjuntos ocultos de versiones en borrador.
- Se actualizaron las dependencias incluidas de SSH y gRPC para corregir vulnerabilidades de denegación de servicio.

**Correcciones**

- Se corrigieron los permisos de repositorio para equipos de organizaciones y usuarios restringidos.
- Los cálculos de cuota de paquetes ya no cuentan el mismo blob más de una vez.
- Los registros de intentos anteriores de Actions permanecen visibles mientras el intento más reciente espera un ejecutor.
- Se corrigió la limpieza de procesos Git en las rutas de comparación y de hooks.

Notas completas:

- 16.0.5: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.5.md
- 16.0.4: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md`,
    de_DE: `Forgejo bis Version 16.0.5 aktualisiert. Enthalten sind die Fehlerbehebungen aus 16.0.5 sowie die Sicherheits- und Fehlerbehebungen aus 16.0.4.

**Sicherheit**

- Schädliche Repository-Vorlagen können keine Hostdaten mehr lesen oder Prozesse auf dem Forgejo-Host ausführen.
- Repository-beschränkte API-Token werden nun auch beim Bearbeiten von Pull-Request-Branches durch Maintainer berücksichtigt.
- Benutzer mit reinem Lesezugriff und nicht authentifizierte Benutzer können keine verborgenen Anhänge von Release-Entwürfen mehr herunterladen.
- Mitgelieferte SSH- und gRPC-Abhängigkeiten wurden aktualisiert, um Denial-of-Service-Sicherheitslücken zu beheben.

**Fehlerbehebungen**

- Repository-Berechtigungen für Organisationsteams und eingeschränkte Benutzer wurden korrigiert.
- Bei der Berechnung des Paketkontingents wird derselbe Blob nicht mehr mehrfach gezählt.
- Actions-Protokolle früherer Versuche bleiben sichtbar, während der neueste Versuch auf einen Runner wartet.
- Die Bereinigung von Git-Prozessen in Vergleichs- und Hook-Pfaden wurde korrigiert.

Vollständige Hinweise:

- 16.0.5: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.5.md
- 16.0.4: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md`,
    pl_PL: `Zaktualizowano Forgejo do wersji 16.0.5. Aktualizacja obejmuje poprawki błędów z wersji 16.0.5 oraz poprawki bezpieczeństwa i błędów z wersji 16.0.4.

**Bezpieczeństwo**

- Złośliwe szablony repozytoriów nie mogą już odczytywać danych hosta ani uruchamiać procesów na hoście Forgejo.
- Ograniczenia tokenów API przypisanych do repozytoriów są teraz egzekwowane, gdy opiekunowie edytują gałęzie żądań scalenia.
- Użytkownicy z dostępem tylko do odczytu oraz nieuwierzytelnieni nie mogą już pobierać ukrytych załączników wersji roboczych wydań.
- Zaktualizowano dołączone zależności SSH i gRPC, aby usunąć luki umożliwiające odmowę usługi.

**Poprawki**

- Poprawiono uprawnienia do repozytoriów dla zespołów organizacji i użytkowników z ograniczeniami.
- Obliczanie limitu pakietów nie zlicza już wielokrotnie tego samego bloba.
- Dzienniki wcześniejszych prób Actions pozostają widoczne, gdy najnowsza próba oczekuje na runnera.
- Poprawiono zamykanie procesów Git w ścieżkach porównywania i hooków.

Pełne informacje:

- 16.0.5: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.5.md
- 16.0.4: https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md`,
    fr_FR: `Forgejo mis à jour jusqu’à la version 16.0.5. Cette mise à jour comprend les corrections de bogues de la version 16.0.5 ainsi que les correctifs de sécurité et de bogues de la version 16.0.4.

**Sécurité**

- Les modèles de dépôt malveillants ne peuvent plus lire les données de l’hôte ni exécuter des processus sur l’hôte Forgejo.
- Les restrictions des jetons d’API limités à certains dépôts sont désormais appliquées lorsque les responsables modifient les branches des demandes d’ajout.
- Les utilisateurs disposant d’un accès en lecture seule et les utilisateurs non authentifiés ne peuvent plus télécharger les pièces jointes masquées des versions en brouillon.
- Les dépendances SSH et gRPC intégrées ont été mises à jour afin de corriger des vulnérabilités de déni de service.

**Corrections**

- Les autorisations de dépôt des équipes d’organisation et des utilisateurs restreints ont été corrigées.
- Le calcul du quota des paquets ne compte plus plusieurs fois le même blob.
- Les journaux des tentatives Actions précédentes restent visibles pendant que la tentative la plus récente attend un exécuteur.
- Le nettoyage des processus Git a été corrigé dans les chemins de comparaison et de hooks.

Notes complètes :

- 16.0.5 : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.5.md
- 16.0.4 : https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.4.md`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
