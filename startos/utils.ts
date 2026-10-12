import { T, utils } from '@start9labs/start-sdk'
import { i18n } from './i18n'
import { sdk } from './sdk'

export const uiPort = 3000

// Host id (the `sdk.MultiHost.of` group) carrying both the http and ssh
// interfaces — distinct from the interface ids exported on it. Used for
// `sdk.host.getOwn` lookups here and by dependents (forgejo-runner) reading
// forgejo's http.
export const mainHostId = 'main'
export const httpInterfaceId = 'http'
export const sshInterfaceId = 'ssh'

export function getSecretKey() {
  return utils.getDefaultString({
    charset: 'A-Z,a-z,0-9,+,/',
    len: 32,
  })
}

export function getPassword() {
  return utils.getDefaultString({
    charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
    len: 22,
  })
}

export function credentialResult(
  username: string,
  password: string,
): T.ActionResultValue {
  return {
    type: 'group',
    value: [
      {
        type: 'single',
        name: i18n('Username'),
        description: null,
        value: username,
        masked: false,
        copyable: true,
        qr: false,
        launchable: null,
      },
      {
        type: 'single',
        name: i18n('Password'),
        description: null,
        value: password,
        masked: true,
        copyable: true,
        qr: false,
        launchable: null,
      },
    ],
  }
}

export const mount = sdk.Mounts.of().mountVolume({
  volumeId: 'main',
  subpath: null,
  mountpoint: '/data',
  readonly: false,
})
