import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// Keys are Forgejo env vars; every one is always passed, since Forgejo persists them into app.ini.
const configShape = z.looseObject({
  FORGEJO__repository__DEFAULT_BRANCH: z.string().catch('main'),
  FORGEJO__repository__DEFAULT_PRIVATE: z
    .enum(['last', 'private', 'public'])
    .catch('last'),
  FORGEJO__repository__ENABLE_PUSH_CREATE_USER: z.boolean().catch(false),
  FORGEJO__repository__ENABLE_PUSH_CREATE_ORG: z.boolean().catch(false),
  FORGEJO__service__REQUIRE_SIGNIN_VIEW: z.boolean().catch(false),
  FORGEJO__service__DEFAULT_KEEP_EMAIL_PRIVATE: z.boolean().catch(false),
  FORGEJO__service__DEFAULT_ALLOW_CREATE_ORGANIZATION: z.boolean().catch(true),
  FORGEJO__service__DEFAULT_USER_VISIBILITY: z
    .enum(['public', 'limited', 'private'])
    .catch('public'),
  FORGEJO__server__LANDING_PAGE: z
    .enum(['home', 'explore', 'organizations', 'login'])
    .catch('home'),
  FORGEJO__actions__ENABLED: z.boolean().catch(true),
  FORGEJO__migrations__ALLOW_LOCALNETWORKS: z.boolean().catch(false),
})

export const signingShape = z.looseObject({
  enabled: z.boolean().catch(false),
  name: z.string().catch('Forgejo'),
  email: z.string().catch(''),
  merges: z
    .enum(['always', 'approved', 'basesigned', 'commitssigned'])
    .catch('approved'),
  crudActions: z.boolean().catch(false),
})

const shape = z.looseObject({
  FORGEJO__server__ROOT_URL: z.string().catch(''),
  FORGEJO__security__SECRET_KEY: z.string(),
  FORGEJO__service__DISABLE_REGISTRATION: z.boolean().catch(true),
  smtp: smtpShape,
  config: configShape.catch(() => configShape.parse({})),
  signing: signingShape.catch(() => signingShape.parse({})),
  signingKey: z
    .looseObject({ fingerprint: z.string(), publicKey: z.string() })
    .nullable()
    .catch(null),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: './store.json' },
  shape,
)
