import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  FORGEJO__repository__DEFAULT_BRANCH: Value.text({
    name: i18n('Default Branch'),
    description: i18n(
      'Branch name given to newly created repositories. Existing repositories are unaffected.',
    ),
    required: true,
    default: 'main',
    patterns: [
      {
        regex: '^[A-Za-z0-9][A-Za-z0-9._/-]*$',
        description: i18n('Must be a valid branch name'),
      },
    ],
  }),
  FORGEJO__repository__DEFAULT_PRIVATE: Value.select({
    name: i18n('Default Repository Visibility'),
    description: i18n(
      'Which visibility the new repository form starts on. The creator can still change it.\n- Last used: whatever that person chose for their previous repository\n- Private: only the owner and people given access can see it\n- Public: anyone who can see this Forgejo can see it',
    ),
    default: 'last',
    values: {
      last: i18n('Last used'),
      private: i18n('Private'),
      public: i18n('Public'),
    },
  }),
  FORGEJO__repository__ENABLE_PUSH_CREATE_USER: Value.toggle({
    name: i18n('Push to Create (Users)'),
    description: i18n(
      'Allow users to create a repository by pushing to one that does not exist yet.',
    ),
    default: false,
  }),
  FORGEJO__repository__ENABLE_PUSH_CREATE_ORG: Value.toggle({
    name: i18n('Push to Create (Organizations)'),
    description: i18n(
      'Allow organization members to create a repository by pushing to one that does not exist yet.',
    ),
    default: false,
  }),
  FORGEJO__service__REQUIRE_SIGNIN_VIEW: Value.toggle({
    name: i18n('Require Sign-in to View'),
    description: i18n(
      'Hide every page, including public repositories, from visitors who are not signed in.',
    ),
    default: false,
  }),
  FORGEJO__service__DEFAULT_KEEP_EMAIL_PRIVATE: Value.toggle({
    name: i18n('Keep Email Private by Default'),
    description: i18n(
      'New accounts hide their email address from other users.',
    ),
    default: false,
  }),
  FORGEJO__service__DEFAULT_ALLOW_CREATE_ORGANIZATION: Value.toggle({
    name: i18n('Allow Creating Organizations by Default'),
    description: i18n('New accounts may create organizations.'),
    default: true,
  }),
  FORGEJO__service__DEFAULT_USER_VISIBILITY: Value.select({
    name: i18n('Default User Visibility'),
    description: i18n(
      "Who can see a new account's profile and activity. Each user can change their own later.\n- Public: everyone\n- Limited (signed-in users only): only people signed in to this Forgejo\n- Private: only members of the organizations the user belongs to",
    ),
    default: 'public',
    values: {
      public: i18n('Public'),
      limited: i18n('Limited (signed-in users only)'),
      private: i18n('Private'),
    },
  }),
  FORGEJO__server__LANDING_PAGE: Value.select({
    name: i18n('Landing Page'),
    description: i18n(
      "What visitors who are not signed in see at Forgejo's main address. Signed-in users get their dashboard.\n- Home: Forgejo's welcome page\n- Explore: the list of public repositories\n- Organizations: the list of organizations\n- Sign In: the sign-in form",
    ),
    default: 'home',
    values: {
      home: i18n('Home'),
      explore: i18n('Explore'),
      organizations: i18n('Organizations'),
      login: i18n('Sign In'),
    },
  }),
  FORGEJO__actions__ENABLED: Value.toggle({
    name: i18n('Enable Actions'),
    description: i18n(
      'Run CI/CD workflows with Forgejo Actions. Forgejo Runner requires this to be on.',
    ),
    default: true,
  }),
  FORGEJO__migrations__ALLOW_LOCALNETWORKS: Value.toggle({
    name: i18n('Allow Local Network Imports'),
    description: i18n(
      'Allow copying repositories from computers on your home network, such as another git server in your house. Copying from public sites like GitHub works either way.',
    ),
    warning: i18n(
      'Only turn this on if you trust everyone with an account on this Forgejo. Anyone who can create a repository could use it to look into other devices on your home network and other services on this server.',
    ),
    default: false,
  }),
})

export const configure = sdk.Action.withInput(
  // id
  'configure',

  // metadata
  async ({ effects }) => ({
    name: i18n('Configure'),
    description: i18n(
      'Set Forgejo options that are only available in its configuration file',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => storeJson.read((s) => s.config).once(),

  // the execution function
  async ({ effects, input }) => storeJson.merge(effects, { config: input }),
)
