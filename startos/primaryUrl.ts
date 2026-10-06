import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { httpInterfaceId, mainHostId } from './utils'

export const primaryUrl = sdk.setupPrimaryUrl({
  id: 'set-primary-url',
  hostId: mainHostId,
  interfaceId: httpInterfaceId,
  metadata: {
    name: i18n('Set Primary URL'),
    description: i18n(
      'Choose the URL Forgejo puts in clone URLs, emails and the links it generates. SSH clone URLs use its hostname. Forgejo restarts to apply the change.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  field: { name: i18n('URL'), description: null },
  get: storeJson.read((s) => s.FORGEJO__server__ROOT_URL || null),
  set: (effects, url) =>
    storeJson.merge(effects, { FORGEJO__server__ROOT_URL: url }),
})
