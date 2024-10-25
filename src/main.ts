import App from '@/App.vue'
import '@/assets/index.css'
import { apolloClient } from '@/gql/apolloClient'
import type { UserModule } from '@/types'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  ctx => {
    ctx.app.provide(DefaultApolloClient, apolloClient)
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true,
      }),
    ).forEach(i => i.install?.(ctx))
  },
)
