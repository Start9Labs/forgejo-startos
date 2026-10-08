import { utils } from '@start9labs/start-sdk'
import { signingShape, storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { primaryUrl } from '../primaryUrl'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const signingDefaults = signingShape.parse({})

export const inputSpec = InputSpec.of({
  enabled: Value.toggle({
    name: i18n('Enable'),
    description: i18n(
      'Sign commits Forgejo creates itself, so branches that require signed commits accept pull request merges.',
    ),
    default: signingDefaults.enabled,
  }),
  name: Value.text({
    name: i18n('Signer Name'),
    description: i18n('Name Forgejo displays for its signing key.'),
    required: true,
    default: signingDefaults.name,
  }),
  email: Value.text({
    name: i18n('Signer Email'),
    description: i18n('Email Forgejo displays for its signing key.'),
    required: true,
    default: null,
    inputmode: 'email',
    patterns: [utils.Patterns.email],
  }),
  merges: Value.select({
    name: i18n('Sign Merges'),
    description: i18n(
      'Which pull request merges Forgejo signs. A branch that requires signed commits refuses an unsigned merge.\n- Always: every merge\n- Only approved pull requests: merges into protected branches, once the pull request is approved\n- Only when the base branch is signed: merges whose target branch already ends in a signed commit\n- Only when every pull request commit is signed: merges whose commits are all signed',
    ),
    default: signingDefaults.merges,
    values: {
      always: i18n('Always'),
      approved: i18n('Only approved pull requests'),
      basesigned: i18n('Only when the base branch is signed'),
      commitssigned: i18n('Only when every pull request commit is signed'),
    },
  }),
  crudActions: Value.toggle({
    name: i18n('Sign Web Edits'),
    description: i18n(
      'Also sign commits made by editing, uploading, or deleting files in the web interface.',
    ),
    default: signingDefaults.crudActions,
  }),
})

export const commitSigning = sdk.Action.withInput(
  // id
  'commit-signing',

  // metadata
  async ({ effects }) => ({
    name: i18n('Commit Signing'),
    description: i18n(
      'Sign pull request merges and other commits Forgejo creates with its own key',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => {
    const signing = await storeJson.read((s) => s.signing).once()
    if (!signing) return {}
    const url = await primaryUrl.bestUsable(effects).once()
    const host = url && URL.canParse(url) ? new URL(url).hostname : ''
    return {
      ...signing,
      email: signing.email || (host ? `forgejo@${host}` : ''),
    }
  },

  // the execution function
  async ({ effects, input }) => {
    await storeJson.merge(effects, { signing: input })
    const key = await storeJson.read((s) => s.signingKey).once()
    if (!key) throw new Error(i18n('Forgejo has no signing key yet'))
    return {
      version: '1',
      title: i18n('Commit Signing'),
      message: input.enabled
        ? i18n(
            'Forgejo signs with this public key. Add it wherever its signatures need to verify.',
          )
        : i18n(
            'Signing is off. This is the public key Forgejo signs with when it is on.',
          ),
      result: {
        type: 'multiline',
        value: key.publicKey,
        copyable: true,
        filename: 'forgejo-signing-key.asc',
      },
    }
  },
)
