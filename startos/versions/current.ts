import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '16.0.6:0',
  releaseNotes: {
    en_US: `Updated Forgejo to 16.0.6. Fixes security flaws in fork pull-request review workflows, label permissions, and release attachment metadata access. Also fixes auto-merging pull requests from forks and reduces memory use when uploading Actions logs and artifacts. Updated start-sdk to 3.0.6.

[Full upstream release notes](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.6.md)`,
    es_ES: `Forgejo actualizado a 16.0.6. Corrige fallos de seguridad en los flujos de revisión de solicitudes de incorporación de cambios desde forks, los permisos de etiquetas y el acceso a metadatos de archivos adjuntos de versiones. También corrige la fusión automática de solicitudes desde forks y reduce el uso de memoria al subir registros y artefactos de Actions. start-sdk actualizado a 3.0.6.

[Notas completas de la versión original](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.6.md)`,
    de_DE: `Forgejo auf 16.0.6 aktualisiert. Behebt Sicherheitslücken in Review-Workflows für Pull Requests aus Forks, bei Label-Berechtigungen und beim Zugriff auf Metadaten von Release-Anhängen. Behebt außerdem das automatische Zusammenführen von Pull Requests aus Forks und reduziert den Speicherverbrauch beim Hochladen von Actions-Protokollen und -Artefakten. start-sdk auf 3.0.6 aktualisiert.

[Vollständige Upstream-Versionshinweise](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.6.md)`,
    pl_PL: `Zaktualizowano Forgejo do 16.0.6. Naprawiono luki bezpieczeństwa w przepływach recenzji żądań scalenia z forków, uprawnieniach do etykiet i dostępie do metadanych załączników wydań. Naprawiono również automatyczne scalanie żądań z forków i zmniejszono zużycie pamięci podczas przesyłania logów i artefaktów Actions. Zaktualizowano start-sdk do 3.0.6.

[Pełne informacje o wydaniu upstream](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.6.md)`,
    fr_FR: `Forgejo mis à jour vers 16.0.6. Corrige des failles de sécurité dans les workflows de revue des demandes d'ajout provenant de forks, les permissions des étiquettes et l'accès aux métadonnées des pièces jointes des versions. Corrige également la fusion automatique des demandes provenant de forks et réduit la consommation de mémoire lors de l'envoi des journaux et artefacts Actions. start-sdk mis à jour vers 3.0.6.

[Notes complètes de la version amont](https://codeberg.org/forgejo/forgejo/src/branch/forgejo/release-notes-published/16.0.6.md)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
