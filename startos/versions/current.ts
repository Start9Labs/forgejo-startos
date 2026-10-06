import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.5:3',
  releaseNotes: {
    en_US: `Adds a Commit Signing action. When enabled, Forgejo signs pull request merges, and optionally web edits, with its own key, so branches that require signed commits can accept merges. It is off by default, and the action shows the public key to trust.

Git LFS now works. Configure adds Allow Local Network Imports, for importing or mirroring from a git server on your local network.

- Open UI opens Forgejo at its primary URL.
- If the primary URL stops being one of Forgejo's addresses, Forgejo uses its public domain if it has one, otherwise its .local address, until it returns, and a task asks you to choose another. Your choice is kept.
- Disable Registrations asks for confirmation before running.
- Commit Signing shows the public key on several lines and offers it as a file to download.
- Reset Admin Password starts with no admin account selected.
- The options in Configure and Commit Signing explain what each choice does.`,
    es_ES: `Añade la acción Firma de commits. Al activarla, Forgejo firma las fusiones de pull requests, y opcionalmente las ediciones web, con su propia clave, para que las ramas que exigen commits firmados puedan aceptar fusiones. Está desactivada por defecto y la acción muestra la clave pública en la que confiar.

Git LFS ya funciona. Configurar añade Permitir importaciones desde la red local, para importar o crear espejos desde un servidor git de su red local.

- Abrir interfaz abre Forgejo en su URL principal.
- Si la URL principal deja de ser una de las direcciones de Forgejo, Forgejo usa su dominio público si tiene uno o, si no, su dirección .local, hasta que vuelva, y una tarea le pide elegir otra. Su elección se conserva.
- Deshabilitar registros pide confirmación antes de ejecutarse.
- Firma de commits muestra la clave pública en varias líneas y la ofrece como archivo para descargar.
- Restablecer contraseña de administrador empieza sin ninguna cuenta de administrador seleccionada.
- Las opciones de Configurar y Firma de commits explican qué hace cada elección.`,
    de_DE: `Fügt die Aktion Commit-Signierung hinzu. Ist sie aktiviert, signiert Forgejo Pull-Request-Merges und optional Web-Bearbeitungen mit einem eigenen Schlüssel, sodass Branches, die signierte Commits verlangen, Merges annehmen können. Sie ist standardmäßig aus, und die Aktion zeigt den öffentlichen Schlüssel, dem vertraut werden muss.

Git LFS funktioniert jetzt. Konfigurieren bietet nun Importe aus dem lokalen Netzwerk erlauben, um von einem Git-Server im lokalen Netzwerk zu importieren oder zu spiegeln.

- „Oberfläche öffnen“ öffnet Forgejo unter seiner primären URL.
- Ist die primäre URL keine Adresse von Forgejo mehr, verwendet Forgejo seine öffentliche Domain, falls vorhanden, sonst seine .local-Adresse, bis sie zurückkehrt, und eine Aufgabe fordert Sie auf, eine andere zu wählen. Ihre Wahl bleibt erhalten.
- „Registrierungen deaktivieren“ fragt vor der Ausführung nach einer Bestätigung.
- „Commit-Signierung“ zeigt den öffentlichen Schlüssel über mehrere Zeilen an und bietet ihn als Datei zum Herunterladen an.
- „Admin-Passwort zurücksetzen“ beginnt ohne ausgewähltes Admin-Konto.
- Die Optionen in „Konfigurieren“ und „Commit-Signierung“ erklären, was jede Auswahl bewirkt.`,
    pl_PL: `Dodaje akcję Podpisywanie commitów. Po włączeniu Forgejo podpisuje scalenia pull requestów, a opcjonalnie także edycje w przeglądarce, własnym kluczem, dzięki czemu gałęzie wymagające podpisanych commitów mogą przyjmować scalenia. Domyślnie jest wyłączona, a akcja pokazuje klucz publiczny, któremu należy zaufać.

Git LFS już działa. Konfiguruj zawiera nową opcję Zezwalaj na importy z sieci lokalnej, do importu lub kopii lustrzanych z serwera git w sieci lokalnej.

- „Otwórz interfejs” otwiera Forgejo pod jego głównym URL.
- Jeśli główny URL przestanie być jednym z adresów Forgejo, Forgejo używa swojej domeny publicznej, jeśli ją ma, a w przeciwnym razie adresu .local, dopóki nie wróci, a zadanie prosi o wybranie innego. Twój wybór zostaje zachowany.
- „Wyłącz rejestracje” prosi o potwierdzenie przed uruchomieniem.
- „Podpisywanie commitów” pokazuje klucz publiczny w kilku wierszach i udostępnia go jako plik do pobrania.
- „Zresetuj hasło administratora” zaczyna bez wybranego konta administratora.
- Opcje w „Konfiguruj” i „Podpisywanie commitów” wyjaśniają, co oznacza każdy wybór.`,
    fr_FR: `Ajoute l'action Signature des commits. Une fois activée, Forgejo signe les fusions de pull requests, et en option les modifications web, avec sa propre clé, pour que les branches qui exigent des commits signés puissent accepter les fusions. Elle est désactivée par défaut et l'action affiche la clé publique à approuver.

Git LFS fonctionne désormais. Configurer ajoute Autoriser les imports depuis le réseau local, pour importer ou créer des miroirs depuis un serveur git de votre réseau local.

- Ouvrir l'interface ouvre Forgejo sur son URL principale.
- Si l'URL principale n'est plus l'une des adresses de Forgejo, Forgejo utilise son domaine public s'il en a un, sinon son adresse .local, jusqu'à son retour, et une tâche vous demande d'en choisir une autre. Votre choix est conservé.
- Désactiver les inscriptions demande une confirmation avant de s'exécuter.
- Signature des commits affiche la clé publique sur plusieurs lignes et la propose en fichier à télécharger.
- Réinitialiser le mot de passe administrateur commence sans compte administrateur sélectionné.
- Les options de Configurer et de Signature des commits expliquent ce que fait chaque choix.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
