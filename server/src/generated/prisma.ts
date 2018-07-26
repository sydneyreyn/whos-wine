import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    collections: <T = Collection[]>(args: { where?: CollectionWhereInput, orderBy?: CollectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collection: <T = Collection | null>(args: { where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collectionsConnection: <T = CollectionConnection>(args: { where?: CollectionWhereInput, orderBy?: CollectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createCollection: <T = Collection>(args: { data: CollectionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCollection: <T = Collection | null>(args: { data: CollectionUpdateInput, where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCollection: <T = Collection | null>(args: { where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCollection: <T = Collection>(args: { where: CollectionWhereUniqueInput, create: CollectionCreateInput, update: CollectionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCollections: <T = BatchPayload>(args: { data: CollectionUpdateInput, where?: CollectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCollections: <T = BatchPayload>(args: { where?: CollectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    collection: <T = CollectionSubscriptionPayload | null>(args: { where?: CollectionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Collection: (where?: CollectionWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCollection {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Collection implements Node {
  id: ID!
  name: String!
  description: String!
  wines: String!
  creator(where: UserWhereInput): User!
  settings: String!
  category: String!
  foods: String!
}

"""A connection to a list of items."""
type CollectionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CollectionEdge]!
  aggregate: AggregateCollection!
}

input CollectionCreateInput {
  name: String!
  description: String!
  wines: String!
  settings: String!
  category: String!
  foods: String!
  creator: UserCreateOneInput!
}

"""An edge in a connection."""
type CollectionEdge {
  """The item at the end of the edge."""
  node: Collection!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CollectionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  wines_ASC
  wines_DESC
  settings_ASC
  settings_DESC
  category_ASC
  category_DESC
  foods_ASC
  foods_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CollectionPreviousValues {
  id: ID!
  name: String!
  description: String!
  wines: String!
  settings: String!
  category: String!
  foods: String!
}

type CollectionSubscriptionPayload {
  mutation: MutationType!
  node: Collection
  updatedFields: [String!]
  previousValues: CollectionPreviousValues
}

input CollectionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CollectionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CollectionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CollectionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CollectionWhereInput
}

input CollectionUpdateInput {
  name: String
  description: String
  wines: String
  settings: String
  category: String
  foods: String
  creator: UserUpdateOneInput
}

input CollectionWhereInput {
  """Logical AND on all given filters."""
  AND: [CollectionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CollectionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CollectionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  wines: String

  """All values that are not equal to given value."""
  wines_not: String

  """All values that are contained in given list."""
  wines_in: [String!]

  """All values that are not contained in given list."""
  wines_not_in: [String!]

  """All values less than the given value."""
  wines_lt: String

  """All values less than or equal the given value."""
  wines_lte: String

  """All values greater than the given value."""
  wines_gt: String

  """All values greater than or equal the given value."""
  wines_gte: String

  """All values containing the given string."""
  wines_contains: String

  """All values not containing the given string."""
  wines_not_contains: String

  """All values starting with the given string."""
  wines_starts_with: String

  """All values not starting with the given string."""
  wines_not_starts_with: String

  """All values ending with the given string."""
  wines_ends_with: String

  """All values not ending with the given string."""
  wines_not_ends_with: String
  settings: String

  """All values that are not equal to given value."""
  settings_not: String

  """All values that are contained in given list."""
  settings_in: [String!]

  """All values that are not contained in given list."""
  settings_not_in: [String!]

  """All values less than the given value."""
  settings_lt: String

  """All values less than or equal the given value."""
  settings_lte: String

  """All values greater than the given value."""
  settings_gt: String

  """All values greater than or equal the given value."""
  settings_gte: String

  """All values containing the given string."""
  settings_contains: String

  """All values not containing the given string."""
  settings_not_contains: String

  """All values starting with the given string."""
  settings_starts_with: String

  """All values not starting with the given string."""
  settings_not_starts_with: String

  """All values ending with the given string."""
  settings_ends_with: String

  """All values not ending with the given string."""
  settings_not_ends_with: String
  category: String

  """All values that are not equal to given value."""
  category_not: String

  """All values that are contained in given list."""
  category_in: [String!]

  """All values that are not contained in given list."""
  category_not_in: [String!]

  """All values less than the given value."""
  category_lt: String

  """All values less than or equal the given value."""
  category_lte: String

  """All values greater than the given value."""
  category_gt: String

  """All values greater than or equal the given value."""
  category_gte: String

  """All values containing the given string."""
  category_contains: String

  """All values not containing the given string."""
  category_not_contains: String

  """All values starting with the given string."""
  category_starts_with: String

  """All values not starting with the given string."""
  category_not_starts_with: String

  """All values ending with the given string."""
  category_ends_with: String

  """All values not ending with the given string."""
  category_not_ends_with: String
  foods: String

  """All values that are not equal to given value."""
  foods_not: String

  """All values that are contained in given list."""
  foods_in: [String!]

  """All values that are not contained in given list."""
  foods_not_in: [String!]

  """All values less than the given value."""
  foods_lt: String

  """All values less than or equal the given value."""
  foods_lte: String

  """All values greater than the given value."""
  foods_gt: String

  """All values greater than or equal the given value."""
  foods_gte: String

  """All values containing the given string."""
  foods_contains: String

  """All values not containing the given string."""
  foods_not_contains: String

  """All values starting with the given string."""
  foods_starts_with: String

  """All values not starting with the given string."""
  foods_not_starts_with: String

  """All values ending with the given string."""
  foods_ends_with: String

  """All values not ending with the given string."""
  foods_not_ends_with: String
  creator: UserWhereInput
}

input CollectionWhereUniqueInput {
  id: ID
  name: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createCollection(data: CollectionCreateInput!): Collection!
  createUser(data: UserCreateInput!): User!
  updateCollection(data: CollectionUpdateInput!, where: CollectionWhereUniqueInput!): Collection
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteCollection(where: CollectionWhereUniqueInput!): Collection
  deleteUser(where: UserWhereUniqueInput!): User
  upsertCollection(where: CollectionWhereUniqueInput!, create: CollectionCreateInput!, update: CollectionUpdateInput!): Collection!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyCollections(data: CollectionUpdateInput!, where: CollectionWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyCollections(where: CollectionWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  collection(where: CollectionWhereUniqueInput!): Collection
  user(where: UserWhereUniqueInput!): User
  collectionsConnection(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  collection(where: CollectionSubscriptionWhereInput): CollectionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  _MagicalBackRelation_CollectionToUser_every: CollectionWhereInput
  _MagicalBackRelation_CollectionToUser_some: CollectionWhereInput
  _MagicalBackRelation_CollectionToUser_none: CollectionWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type CollectionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'wines_ASC' |
  'wines_DESC' |
  'settings_ASC' |
  'settings_DESC' |
  'category_ASC' |
  'category_DESC' |
  'foods_ASC' |
  'foods_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface CollectionWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface CollectionCreateInput {
  name: String
  description: String
  wines: String
  settings: String
  category: String
  foods: String
  creator: UserCreateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CollectionWhereInput {
  AND?: CollectionWhereInput[] | CollectionWhereInput
  OR?: CollectionWhereInput[] | CollectionWhereInput
  NOT?: CollectionWhereInput[] | CollectionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  wines?: String
  wines_not?: String
  wines_in?: String[] | String
  wines_not_in?: String[] | String
  wines_lt?: String
  wines_lte?: String
  wines_gt?: String
  wines_gte?: String
  wines_contains?: String
  wines_not_contains?: String
  wines_starts_with?: String
  wines_not_starts_with?: String
  wines_ends_with?: String
  wines_not_ends_with?: String
  settings?: String
  settings_not?: String
  settings_in?: String[] | String
  settings_not_in?: String[] | String
  settings_lt?: String
  settings_lte?: String
  settings_gt?: String
  settings_gte?: String
  settings_contains?: String
  settings_not_contains?: String
  settings_starts_with?: String
  settings_not_starts_with?: String
  settings_ends_with?: String
  settings_not_ends_with?: String
  category?: String
  category_not?: String
  category_in?: String[] | String
  category_not_in?: String[] | String
  category_lt?: String
  category_lte?: String
  category_gt?: String
  category_gte?: String
  category_contains?: String
  category_not_contains?: String
  category_starts_with?: String
  category_not_starts_with?: String
  category_ends_with?: String
  category_not_ends_with?: String
  foods?: String
  foods_not?: String
  foods_in?: String[] | String
  foods_not_in?: String[] | String
  foods_lt?: String
  foods_lte?: String
  foods_gt?: String
  foods_gte?: String
  foods_contains?: String
  foods_not_contains?: String
  foods_starts_with?: String
  foods_not_starts_with?: String
  foods_ends_with?: String
  foods_not_ends_with?: String
  creator?: UserWhereInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  password?: String
}

export interface CollectionSubscriptionWhereInput {
  AND?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput
  OR?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput
  NOT?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CollectionWhereInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface CollectionUpdateInput {
  name?: String
  description?: String
  wines?: String
  settings?: String
  category?: String
  foods?: String
  creator?: UserUpdateOneInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  _MagicalBackRelation_CollectionToUser_every?: CollectionWhereInput
  _MagicalBackRelation_CollectionToUser_some?: CollectionWhereInput
  _MagicalBackRelation_CollectionToUser_none?: CollectionWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Collection extends Node {
  id: ID_Output
  name: String
  description: String
  wines: String
  creator: User
  settings: String
  category: String
  foods: String
}

/*
 * An edge in a connection.

 */
export interface CollectionEdge {
  node: Collection
  cursor: String
}

export interface CollectionSubscriptionPayload {
  mutation: MutationType
  node?: Collection
  updatedFields?: String[]
  previousValues?: CollectionPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CollectionConnection {
  pageInfo: PageInfo
  edges: CollectionEdge[]
  aggregate: AggregateCollection
}

export interface CollectionPreviousValues {
  id: ID_Output
  name: String
  description: String
  wines: String
  settings: String
  category: String
  foods: String
}

export interface AggregateCollection {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean