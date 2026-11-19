import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '17.0.2:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 17.0.2. Requires StartOS 0.4.2 or later.

- Security: patches several vulnerabilities, including SSH key spoofing on the built-in SSH server, setting an unverified email as primary, and access tokens reading data beyond their scope
- Fix: renamed and copied files missing from diffs
- Fix: failures on concurrent container image uploads

[Full release notes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.2.md)`,
    es_ES: `Forgejo actualizado a 17.0.2. Requiere StartOS 0.4.2 o posterior.

- Seguridad: corrige varias vulnerabilidades, entre ellas la suplantación de claves SSH en el servidor SSH integrado, la posibilidad de fijar un correo no verificado como principal y tokens de acceso que leían datos fuera de su alcance
- Corrección: archivos renombrados y copiados que faltaban en los diffs
- Corrección: errores al subir imágenes de contenedor de forma simultánea

[Notas de la versión completas](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.2.md)`,
    de_DE: `Forgejo auf 17.0.2 aktualisiert. Erfordert StartOS 0.4.2 oder neuer.

- Sicherheit: behebt mehrere Schwachstellen, darunter das Fälschen von SSH-Schlüsseln beim integrierten SSH-Server, das Festlegen einer unbestätigten E-Mail-Adresse als primäre Adresse und Zugriffstoken, die Daten außerhalb ihres Geltungsbereichs lesen konnten
- Korrektur: umbenannte und kopierte Dateien fehlten in Diffs
- Korrektur: Fehler beim gleichzeitigen Hochladen von Container-Images

[Vollständige Versionshinweise](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.2.md)`,
    pl_PL: `Zaktualizowano Forgejo do wersji 17.0.2. Wymaga StartOS 0.4.2 lub nowszego.

- Bezpieczeństwo: łata kilka podatności, w tym podszywanie się pod klucze SSH na wbudowanym serwerze SSH, ustawianie niezweryfikowanego adresu e-mail jako głównego oraz tokeny dostępu odczytujące dane poza swoim zakresem
- Poprawka: brakujące w diffach pliki o zmienionej nazwie i skopiowane
- Poprawka: błędy przy jednoczesnym przesyłaniu obrazów kontenerów

[Pełne informacje o wydaniu](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.2.md)`,
    fr_FR: `Forgejo mis à jour vers 17.0.2. Nécessite StartOS 0.4.2 ou une version ultérieure.

- Sécurité : corrige plusieurs vulnérabilités, dont l'usurpation de clés SSH sur le serveur SSH intégré, la définition d'une adresse e-mail non vérifiée comme adresse principale et des jetons d'accès lisant des données hors de leur portée
- Correction : fichiers renommés et copiés absents des diffs
- Correction : échecs lors de l'envoi simultané d'images de conteneur

[Notes de version complètes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/17.0.2.md)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
