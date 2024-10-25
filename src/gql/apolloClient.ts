import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const getAuthToken = () => {
  return 'seu-token-aqui'
}

const getDataSource = () => {
  const hostname = window.location.hostname
  const subdomain = hostname.split('.')[0]
  return subdomain
}

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = getAuthToken()
  const datasource = getDataSource()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'x-datasource': datasource,
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
