import { i18n } from '../i18n'
import { primaryUrl } from '../primaryUrl'

export const primaryUrlTask = primaryUrl.setupTask('important', {
  reason: i18n(
    'Choose the URL Forgejo puts in clone URLs, emails and the links it generates',
  ),
})
