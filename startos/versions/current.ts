import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '17.0.1:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 17.0.1, including the 17.0 major release.

**Security and fixes:** Fixes untrusted commits running through pull-request review workflows, NuGet token-scope enforcement, repository-list visibility, command substitution in CLI instructions, and project access checks. Fixes the Git configuration regression that blocked pushes and merges in 17.0.0.

**Highlights**

- Funding buttons from FUNDING.yml, issue and pull-request autocomplete, and improved LFS navigation.
- Workflow/job webhooks, job-log filters, and APIs to rerun workflows and jobs. Job summaries require Forgejo Runner 13.2 or newer.
- Fixed a stale password being retained when switching to SMTP without a password.

**Upgrade precautions**

- Make a full backup before updating. After updating, migrate deprecated action-run webhooks to workflow-run events only after checking receiver compatibility.
- Absolute links in repository documents now resolve from the repository root; use ./ for links relative to the document's directory.
- Custom duration settings require explicit units. The default log filename becomes forgejo.log, with a gitea.log compatibility symlink.

[17.0 release notes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md) · [17.0.1 fixes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.1.md)

Adds Forward Email to the SMTP provider presets and updates start-sdk to 3.1.1 with container-startup fixes.`,
    es_ES: `Forgejo actualizado a 17.0.1, incluidos los cambios de la versión mayor 17.0.

**Seguridad y correcciones:** Corrige la ejecución de commits no confiables mediante flujos de revisión de solicitudes, la aplicación de los permisos de tokens NuGet, la visibilidad de listas de repositorios, la sustitución de comandos en instrucciones de CLI y las comprobaciones de acceso a proyectos. Corrige la regresión de configuración de Git que bloqueaba envíos y fusiones en 17.0.0.

**Novedades destacadas**

- Botones de donación desde FUNDING.yml, autocompletado de incidencias y solicitudes de incorporación de cambios, y navegación LFS mejorada.
- Webhooks de flujos de trabajo y trabajos, filtros de registros y API para volver a ejecutarlos. Los resúmenes de trabajos requieren Forgejo Runner 13.2 o posterior.
- Corregida la conservación de una contraseña anterior al cambiar a SMTP sin contraseña.

**Precauciones al actualizar**

- Haga una copia de seguridad completa antes de actualizar. Después, migre los webhooks obsoletos de ejecuciones de acciones a eventos de ejecuciones de flujos de trabajo solo tras comprobar la compatibilidad de los receptores.
- Los enlaces absolutos en documentos de repositorios ahora se resuelven desde la raíz del repositorio; use ./ para enlaces relativos al directorio del documento.
- Los ajustes de duración personalizados requieren unidades explícitas. El archivo de registro predeterminado pasa a ser forgejo.log, con un enlace simbólico gitea.log por compatibilidad.

[Notas de la versión 17.0](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md) · [Correcciones de 17.0.1](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.1.md)

Añade Forward Email a los proveedores SMTP predefinidos y actualiza start-sdk a 3.1.1 con correcciones del inicio de contenedores.`,
    de_DE: `Forgejo auf 17.0.1 aktualisiert, einschließlich des Hauptreleases 17.0.

**Sicherheit und Fehlerbehebungen:** Behebt die Ausführung nicht vertrauenswürdiger Commits durch Pull-Request-Review-Workflows, die Durchsetzung von NuGet-Token-Berechtigungen, die Sichtbarkeit von Repository-Listen, Befehlssubstitution in CLI-Anweisungen und Projektzugriffsprüfungen. Behebt den Git-Konfigurationsfehler, der Pushes und Merges in 17.0.0 blockierte.

**Höhepunkte**

- Spenden-Schaltflächen aus FUNDING.yml, Autovervollständigung für Issues und Pull Requests sowie verbesserte LFS-Navigation.
- Webhooks für Workflows und Jobs, Filter für Jobprotokolle und APIs zum erneuten Ausführen von Workflows und Jobs. Jobzusammenfassungen benötigen Forgejo Runner 13.2 oder neuer.
- Fehler behoben, bei dem beim Wechsel zu SMTP ohne Passwort das alte Passwort erhalten blieb.

**Vorsichtsmaßnahmen beim Upgrade**

