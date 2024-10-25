import * as VueApolloComposable from '@vue/apollo-composable'
import gql from 'graphql-tag'
import * as VueCompositionApi from 'vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTimeISO: { input: any; output: any }
}

export type AuthResponse = {
  __typename?: 'AuthResponse'
  accessToken: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
  user: Scalars['String']['output']
}

export type CreateUserInput = {
  email: Scalars['String']['input']
  password?: InputMaybe<Scalars['String']['input']>
  username: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: User
  login: AuthResponse
  refreshToken?: Maybe<Scalars['String']['output']>
}

export type MutationCreateUserArgs = {
  data: CreateUserInput
}

export type MutationLoginArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  getUser?: Maybe<User>
  getUsers: Array<User>
  ping: Scalars['String']['output']
  pingWithTimestamp: Scalars['String']['output']
}

export type QueryGetUserArgs = {
  id: Scalars['Float']['input']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTimeISO']['output']
  email: Scalars['String']['output']
  id: Scalars['Float']['output']
  passhash: Scalars['String']['output']
  username: Scalars['String']['output']
}

export type PingQueryVariables = Exact<{ [key: string]: never }>

export type PingQuery = { __typename?: 'Query'; ping: string }

export const PingDocument = gql`
  query Ping {
    ping
  }
`

/**
 * __usePingQuery__
 *
 * To run a query within a Vue component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePingQuery();
 */
export function usePingQuery(
  options:
    | VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
      > = {},
) {
  return VueApolloComposable.useQuery<PingQuery, PingQueryVariables>(
    PingDocument,
    {},
    options,
  )
}
export function usePingLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>
      > = {},
) {
  return VueApolloComposable.useLazyQuery<PingQuery, PingQueryVariables>(
    PingDocument,
    {},
    options,
  )
}
export type PingQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<PingQuery, PingQueryVariables>
