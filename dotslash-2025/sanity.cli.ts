import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7or5w6ow',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: 'dotslash2025'
})