- Erstellen Sie vor dem Update ein vollständiges Backup. Migrieren Sie danach veraltete Action-Run-Webhooks erst nach Prüfung der Empfängerkompatibilität auf Workflow-Run-Ereignisse.
- Absolute Links in Repository-Dokumenten werden nun relativ zur Repository-Wurzel aufgelöst; verwenden Sie ./ für Links relativ zum Dokumentverzeichnis.
- Benutzerdefinierte Zeitdauer-Einstellungen benötigen explizite Einheiten. Die Standard-Protokolldatei heißt nun forgejo.log, mit einem gitea.log-Symlink zur Kompatibilität.

[Versionshinweise zu 17.0](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md) · [Fehlerbehebungen in 17.0.1](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.1.md)

Fügt Forward Email zu den vordefinierten SMTP-Anbietern hinzu und aktualisiert start-sdk auf 3.1.1 mit Fehlerbehebungen beim Containerstart.`,
    pl_PL: `Zaktualizowano Forgejo do 17.0.1, wraz ze zmianami głównego wydania 17.0.

**Bezpieczeństwo i poprawki:** Naprawiono wykonywanie niezaufanych commitów przez przepływy pracy recenzji żądań scalenia, egzekwowanie uprawnień tokenów NuGet, widoczność list repozytoriów, podstawianie poleceń w instrukcjach CLI i kontrole dostępu do projektów. Naprawiono regresję konfiguracji Git blokującą wysyłanie zmian i scalanie w 17.0.0.

**Najważniejsze zmiany**

- Przyciski darowizn z FUNDING.yml, autouzupełnianie zgłoszeń i żądań scalenia oraz ulepszona nawigacja LFS.
- Webhooki przepływów pracy i zadań, filtry logów zadań oraz API do ponownego uruchamiania przepływów pracy i zadań. Podsumowania zadań wymagają Forgejo Runner 13.2 lub nowszego.
- Naprawiono zachowywanie starego hasła po przełączeniu na SMTP bez hasła.

**Środki ostrożności przy aktualizacji**

- Przed aktualizacją wykonaj pełną kopię zapasową. Po aktualizacji przenieś przestarzałe webhooki uruchomień akcji na zdarzenia uruchomień przepływów pracy dopiero po sprawdzeniu zgodności odbiorców.
- Bezwzględne odnośniki w dokumentach repozytorium są teraz rozwiązywane względem katalogu głównego repozytorium; użyj ./ dla odnośników względem katalogu dokumentu.
- Własne ustawienia czasu trwania wymagają jawnych jednostek. Domyślny plik logów to teraz forgejo.log, z dowiązaniem symbolicznym gitea.log dla zgodności.

[Informacje o wydaniu 17.0](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md) · [Poprawki w 17.0.1](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.1.md)

Dodaje Forward Email do predefiniowanych dostawców SMTP i aktualizuje start-sdk do 3.1.1 z poprawkami uruchamiania kontenerów.`,
    fr_FR: `Forgejo mis à jour vers 17.0.1, avec les changements de la version majeure 17.0.

**Sécurité et correctifs :** Corrige l'exécution de commits non fiables par les workflows de revue de demandes d'ajout, l'application des permissions des jetons NuGet, la visibilité des listes de dépôts, la substitution de commandes dans les instructions CLI et les contrôles d'accès aux projets. Corrige la régression de configuration Git qui bloquait les envois et les fusions dans 17.0.0.

**Points forts**

- Boutons de don depuis FUNDING.yml, autocomplétion des tickets et demandes d'ajout, et navigation LFS améliorée.
- Webhooks de workflows et de tâches, filtres des journaux et API pour relancer les workflows et les tâches. Les résumés de tâches nécessitent Forgejo Runner 13.2 ou ultérieur.
- Correction de la conservation d'un ancien mot de passe lors du passage à SMTP sans mot de passe.

**Précautions de mise à jour**

- Effectuez une sauvegarde complète avant la mise à jour. Ensuite, migrez les anciens webhooks d'exécution d'actions vers les événements d'exécution de workflows uniquement après avoir vérifié la compatibilité des récepteurs.
- Les liens absolus dans les documents des dépôts sont désormais résolus depuis la racine du dépôt ; utilisez ./ pour les liens relatifs au dossier du document.
- Les paramètres de durée personnalisés nécessitent des unités explicites. Le fichier journal par défaut devient forgejo.log, avec un lien symbolique gitea.log pour la compatibilité.

[Notes de la version 17.0](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md) · [Correctifs de 17.0.1](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.1.md)

Ajoute Forward Email aux fournisseurs SMTP prédéfinis et met à jour start-sdk vers 3.1.1 avec des correctifs de démarrage des conteneurs.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
