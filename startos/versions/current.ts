import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '17.0.0:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 17.0.0, a major release.

**Warning:** Upstream advises against upgrading to 17.0.0 while investigating failures affecting pushes, merges, and other code operations. Wait for upstream to resolve this before updating: https://codeberg.org/forgejo/forgejo/releases/tag/v17.0.0

**Highlights**

- Funding buttons from FUNDING.yml, issue and pull-request autocomplete, and improved LFS navigation.
- Workflow/job webhooks, job-log filters, and APIs to rerun workflows and jobs. Job summaries require Forgejo Runner 13.2 or newer.
- Fixed a stale password being retained when switching to SMTP without a password.

**Upgrade precautions**

- Make a full backup before updating. After updating, migrate deprecated action-run webhooks to workflow-run events only after checking receiver compatibility.
- Absolute links in repository documents now resolve from the repository root; use ./ for links relative to the document's directory.
- Custom duration settings require explicit units. The default log filename becomes forgejo.log, with a gitea.log compatibility symlink.

[Full upstream release notes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md)`,
    es_ES: `Forgejo actualizado a 17.0.0, una versión mayor.

**Advertencia:** El proyecto original desaconseja actualizar a 17.0.0 mientras investiga fallos en los envíos, las fusiones y otras operaciones de código. Espere a que se resuelvan antes de actualizar: https://codeberg.org/forgejo/forgejo/releases/tag/v17.0.0

**Novedades destacadas**

- Botones de donación desde FUNDING.yml, autocompletado de incidencias y solicitudes de incorporación de cambios, y navegación LFS mejorada.
- Webhooks de flujos de trabajo y trabajos, filtros de registros y API para volver a ejecutarlos. Los resúmenes de trabajos requieren Forgejo Runner 13.2 o posterior.
- Corregida la conservación de una contraseña anterior al cambiar a SMTP sin contraseña.

**Precauciones al actualizar**

- Haga una copia de seguridad completa antes de actualizar. Después, migre los webhooks obsoletos de ejecuciones de acciones a eventos de ejecuciones de flujos de trabajo solo tras comprobar la compatibilidad de los receptores.
- Los enlaces absolutos en documentos de repositorios ahora se resuelven desde la raíz del repositorio; use ./ para enlaces relativos al directorio del documento.
- Los ajustes de duración personalizados requieren unidades explícitas. El archivo de registro predeterminado pasa a ser forgejo.log, con un enlace simbólico gitea.log por compatibilidad.

[Notas completas de la versión original](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md)`,
    de_DE: `Forgejo auf 17.0.0 aktualisiert, ein Hauptrelease.

**Warnung:** Das Upstream-Projekt rät vom Upgrade auf 17.0.0 ab, während Fehler bei Pushes, Merges und anderen Codeoperationen untersucht werden. Warten Sie vor dem Update auf eine Lösung: https://codeberg.org/forgejo/forgejo/releases/tag/v17.0.0

**Höhepunkte**

- Spenden-Schaltflächen aus FUNDING.yml, Autovervollständigung für Issues und Pull Requests sowie verbesserte LFS-Navigation.
- Webhooks für Workflows und Jobs, Filter für Jobprotokolle und APIs zum erneuten Ausführen von Workflows und Jobs. Jobzusammenfassungen benötigen Forgejo Runner 13.2 oder neuer.
- Fehler behoben, bei dem beim Wechsel zu SMTP ohne Passwort das alte Passwort erhalten blieb.

**Vorsichtsmaßnahmen beim Upgrade**

- Erstellen Sie vor dem Update ein vollständiges Backup. Migrieren Sie danach veraltete Action-Run-Webhooks erst nach Prüfung der Empfängerkompatibilität auf Workflow-Run-Ereignisse.
- Absolute Links in Repository-Dokumenten werden nun relativ zur Repository-Wurzel aufgelöst; verwenden Sie ./ für Links relativ zum Dokumentverzeichnis.
- Benutzerdefinierte Zeitdauer-Einstellungen benötigen explizite Einheiten. Die Standard-Protokolldatei heißt nun forgejo.log, mit einem gitea.log-Symlink zur Kompatibilität.

[Vollständige Upstream-Versionshinweise](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md)`,
    pl_PL: `Zaktualizowano Forgejo do 17.0.0 — wydanie główne.

**Ostrzeżenie:** Projekt upstream odradza aktualizację do 17.0.0 podczas badania błędów wysyłania zmian, scalania i innych operacji na kodzie. Przed aktualizacją poczekaj na rozwiązanie tych problemów: https://codeberg.org/forgejo/forgejo/releases/tag/v17.0.0

**Najważniejsze zmiany**

- Przyciski darowizn z FUNDING.yml, autouzupełnianie zgłoszeń i żądań scalenia oraz ulepszona nawigacja LFS.
- Webhooki przepływów pracy i zadań, filtry logów zadań oraz API do ponownego uruchamiania przepływów pracy i zadań. Podsumowania zadań wymagają Forgejo Runner 13.2 lub nowszego.
- Naprawiono zachowywanie starego hasła po przełączeniu na SMTP bez hasła.

**Środki ostrożności przy aktualizacji**

- Przed aktualizacją wykonaj pełną kopię zapasową. Po aktualizacji przenieś przestarzałe webhooki uruchomień akcji na zdarzenia uruchomień przepływów pracy dopiero po sprawdzeniu zgodności odbiorców.
- Bezwzględne odnośniki w dokumentach repozytorium są teraz rozwiązywane względem katalogu głównego repozytorium; użyj ./ dla odnośników względem katalogu dokumentu.
- Własne ustawienia czasu trwania wymagają jawnych jednostek. Domyślny plik logów to teraz forgejo.log, z dowiązaniem symbolicznym gitea.log dla zgodności.

[Pełne informacje o wydaniu upstream](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md)`,
    fr_FR: `Forgejo mis à jour vers 17.0.0, une version majeure.

**Avertissement :** Le projet amont déconseille la mise à jour vers 17.0.0 pendant l'enquête sur des échecs d'envoi, de fusion et d'autres opérations sur le code. Attendez leur résolution avant de mettre à jour : https://codeberg.org/forgejo/forgejo/releases/tag/v17.0.0

**Points forts**

- Boutons de don depuis FUNDING.yml, autocomplétion des tickets et demandes d'ajout, et navigation LFS améliorée.
- Webhooks de workflows et de tâches, filtres des journaux et API pour relancer les workflows et les tâches. Les résumés de tâches nécessitent Forgejo Runner 13.2 ou ultérieur.
- Correction de la conservation d'un ancien mot de passe lors du passage à SMTP sans mot de passe.

**Précautions de mise à jour**

- Effectuez une sauvegarde complète avant la mise à jour. Ensuite, migrez les anciens webhooks d'exécution d'actions vers les événements d'exécution de workflows uniquement après avoir vérifié la compatibilité des récepteurs.
- Les liens absolus dans les documents des dépôts sont désormais résolus depuis la racine du dépôt ; utilisez ./ pour les liens relatifs au dossier du document.
- Les paramètres de durée personnalisés nécessitent des unités explicites. Le fichier journal par défaut devient forgejo.log, avec un lien symbolique gitea.log pour la compatibilité.

[Notes complètes de la version amont](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.0.md)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
