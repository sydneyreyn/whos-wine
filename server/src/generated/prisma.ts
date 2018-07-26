import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Like[]>(args: { where?: LikeWhereInput, orderBy?: LikeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    settings: <T = Setting[]>(args: { where?: SettingWhereInput, orderBy?: SettingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    others: <T = Other[]>(args: { where?: OtherWhereInput, orderBy?: OtherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    wines: <T = Wine[]>(args: { where?: WineWhereInput, orderBy?: WineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collections: <T = Collection[]>(args: { where?: CollectionWhereInput, orderBy?: CollectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foods: <T = Food[]>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    setting: <T = Setting | null>(args: { where: SettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    other: <T = Other | null>(args: { where: OtherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    wine: <T = Wine | null>(args: { where: WineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collection: <T = Collection | null>(args: { where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    food: <T = Food | null>(args: { where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput, orderBy?: LikeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    settingsConnection: <T = SettingConnection>(args: { where?: SettingWhereInput, orderBy?: SettingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    othersConnection: <T = OtherConnection>(args: { where?: OtherWhereInput, orderBy?: OtherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    winesConnection: <T = WineConnection>(args: { where?: WineWhereInput, orderBy?: WineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    collectionsConnection: <T = CollectionConnection>(args: { where?: CollectionWhereInput, orderBy?: CollectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foodsConnection: <T = FoodConnection>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSetting: <T = Setting>(args: { data: SettingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOther: <T = Other>(args: { data: OtherCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWine: <T = Wine>(args: { data: WineCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCollection: <T = Collection>(args: { data: CollectionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFood: <T = Food>(args: { data: FoodCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSetting: <T = Setting | null>(args: { data: SettingUpdateInput, where: SettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOther: <T = Other | null>(args: { data: OtherUpdateInput, where: OtherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWine: <T = Wine | null>(args: { data: WineUpdateInput, where: WineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCollection: <T = Collection | null>(args: { data: CollectionUpdateInput, where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFood: <T = Food | null>(args: { data: FoodUpdateInput, where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSetting: <T = Setting | null>(args: { where: SettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOther: <T = Other | null>(args: { where: OtherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWine: <T = Wine | null>(args: { where: WineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCollection: <T = Collection | null>(args: { where: CollectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFood: <T = Food | null>(args: { where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSetting: <T = Setting>(args: { where: SettingWhereUniqueInput, create: SettingCreateInput, update: SettingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOther: <T = Other>(args: { where: OtherWhereUniqueInput, create: OtherCreateInput, update: OtherUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWine: <T = Wine>(args: { where: WineWhereUniqueInput, create: WineCreateInput, update: WineUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCollection: <T = Collection>(args: { where: CollectionWhereUniqueInput, create: CollectionCreateInput, update: CollectionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFood: <T = Food>(args: { where: FoodWhereUniqueInput, create: FoodCreateInput, update: FoodUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLikes: <T = BatchPayload>(args: { data: LikeUpdateInput, where?: LikeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySettings: <T = BatchPayload>(args: { data: SettingUpdateInput, where?: SettingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOthers: <T = BatchPayload>(args: { data: OtherUpdateInput, where?: OtherWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWines: <T = BatchPayload>(args: { data: WineUpdateInput, where?: WineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCollections: <T = BatchPayload>(args: { data: CollectionUpdateInput, where?: CollectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoods: <T = BatchPayload>(args: { data: FoodUpdateInput, where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySettings: <T = BatchPayload>(args: { where?: SettingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOthers: <T = BatchPayload>(args: { where?: OtherWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWines: <T = BatchPayload>(args: { where?: WineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCollections: <T = BatchPayload>(args: { where?: CollectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoods: <T = BatchPayload>(args: { where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    setting: <T = SettingSubscriptionPayload | null>(args: { where?: SettingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    other: <T = OtherSubscriptionPayload | null>(args: { where?: OtherSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    wine: <T = WineSubscriptionPayload | null>(args: { where?: WineSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    collection: <T = CollectionSubscriptionPayload | null>(args: { where?: CollectionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    food: <T = FoodSubscriptionPayload | null>(args: { where?: FoodSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Setting: (where?: SettingWhereInput) => Promise<boolean>
  Other: (where?: OtherWhereInput) => Promise<boolean>
  Wine: (where?: WineWhereInput) => Promise<boolean>
  Collection: (where?: CollectionWhereInput) => Promise<boolean>
  Food: (where?: FoodWhereInput) => Promise<boolean>
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

type AggregateComment {
  count: Int!
}

type AggregateFood {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateOther {
  count: Int!
}

type AggregateSetting {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWine {
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
  wines(where: WineWhereInput, orderBy: WineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wine!]
  settings(where: SettingWhereInput, orderBy: SettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Setting!]
  others(where: OtherWhereInput, orderBy: OtherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Other!]
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
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
  wines: WineCreateManyInput
  settings: SettingCreateManyInput
  others: OtherCreateManyInput
  foods: FoodCreateManyInput
  likes: LikeCreateManyWithoutCollectionInput
  comments: CommentCreateManyWithoutCollectionInput
}

input CollectionCreateManyInput {
  create: [CollectionCreateInput!]
  connect: [CollectionWhereUniqueInput!]
}

input CollectionCreateOneWithoutCommentsInput {
  create: CollectionCreateWithoutCommentsInput
  connect: CollectionWhereUniqueInput
}

input CollectionCreateOneWithoutLikesInput {
  create: CollectionCreateWithoutLikesInput
  connect: CollectionWhereUniqueInput
}

input CollectionCreateWithoutCommentsInput {
  name: String!
  description: String!
  wines: WineCreateManyInput
  settings: SettingCreateManyInput
  others: OtherCreateManyInput
  foods: FoodCreateManyInput
  likes: LikeCreateManyWithoutCollectionInput
}

input CollectionCreateWithoutLikesInput {
  name: String!
  description: String!
  wines: WineCreateManyInput
  settings: SettingCreateManyInput
  others: OtherCreateManyInput
  foods: FoodCreateManyInput
  comments: CommentCreateManyWithoutCollectionInput
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CollectionPreviousValues {
  id: ID!
  name: String!
  description: String!
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

input CollectionUpdateDataInput {
  name: String
  description: String
  wines: WineUpdateManyInput
  settings: SettingUpdateManyInput
  others: OtherUpdateManyInput
  foods: FoodUpdateManyInput
  likes: LikeUpdateManyWithoutCollectionInput
  comments: CommentUpdateManyWithoutCollectionInput
}

input CollectionUpdateInput {
  name: String
  description: String
  wines: WineUpdateManyInput
  settings: SettingUpdateManyInput
  others: OtherUpdateManyInput
  foods: FoodUpdateManyInput
  likes: LikeUpdateManyWithoutCollectionInput
  comments: CommentUpdateManyWithoutCollectionInput
}

input CollectionUpdateManyInput {
  create: [CollectionCreateInput!]
  connect: [CollectionWhereUniqueInput!]
  disconnect: [CollectionWhereUniqueInput!]
  delete: [CollectionWhereUniqueInput!]
  update: [CollectionUpdateWithWhereUniqueNestedInput!]
  upsert: [CollectionUpsertWithWhereUniqueNestedInput!]
}

input CollectionUpdateOneWithoutCommentsInput {
  create: CollectionCreateWithoutCommentsInput
  connect: CollectionWhereUniqueInput
  delete: Boolean
  update: CollectionUpdateWithoutCommentsDataInput
  upsert: CollectionUpsertWithoutCommentsInput
}

input CollectionUpdateOneWithoutLikesInput {
  create: CollectionCreateWithoutLikesInput
  connect: CollectionWhereUniqueInput
  delete: Boolean
  update: CollectionUpdateWithoutLikesDataInput
  upsert: CollectionUpsertWithoutLikesInput
}

input CollectionUpdateWithoutCommentsDataInput {
  name: String
  description: String
  wines: WineUpdateManyInput
  settings: SettingUpdateManyInput
  others: OtherUpdateManyInput
  foods: FoodUpdateManyInput
  likes: LikeUpdateManyWithoutCollectionInput
}

input CollectionUpdateWithoutLikesDataInput {
  name: String
  description: String
  wines: WineUpdateManyInput
  settings: SettingUpdateManyInput
  others: OtherUpdateManyInput
  foods: FoodUpdateManyInput
  comments: CommentUpdateManyWithoutCollectionInput
}

input CollectionUpdateWithWhereUniqueNestedInput {
  where: CollectionWhereUniqueInput!
  data: CollectionUpdateDataInput!
}

input CollectionUpsertWithoutCommentsInput {
  update: CollectionUpdateWithoutCommentsDataInput!
  create: CollectionCreateWithoutCommentsInput!
}

input CollectionUpsertWithoutLikesInput {
  update: CollectionUpdateWithoutLikesDataInput!
  create: CollectionCreateWithoutLikesInput!
}

input CollectionUpsertWithWhereUniqueNestedInput {
  where: CollectionWhereUniqueInput!
  update: CollectionUpdateDataInput!
  create: CollectionCreateInput!
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
  wines_every: WineWhereInput
  wines_some: WineWhereInput
  wines_none: WineWhereInput
  settings_every: SettingWhereInput
  settings_some: SettingWhereInput
  settings_none: SettingWhereInput
  others_every: OtherWhereInput
  others_some: OtherWhereInput
  others_none: OtherWhereInput
  foods_every: FoodWhereInput
  foods_some: FoodWhereInput
  foods_none: FoodWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  _MagicalBackRelation_CollectionToUser_every: UserWhereInput
  _MagicalBackRelation_CollectionToUser_some: UserWhereInput
  _MagicalBackRelation_CollectionToUser_none: UserWhereInput
}

input CollectionWhereUniqueInput {
  id: ID
}

type Comment {
  text: String!
  author(where: UserWhereInput): User!
  collection(where: CollectionWhereInput): Collection!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
  collection: CollectionCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentCreateManyWithoutCollectionInput {
  create: [CommentCreateWithoutCollectionInput!]
}

input CommentCreateWithoutAuthorInput {
  text: String!
  collection: CollectionCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutCollectionInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

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
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneWithoutCommentsInput
  collection: CollectionUpdateOneWithoutCommentsInput
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentUpdateManyWithoutCollectionInput {
  create: [CommentCreateWithoutCollectionInput!]
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  collection: CollectionWhereInput
}

type Food implements Node {
  id: ID!
  name: String!
  Description: String!
}

"""A connection to a list of items."""
type FoodConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  name: String!
  Description: String!
}

input FoodCreateManyInput {
  create: [FoodCreateInput!]
  connect: [FoodWhereUniqueInput!]
}

"""An edge in a connection."""
type FoodEdge {
  """The item at the end of the edge."""
  node: Food!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  Description_ASC
  Description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FoodPreviousValues {
  id: ID!
  name: String!
  Description: String!
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodSubscriptionWhereInput!]

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
  node: FoodWhereInput
}

input FoodUpdateDataInput {
  name: String
  Description: String
}

input FoodUpdateInput {
  name: String
  Description: String
}

input FoodUpdateManyInput {
  create: [FoodCreateInput!]
  connect: [FoodWhereUniqueInput!]
  disconnect: [FoodWhereUniqueInput!]
  delete: [FoodWhereUniqueInput!]
  update: [FoodUpdateWithWhereUniqueNestedInput!]
  upsert: [FoodUpsertWithWhereUniqueNestedInput!]
}

input FoodUpdateWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput!
  data: FoodUpdateDataInput!
}

input FoodUpsertWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput!
  update: FoodUpdateDataInput!
  create: FoodCreateInput!
}

input FoodWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodWhereInput!]
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
  Description: String

  """All values that are not equal to given value."""
  Description_not: String

  """All values that are contained in given list."""
  Description_in: [String!]

  """All values that are not contained in given list."""
  Description_not_in: [String!]

  """All values less than the given value."""
  Description_lt: String

  """All values less than or equal the given value."""
  Description_lte: String

  """All values greater than the given value."""
  Description_gt: String

  """All values greater than or equal the given value."""
  Description_gte: String

  """All values containing the given string."""
  Description_contains: String

  """All values not containing the given string."""
  Description_not_contains: String

  """All values starting with the given string."""
  Description_starts_with: String

  """All values not starting with the given string."""
  Description_not_starts_with: String

  """All values ending with the given string."""
  Description_ends_with: String

  """All values not ending with the given string."""
  Description_not_ends_with: String
  _MagicalBackRelation_CollectionToFood_every: CollectionWhereInput
  _MagicalBackRelation_CollectionToFood_some: CollectionWhereInput
  _MagicalBackRelation_CollectionToFood_none: CollectionWhereInput
}

input FoodWhereUniqueInput {
  id: ID
}

type Like implements Node {
  id: ID!
  author(where: UserWhereInput): User!
  collection(where: CollectionWhereInput): Collection!
}

"""A connection to a list of items."""
type LikeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  author: UserCreateOneWithoutLikesInput!
  collection: CollectionCreateOneWithoutLikesInput!
}

input LikeCreateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutCollectionInput {
  create: [LikeCreateWithoutCollectionInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutAuthorInput {
  collection: CollectionCreateOneWithoutLikesInput!
}

input LikeCreateWithoutCollectionInput {
  author: UserCreateOneWithoutLikesInput!
}

"""An edge in a connection."""
type LikeEdge {
  """The item at the end of the edge."""
  node: Like!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LikePreviousValues {
  id: ID!
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeSubscriptionWhereInput!]

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
  node: LikeWhereInput
}

input LikeUpdateInput {
  author: UserUpdateOneWithoutLikesInput
  collection: CollectionUpdateOneWithoutLikesInput
}

input LikeUpdateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutAuthorInput!]
}

input LikeUpdateManyWithoutCollectionInput {
  create: [LikeCreateWithoutCollectionInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutCollectionInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutCollectionInput!]
}

input LikeUpdateWithoutAuthorDataInput {
  collection: CollectionUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutCollectionDataInput {
  author: UserUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutAuthorDataInput!
}

input LikeUpdateWithWhereUniqueWithoutCollectionInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutCollectionDataInput!
}

input LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutAuthorDataInput!
  create: LikeCreateWithoutAuthorInput!
}

input LikeUpsertWithWhereUniqueWithoutCollectionInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutCollectionDataInput!
  create: LikeCreateWithoutCollectionInput!
}

input LikeWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeWhereInput!]
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
  author: UserWhereInput
  collection: CollectionWhereInput
}

input LikeWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createLike(data: LikeCreateInput!): Like!
  createComment(data: CommentCreateInput!): Comment!
  createSetting(data: SettingCreateInput!): Setting!
  createOther(data: OtherCreateInput!): Other!
  createWine(data: WineCreateInput!): Wine!
  createCollection(data: CollectionCreateInput!): Collection!
  createFood(data: FoodCreateInput!): Food!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateSetting(data: SettingUpdateInput!, where: SettingWhereUniqueInput!): Setting
  updateOther(data: OtherUpdateInput!, where: OtherWhereUniqueInput!): Other
  updateWine(data: WineUpdateInput!, where: WineWhereUniqueInput!): Wine
  updateCollection(data: CollectionUpdateInput!, where: CollectionWhereUniqueInput!): Collection
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteSetting(where: SettingWhereUniqueInput!): Setting
  deleteOther(where: OtherWhereUniqueInput!): Other
  deleteWine(where: WineWhereUniqueInput!): Wine
  deleteCollection(where: CollectionWhereUniqueInput!): Collection
  deleteFood(where: FoodWhereUniqueInput!): Food
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertSetting(where: SettingWhereUniqueInput!, create: SettingCreateInput!, update: SettingUpdateInput!): Setting!
  upsertOther(where: OtherWhereUniqueInput!, create: OtherCreateInput!, update: OtherUpdateInput!): Other!
  upsertWine(where: WineWhereUniqueInput!, create: WineCreateInput!, update: WineUpdateInput!): Wine!
  upsertCollection(where: CollectionWhereUniqueInput!, create: CollectionCreateInput!, update: CollectionUpdateInput!): Collection!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLikes(data: LikeUpdateInput!, where: LikeWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManySettings(data: SettingUpdateInput!, where: SettingWhereInput): BatchPayload!
  updateManyOthers(data: OtherUpdateInput!, where: OtherWhereInput): BatchPayload!
  updateManyWines(data: WineUpdateInput!, where: WineWhereInput): BatchPayload!
  updateManyCollections(data: CollectionUpdateInput!, where: CollectionWhereInput): BatchPayload!
  updateManyFoods(data: FoodUpdateInput!, where: FoodWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManySettings(where: SettingWhereInput): BatchPayload!
  deleteManyOthers(where: OtherWhereInput): BatchPayload!
  deleteManyWines(where: WineWhereInput): BatchPayload!
  deleteManyCollections(where: CollectionWhereInput): BatchPayload!
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
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

type Other implements Node {
  id: ID!
  name: String!
  Description: String!
}

"""A connection to a list of items."""
type OtherConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OtherEdge]!
  aggregate: AggregateOther!
}

input OtherCreateInput {
  name: String!
  Description: String!
}

input OtherCreateManyInput {
  create: [OtherCreateInput!]
  connect: [OtherWhereUniqueInput!]
}

"""An edge in a connection."""
type OtherEdge {
  """The item at the end of the edge."""
  node: Other!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OtherOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  Description_ASC
  Description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OtherPreviousValues {
  id: ID!
  name: String!
  Description: String!
}

type OtherSubscriptionPayload {
  mutation: MutationType!
  node: Other
  updatedFields: [String!]
  previousValues: OtherPreviousValues
}

input OtherSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OtherSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OtherSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OtherSubscriptionWhereInput!]

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
  node: OtherWhereInput
}

input OtherUpdateDataInput {
  name: String
  Description: String
}

input OtherUpdateInput {
  name: String
  Description: String
}

input OtherUpdateManyInput {
  create: [OtherCreateInput!]
  connect: [OtherWhereUniqueInput!]
  disconnect: [OtherWhereUniqueInput!]
  delete: [OtherWhereUniqueInput!]
  update: [OtherUpdateWithWhereUniqueNestedInput!]
  upsert: [OtherUpsertWithWhereUniqueNestedInput!]
}

input OtherUpdateWithWhereUniqueNestedInput {
  where: OtherWhereUniqueInput!
  data: OtherUpdateDataInput!
}

input OtherUpsertWithWhereUniqueNestedInput {
  where: OtherWhereUniqueInput!
  update: OtherUpdateDataInput!
  create: OtherCreateInput!
}

input OtherWhereInput {
  """Logical AND on all given filters."""
  AND: [OtherWhereInput!]

  """Logical OR on all given filters."""
  OR: [OtherWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OtherWhereInput!]
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
  Description: String

  """All values that are not equal to given value."""
  Description_not: String

  """All values that are contained in given list."""
  Description_in: [String!]

  """All values that are not contained in given list."""
  Description_not_in: [String!]

  """All values less than the given value."""
  Description_lt: String

  """All values less than or equal the given value."""
  Description_lte: String

  """All values greater than the given value."""
  Description_gt: String

  """All values greater than or equal the given value."""
  Description_gte: String

  """All values containing the given string."""
  Description_contains: String

  """All values not containing the given string."""
  Description_not_contains: String

  """All values starting with the given string."""
  Description_starts_with: String

  """All values not starting with the given string."""
  Description_not_starts_with: String

  """All values ending with the given string."""
  Description_ends_with: String

  """All values not ending with the given string."""
  Description_not_ends_with: String
  _MagicalBackRelation_CollectionToOther_every: CollectionWhereInput
  _MagicalBackRelation_CollectionToOther_some: CollectionWhereInput
  _MagicalBackRelation_CollectionToOther_none: CollectionWhereInput
}

input OtherWhereUniqueInput {
  id: ID
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
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  settings(where: SettingWhereInput, orderBy: SettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Setting]!
  others(where: OtherWhereInput, orderBy: OtherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Other]!
  wines(where: WineWhereInput, orderBy: WineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wine]!
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection]!
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  user(where: UserWhereUniqueInput!): User
  like(where: LikeWhereUniqueInput!): Like
  setting(where: SettingWhereUniqueInput!): Setting
  other(where: OtherWhereUniqueInput!): Other
  wine(where: WineWhereUniqueInput!): Wine
  collection(where: CollectionWhereUniqueInput!): Collection
  food(where: FoodWhereUniqueInput!): Food
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  settingsConnection(where: SettingWhereInput, orderBy: SettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SettingConnection!
  othersConnection(where: OtherWhereInput, orderBy: OtherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OtherConnection!
  winesConnection(where: WineWhereInput, orderBy: WineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WineConnection!
  collectionsConnection(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionConnection!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Setting implements Node {
  id: ID!
  name: String!
  Description: String!
}

"""A connection to a list of items."""
type SettingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SettingEdge]!
  aggregate: AggregateSetting!
}

input SettingCreateInput {
  name: String!
  Description: String!
}

input SettingCreateManyInput {
  create: [SettingCreateInput!]
  connect: [SettingWhereUniqueInput!]
}

"""An edge in a connection."""
type SettingEdge {
  """The item at the end of the edge."""
  node: Setting!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SettingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  Description_ASC
  Description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SettingPreviousValues {
  id: ID!
  name: String!
  Description: String!
}

type SettingSubscriptionPayload {
  mutation: MutationType!
  node: Setting
  updatedFields: [String!]
  previousValues: SettingPreviousValues
}

input SettingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SettingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SettingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SettingSubscriptionWhereInput!]

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
  node: SettingWhereInput
}

input SettingUpdateDataInput {
  name: String
  Description: String
}

input SettingUpdateInput {
  name: String
  Description: String
}

input SettingUpdateManyInput {
  create: [SettingCreateInput!]
  connect: [SettingWhereUniqueInput!]
  disconnect: [SettingWhereUniqueInput!]
  delete: [SettingWhereUniqueInput!]
  update: [SettingUpdateWithWhereUniqueNestedInput!]
  upsert: [SettingUpsertWithWhereUniqueNestedInput!]
}

input SettingUpdateWithWhereUniqueNestedInput {
  where: SettingWhereUniqueInput!
  data: SettingUpdateDataInput!
}

input SettingUpsertWithWhereUniqueNestedInput {
  where: SettingWhereUniqueInput!
  update: SettingUpdateDataInput!
  create: SettingCreateInput!
}

input SettingWhereInput {
  """Logical AND on all given filters."""
  AND: [SettingWhereInput!]

  """Logical OR on all given filters."""
  OR: [SettingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SettingWhereInput!]
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
  Description: String

  """All values that are not equal to given value."""
  Description_not: String

  """All values that are contained in given list."""
  Description_in: [String!]

  """All values that are not contained in given list."""
  Description_not_in: [String!]

  """All values less than the given value."""
  Description_lt: String

  """All values less than or equal the given value."""
  Description_lte: String

  """All values greater than the given value."""
  Description_gt: String

  """All values greater than or equal the given value."""
  Description_gte: String

  """All values containing the given string."""
  Description_contains: String

  """All values not containing the given string."""
  Description_not_contains: String

  """All values starting with the given string."""
  Description_starts_with: String

  """All values not starting with the given string."""
  Description_not_starts_with: String

  """All values ending with the given string."""
  Description_ends_with: String

  """All values not ending with the given string."""
  Description_not_ends_with: String
  _MagicalBackRelation_CollectionToSetting_every: CollectionWhereInput
  _MagicalBackRelation_CollectionToSetting_some: CollectionWhereInput
  _MagicalBackRelation_CollectionToSetting_none: CollectionWhereInput
}

input SettingWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  setting(where: SettingSubscriptionWhereInput): SettingSubscriptionPayload
  other(where: OtherSubscriptionWhereInput): OtherSubscriptionPayload
  wine(where: WineSubscriptionWhereInput): WineSubscriptionPayload
  collection(where: CollectionSubscriptionWhereInput): CollectionSubscriptionPayload
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
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
  collections: CollectionCreateManyInput
  comments: CommentCreateManyWithoutAuthorInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  name: String!
  email: String!
  password: String!
  collections: CollectionCreateManyInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateWithoutLikesInput {
  name: String!
  email: String!
  password: String!
  collections: CollectionCreateManyInput
  comments: CommentCreateManyWithoutAuthorInput
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

input UserUpdateInput {
  name: String
  email: String
  password: String
  collections: CollectionUpdateManyInput
  comments: CommentUpdateManyWithoutAuthorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
}

input UserUpdateWithoutCommentsDataInput {
  name: String
  email: String
  password: String
  collections: CollectionUpdateManyInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutLikesDataInput {
  name: String
  email: String
  password: String
  collections: CollectionUpdateManyInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
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
  collections_every: CollectionWhereInput
  collections_some: CollectionWhereInput
  collections_none: CollectionWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Wine implements Node {
  id: ID!
  name: String!
  type: String!
  price: Float!
  Description: String!
}

"""A connection to a list of items."""
type WineConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WineEdge]!
  aggregate: AggregateWine!
}

input WineCreateInput {
  name: String!
  type: String!
  price: Float!
  Description: String!
}

input WineCreateManyInput {
  create: [WineCreateInput!]
  connect: [WineWhereUniqueInput!]
}

"""An edge in a connection."""
type WineEdge {
  """The item at the end of the edge."""
  node: Wine!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WineOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  price_ASC
  price_DESC
  Description_ASC
  Description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WinePreviousValues {
  id: ID!
  name: String!
  type: String!
  price: Float!
  Description: String!
}

type WineSubscriptionPayload {
  mutation: MutationType!
  node: Wine
  updatedFields: [String!]
  previousValues: WinePreviousValues
}

input WineSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WineSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WineSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WineSubscriptionWhereInput!]

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
  node: WineWhereInput
}

input WineUpdateDataInput {
  name: String
  type: String
  price: Float
  Description: String
}

input WineUpdateInput {
  name: String
  type: String
  price: Float
  Description: String
}

input WineUpdateManyInput {
  create: [WineCreateInput!]
  connect: [WineWhereUniqueInput!]
  disconnect: [WineWhereUniqueInput!]
  delete: [WineWhereUniqueInput!]
  update: [WineUpdateWithWhereUniqueNestedInput!]
  upsert: [WineUpsertWithWhereUniqueNestedInput!]
}

input WineUpdateWithWhereUniqueNestedInput {
  where: WineWhereUniqueInput!
  data: WineUpdateDataInput!
}

input WineUpsertWithWhereUniqueNestedInput {
  where: WineWhereUniqueInput!
  update: WineUpdateDataInput!
  create: WineCreateInput!
}

input WineWhereInput {
  """Logical AND on all given filters."""
  AND: [WineWhereInput!]

  """Logical OR on all given filters."""
  OR: [WineWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WineWhereInput!]
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  Description: String

  """All values that are not equal to given value."""
  Description_not: String

  """All values that are contained in given list."""
  Description_in: [String!]

  """All values that are not contained in given list."""
  Description_not_in: [String!]

  """All values less than the given value."""
  Description_lt: String

  """All values less than or equal the given value."""
  Description_lte: String

  """All values greater than the given value."""
  Description_gt: String

  """All values greater than or equal the given value."""
  Description_gte: String

  """All values containing the given string."""
  Description_contains: String

  """All values not containing the given string."""
  Description_not_contains: String

  """All values starting with the given string."""
  Description_starts_with: String

  """All values not starting with the given string."""
  Description_not_starts_with: String

  """All values ending with the given string."""
  Description_ends_with: String

  """All values not ending with the given string."""
  Description_not_ends_with: String
  _MagicalBackRelation_CollectionToWine_every: CollectionWhereInput
  _MagicalBackRelation_CollectionToWine_some: CollectionWhereInput
  _MagicalBackRelation_CollectionToWine_none: CollectionWhereInput
}

input WineWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

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

export type CollectionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type WineOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'price_ASC' |
  'price_DESC' |
  'Description_ASC' |
  'Description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SettingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'Description_ASC' |
  'Description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OtherOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'Description_ASC' |
  'Description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FoodOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'Description_ASC' |
  'Description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LikeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'text_ASC' |
  'text_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateWithoutCommentsInput {
  name: String
  email: String
  password: String
  collections?: CollectionCreateManyInput
  likes?: LikeCreateManyWithoutAuthorInput
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
  collections_every?: CollectionWhereInput
  collections_some?: CollectionWhereInput
  collections_none?: CollectionWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  likes_every?: LikeWhereInput
  likes_some?: LikeWhereInput
  likes_none?: LikeWhereInput
}

export interface LikeCreateInput {
  author: UserCreateOneWithoutLikesInput
  collection: CollectionCreateOneWithoutLikesInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  collection?: CollectionWhereInput
}

export interface CollectionCreateManyInput {
  create?: CollectionCreateInput[] | CollectionCreateInput
  connect?: CollectionWhereUniqueInput[] | CollectionWhereUniqueInput
}

export interface LikeUpdateWithWhereUniqueWithoutCollectionInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutCollectionDataInput
}

export interface CollectionCreateInput {
  name: String
  description: String
  wines?: WineCreateManyInput
  settings?: SettingCreateManyInput
  others?: OtherCreateManyInput
  foods?: FoodCreateManyInput
  likes?: LikeCreateManyWithoutCollectionInput
  comments?: CommentCreateManyWithoutCollectionInput
}

export interface CommentCreateInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
  collection: CollectionCreateOneWithoutCommentsInput
}

export interface WineCreateManyInput {
  create?: WineCreateInput[] | WineCreateInput
  connect?: WineWhereUniqueInput[] | WineWhereUniqueInput
}

export interface FoodSubscriptionWhereInput {
  AND?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  OR?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  NOT?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FoodWhereInput
}

export interface WineCreateInput {
  name: String
  type: String
  price: Float
  Description: String
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

export interface SettingCreateManyInput {
  create?: SettingCreateInput[] | SettingCreateInput
  connect?: SettingWhereUniqueInput[] | SettingWhereUniqueInput
}

export interface WineSubscriptionWhereInput {
  AND?: WineSubscriptionWhereInput[] | WineSubscriptionWhereInput
  OR?: WineSubscriptionWhereInput[] | WineSubscriptionWhereInput
  NOT?: WineSubscriptionWhereInput[] | WineSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WineWhereInput
}

export interface SettingCreateInput {
  name: String
  Description: String
}

export interface OtherSubscriptionWhereInput {
  AND?: OtherSubscriptionWhereInput[] | OtherSubscriptionWhereInput
  OR?: OtherSubscriptionWhereInput[] | OtherSubscriptionWhereInput
  NOT?: OtherSubscriptionWhereInput[] | OtherSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OtherWhereInput
}

export interface OtherCreateManyInput {
  create?: OtherCreateInput[] | OtherCreateInput
  connect?: OtherWhereUniqueInput[] | OtherWhereUniqueInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface OtherCreateInput {
  name: String
  Description: String
}

export interface LikeSubscriptionWhereInput {
  AND?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  OR?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  NOT?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LikeWhereInput
}

export interface FoodCreateManyInput {
  create?: FoodCreateInput[] | FoodCreateInput
  connect?: FoodWhereUniqueInput[] | FoodWhereUniqueInput
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

export interface FoodCreateInput {
  name: String
  Description: String
}

export interface LikeWhereUniqueInput {
  id?: ID_Input
}

export interface LikeCreateManyWithoutCollectionInput {
  create?: LikeCreateWithoutCollectionInput[] | LikeCreateWithoutCollectionInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
}

export interface OtherWhereUniqueInput {
  id?: ID_Input
}

export interface LikeCreateWithoutCollectionInput {
  author: UserCreateOneWithoutLikesInput
}

export interface CollectionWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput
  connect?: UserWhereUniqueInput
}

export interface CollectionUpsertWithoutCommentsInput {
  update: CollectionUpdateWithoutCommentsDataInput
  create: CollectionCreateWithoutCommentsInput
}

export interface UserCreateWithoutLikesInput {
  name: String
  email: String
  password: String
  collections?: CollectionCreateManyInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface CollectionUpdateOneWithoutCommentsInput {
  create?: CollectionCreateWithoutCommentsInput
  connect?: CollectionWhereUniqueInput
  delete?: Boolean
  update?: CollectionUpdateWithoutCommentsDataInput
  upsert?: CollectionUpsertWithoutCommentsInput
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
}

export interface UserUpdateWithoutCommentsDataInput {
  name?: String
  email?: String
  password?: String
  collections?: CollectionUpdateManyInput
  likes?: LikeUpdateManyWithoutAuthorInput
}

export interface CommentCreateWithoutAuthorInput {
  text: String
  collection: CollectionCreateOneWithoutCommentsInput
}

export interface CommentUpdateInput {
  text?: String
  author?: UserUpdateOneWithoutCommentsInput
  collection?: CollectionUpdateOneWithoutCommentsInput
}

export interface CollectionCreateOneWithoutCommentsInput {
  create?: CollectionCreateWithoutCommentsInput
  connect?: CollectionWhereUniqueInput
}

export interface CollectionUpdateInput {
  name?: String
  description?: String
  wines?: WineUpdateManyInput
  settings?: SettingUpdateManyInput
  others?: OtherUpdateManyInput
  foods?: FoodUpdateManyInput
  likes?: LikeUpdateManyWithoutCollectionInput
  comments?: CommentUpdateManyWithoutCollectionInput
}

export interface CollectionCreateWithoutCommentsInput {
  name: String
  description: String
  wines?: WineCreateManyInput
  settings?: SettingCreateManyInput
  others?: OtherCreateManyInput
  foods?: FoodCreateManyInput
  likes?: LikeCreateManyWithoutCollectionInput
}

export interface OtherUpdateInput {
  name?: String
  Description?: String
}

export interface CommentCreateManyWithoutCollectionInput {
  create?: CommentCreateWithoutCollectionInput[] | CommentCreateWithoutCollectionInput
}

export interface LikeUpdateInput {
  author?: UserUpdateOneWithoutLikesInput
  collection?: CollectionUpdateOneWithoutLikesInput
}

export interface CommentCreateWithoutCollectionInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
}

export interface CollectionUpsertWithoutLikesInput {
  update: CollectionUpdateWithoutLikesDataInput
  create: CollectionCreateWithoutLikesInput
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface CollectionUpdateOneWithoutLikesInput {
  create?: CollectionCreateWithoutLikesInput
  connect?: CollectionWhereUniqueInput
  delete?: Boolean
  update?: CollectionUpdateWithoutLikesDataInput
  upsert?: CollectionUpsertWithoutLikesInput
}

export interface UserUpdateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutLikesDataInput
  upsert?: UserUpsertWithoutLikesInput
}

export interface LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutAuthorDataInput
}

export interface LikeCreateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
}

export interface CollectionUpsertWithWhereUniqueNestedInput {
  where: CollectionWhereUniqueInput
  update: CollectionUpdateDataInput
  create: CollectionCreateInput
}

export interface LikeCreateWithoutAuthorInput {
  collection: CollectionCreateOneWithoutLikesInput
}

export interface LikeUpsertWithWhereUniqueWithoutCollectionInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutCollectionDataInput
  create: LikeCreateWithoutCollectionInput
}

export interface CollectionCreateOneWithoutLikesInput {
  create?: CollectionCreateWithoutLikesInput
  connect?: CollectionWhereUniqueInput
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
}

export interface CollectionCreateWithoutLikesInput {
  name: String
  description: String
  wines?: WineCreateManyInput
  settings?: SettingCreateManyInput
  others?: OtherCreateManyInput
  foods?: FoodCreateManyInput
  comments?: CommentCreateManyWithoutCollectionInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  collections?: CollectionCreateManyInput
  comments?: CommentCreateManyWithoutAuthorInput
  likes?: LikeCreateManyWithoutAuthorInput
}

export interface LikeUpdateWithoutCollectionDataInput {
  author?: UserUpdateOneWithoutLikesInput
}

export interface FoodWhereInput {
  AND?: FoodWhereInput[] | FoodWhereInput
  OR?: FoodWhereInput[] | FoodWhereInput
  NOT?: FoodWhereInput[] | FoodWhereInput
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
  Description?: String
  Description_not?: String
  Description_in?: String[] | String
  Description_not_in?: String[] | String
  Description_lt?: String
  Description_lte?: String
  Description_gt?: String
  Description_gte?: String
  Description_contains?: String
  Description_not_contains?: String
  Description_starts_with?: String
  Description_not_starts_with?: String
  Description_ends_with?: String
  Description_not_ends_with?: String
  _MagicalBackRelation_CollectionToFood_every?: CollectionWhereInput
  _MagicalBackRelation_CollectionToFood_some?: CollectionWhereInput
  _MagicalBackRelation_CollectionToFood_none?: CollectionWhereInput
}

export interface SettingWhereInput {
  AND?: SettingWhereInput[] | SettingWhereInput
  OR?: SettingWhereInput[] | SettingWhereInput
  NOT?: SettingWhereInput[] | SettingWhereInput
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
  Description?: String
  Description_not?: String
  Description_in?: String[] | String
  Description_not_in?: String[] | String
  Description_lt?: String
  Description_lte?: String
  Description_gt?: String
  Description_gte?: String
  Description_contains?: String
  Description_not_contains?: String
  Description_starts_with?: String
  Description_not_starts_with?: String
  Description_ends_with?: String
  Description_not_ends_with?: String
  _MagicalBackRelation_CollectionToSetting_every?: CollectionWhereInput
  _MagicalBackRelation_CollectionToSetting_some?: CollectionWhereInput
  _MagicalBackRelation_CollectionToSetting_none?: CollectionWhereInput
}

export interface WineWhereInput {
  AND?: WineWhereInput[] | WineWhereInput
  OR?: WineWhereInput[] | WineWhereInput
  NOT?: WineWhereInput[] | WineWhereInput
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
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  Description?: String
  Description_not?: String
  Description_in?: String[] | String
  Description_not_in?: String[] | String
  Description_lt?: String
  Description_lte?: String
  Description_gt?: String
  Description_gte?: String
  Description_contains?: String
  Description_not_contains?: String
  Description_starts_with?: String
  Description_not_starts_with?: String
  Description_ends_with?: String
  Description_not_ends_with?: String
  _MagicalBackRelation_CollectionToWine_every?: CollectionWhereInput
  _MagicalBackRelation_CollectionToWine_some?: CollectionWhereInput
  _MagicalBackRelation_CollectionToWine_none?: CollectionWhereInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  collections?: CollectionUpdateManyInput
  comments?: CommentUpdateManyWithoutAuthorInput
  likes?: LikeUpdateManyWithoutAuthorInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CollectionUpdateManyInput {
  create?: CollectionCreateInput[] | CollectionCreateInput
  connect?: CollectionWhereUniqueInput[] | CollectionWhereUniqueInput
  disconnect?: CollectionWhereUniqueInput[] | CollectionWhereUniqueInput
  delete?: CollectionWhereUniqueInput[] | CollectionWhereUniqueInput
  update?: CollectionUpdateWithWhereUniqueNestedInput[] | CollectionUpdateWithWhereUniqueNestedInput
  upsert?: CollectionUpsertWithWhereUniqueNestedInput[] | CollectionUpsertWithWhereUniqueNestedInput
}

export interface WineWhereUniqueInput {
  id?: ID_Input
}

export interface CollectionUpdateWithWhereUniqueNestedInput {
  where: CollectionWhereUniqueInput
  data: CollectionUpdateDataInput
}

export interface CollectionUpdateWithoutCommentsDataInput {
  name?: String
  description?: String
  wines?: WineUpdateManyInput
  settings?: SettingUpdateManyInput
  others?: OtherUpdateManyInput
  foods?: FoodUpdateManyInput
  likes?: LikeUpdateManyWithoutCollectionInput
}

export interface CollectionUpdateDataInput {
  name?: String
  description?: String
  wines?: WineUpdateManyInput
  settings?: SettingUpdateManyInput
  others?: OtherUpdateManyInput
  foods?: FoodUpdateManyInput
  likes?: LikeUpdateManyWithoutCollectionInput
  comments?: CommentUpdateManyWithoutCollectionInput
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCommentsDataInput
  upsert?: UserUpsertWithoutCommentsInput
}

export interface WineUpdateManyInput {
  create?: WineCreateInput[] | WineCreateInput
  connect?: WineWhereUniqueInput[] | WineWhereUniqueInput
  disconnect?: WineWhereUniqueInput[] | WineWhereUniqueInput
  delete?: WineWhereUniqueInput[] | WineWhereUniqueInput
  update?: WineUpdateWithWhereUniqueNestedInput[] | WineUpdateWithWhereUniqueNestedInput
  upsert?: WineUpsertWithWhereUniqueNestedInput[] | WineUpsertWithWhereUniqueNestedInput
}

export interface WineUpdateInput {
  name?: String
  type?: String
  price?: Float
  Description?: String
}

export interface WineUpdateWithWhereUniqueNestedInput {
  where: WineWhereUniqueInput
  data: WineUpdateDataInput
}

export interface LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutAuthorDataInput
  create: LikeCreateWithoutAuthorInput
}

export interface WineUpdateDataInput {
  name?: String
  type?: String
  price?: Float
  Description?: String
}

export interface LikeUpdateWithoutAuthorDataInput {
  collection?: CollectionUpdateOneWithoutLikesInput
}

export interface WineUpsertWithWhereUniqueNestedInput {
  where: WineWhereUniqueInput
  update: WineUpdateDataInput
  create: WineCreateInput
}

export interface CommentUpdateManyWithoutCollectionInput {
  create?: CommentCreateWithoutCollectionInput[] | CommentCreateWithoutCollectionInput
}

export interface SettingUpdateManyInput {
  create?: SettingCreateInput[] | SettingCreateInput
  connect?: SettingWhereUniqueInput[] | SettingWhereUniqueInput
  disconnect?: SettingWhereUniqueInput[] | SettingWhereUniqueInput
  delete?: SettingWhereUniqueInput[] | SettingWhereUniqueInput
  update?: SettingUpdateWithWhereUniqueNestedInput[] | SettingUpdateWithWhereUniqueNestedInput
  upsert?: SettingUpsertWithWhereUniqueNestedInput[] | SettingUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithoutLikesDataInput {
  name?: String
  email?: String
  password?: String
  collections?: CollectionUpdateManyInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface SettingUpdateWithWhereUniqueNestedInput {
  where: SettingWhereUniqueInput
  data: SettingUpdateDataInput
}

export interface OtherWhereInput {
  AND?: OtherWhereInput[] | OtherWhereInput
  OR?: OtherWhereInput[] | OtherWhereInput
  NOT?: OtherWhereInput[] | OtherWhereInput
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
  Description?: String
  Description_not?: String
  Description_in?: String[] | String
  Description_not_in?: String[] | String
  Description_lt?: String
  Description_lte?: String
  Description_gt?: String
  Description_gte?: String
  Description_contains?: String
  Description_not_contains?: String
  Description_starts_with?: String
  Description_not_starts_with?: String
  Description_ends_with?: String
  Description_not_ends_with?: String
  _MagicalBackRelation_CollectionToOther_every?: CollectionWhereInput
  _MagicalBackRelation_CollectionToOther_some?: CollectionWhereInput
  _MagicalBackRelation_CollectionToOther_none?: CollectionWhereInput
}

export interface SettingUpdateDataInput {
  name?: String
  Description?: String
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
  wines_every?: WineWhereInput
  wines_some?: WineWhereInput
  wines_none?: WineWhereInput
  settings_every?: SettingWhereInput
  settings_some?: SettingWhereInput
  settings_none?: SettingWhereInput
  others_every?: OtherWhereInput
  others_some?: OtherWhereInput
  others_none?: OtherWhereInput
  foods_every?: FoodWhereInput
  foods_some?: FoodWhereInput
  foods_none?: FoodWhereInput
  likes_every?: LikeWhereInput
  likes_some?: LikeWhereInput
  likes_none?: LikeWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  _MagicalBackRelation_CollectionToUser_every?: UserWhereInput
  _MagicalBackRelation_CollectionToUser_some?: UserWhereInput
  _MagicalBackRelation_CollectionToUser_none?: UserWhereInput
}

export interface SettingUpsertWithWhereUniqueNestedInput {
  where: SettingWhereUniqueInput
  update: SettingUpdateDataInput
  create: SettingCreateInput
}

export interface FoodWhereUniqueInput {
  id?: ID_Input
}

export interface OtherUpdateManyInput {
  create?: OtherCreateInput[] | OtherCreateInput
  connect?: OtherWhereUniqueInput[] | OtherWhereUniqueInput
  disconnect?: OtherWhereUniqueInput[] | OtherWhereUniqueInput
  delete?: OtherWhereUniqueInput[] | OtherWhereUniqueInput
  update?: OtherUpdateWithWhereUniqueNestedInput[] | OtherUpdateWithWhereUniqueNestedInput
  upsert?: OtherUpsertWithWhereUniqueNestedInput[] | OtherUpsertWithWhereUniqueNestedInput
}

export interface FoodUpdateInput {
  name?: String
  Description?: String
}

export interface OtherUpdateWithWhereUniqueNestedInput {
  where: OtherWhereUniqueInput
  data: OtherUpdateDataInput
}

export interface CollectionUpdateWithoutLikesDataInput {
  name?: String
  description?: String
  wines?: WineUpdateManyInput
  settings?: SettingUpdateManyInput
  others?: OtherUpdateManyInput
  foods?: FoodUpdateManyInput
  comments?: CommentUpdateManyWithoutCollectionInput
}

export interface OtherUpdateDataInput {
  name?: String
  Description?: String
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput
  create: UserCreateWithoutLikesInput
}

export interface OtherUpsertWithWhereUniqueNestedInput {
  where: OtherWhereUniqueInput
  update: OtherUpdateDataInput
  create: OtherCreateInput
}

export interface SettingSubscriptionWhereInput {
  AND?: SettingSubscriptionWhereInput[] | SettingSubscriptionWhereInput
  OR?: SettingSubscriptionWhereInput[] | SettingSubscriptionWhereInput
  NOT?: SettingSubscriptionWhereInput[] | SettingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SettingWhereInput
}

export interface FoodUpdateManyInput {
  create?: FoodCreateInput[] | FoodCreateInput
  connect?: FoodWhereUniqueInput[] | FoodWhereUniqueInput
  disconnect?: FoodWhereUniqueInput[] | FoodWhereUniqueInput
  delete?: FoodWhereUniqueInput[] | FoodWhereUniqueInput
  update?: FoodUpdateWithWhereUniqueNestedInput[] | FoodUpdateWithWhereUniqueNestedInput
  upsert?: FoodUpsertWithWhereUniqueNestedInput[] | FoodUpsertWithWhereUniqueNestedInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface LikeUpdateManyWithoutCollectionInput {
  create?: LikeCreateWithoutCollectionInput[] | LikeCreateWithoutCollectionInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  update?: LikeUpdateWithWhereUniqueWithoutCollectionInput[] | LikeUpdateWithWhereUniqueWithoutCollectionInput
  upsert?: LikeUpsertWithWhereUniqueWithoutCollectionInput[] | LikeUpsertWithWhereUniqueWithoutCollectionInput
}

export interface FoodUpsertWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput
  update: FoodUpdateDataInput
  create: FoodCreateInput
}

export interface FoodUpdateDataInput {
  name?: String
  Description?: String
}

export interface FoodUpdateWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput
  data: FoodUpdateDataInput
}

export interface SettingUpdateInput {
  name?: String
  Description?: String
}

export interface SettingWhereUniqueInput {
  id?: ID_Input
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[] | LikeWhereInput
  OR?: LikeWhereInput[] | LikeWhereInput
  NOT?: LikeWhereInput[] | LikeWhereInput
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
  author?: UserWhereInput
  collection?: CollectionWhereInput
}

export interface LikeUpdateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  update?: LikeUpdateWithWhereUniqueWithoutAuthorInput[] | LikeUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: LikeUpsertWithWhereUniqueWithoutAuthorInput[] | LikeUpsertWithWhereUniqueWithoutAuthorInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface FoodPreviousValues {
  id: ID_Output
  name: String
  Description: String
}

export interface AggregateUser {
  count: Int
}

export interface Wine extends Node {
  id: ID_Output
  name: String
  type: String
  price: Float
  Description: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  collections?: Collection[]
  comments?: Comment[]
  likes?: Like[]
}

export interface Collection extends Node {
  id: ID_Output
  name: String
  description: String
  wines?: Wine[]
  settings?: Setting[]
  others?: Other[]
  foods?: Food[]
  likes?: Like[]
  comments?: Comment[]
}

/*
 * An edge in a connection.

 */
export interface FoodEdge {
  node: Food
  cursor: String
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

export interface AggregateCollection {
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

/*
 * A connection to a list of items.

 */
export interface CollectionConnection {
  pageInfo: PageInfo
  edges: CollectionEdge[]
  aggregate: AggregateCollection
}

export interface Comment {
  text: String
  author: User
  collection: Collection
}

/*
 * An edge in a connection.

 */
export interface WineEdge {
  node: Wine
  cursor: String
}

export interface CollectionPreviousValues {
  id: ID_Output
  name: String
  description: String
}

export interface AggregateOther {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface OtherConnection {
  pageInfo: PageInfo
  edges: OtherEdge[]
  aggregate: AggregateOther
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface SettingEdge {
  node: Setting
  cursor: String
}

export interface Like extends Node {
  id: ID_Output
  author: User
  collection: Collection
}

export interface AggregateComment {
  count: Int
}

export interface LikeSubscriptionPayload {
  mutation: MutationType
  node?: Like
  updatedFields?: String[]
  previousValues?: LikePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface LikePreviousValues {
  id: ID_Output
}

export interface BatchPayload {
  count: Long
}

export interface Food extends Node {
  id: ID_Output
  name: String
  Description: String
}

/*
 * An edge in a connection.

 */
export interface LikeEdge {
  node: Like
  cursor: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface AggregateFood {
  count: Int
}

export interface CommentPreviousValues {
  text: String
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
export interface WineConnection {
  pageInfo: PageInfo
  edges: WineEdge[]
  aggregate: AggregateWine
}

export interface SettingSubscriptionPayload {
  mutation: MutationType
  node?: Setting
  updatedFields?: String[]
  previousValues?: SettingPreviousValues
}

export interface AggregateSetting {
  count: Int
}

export interface SettingPreviousValues {
  id: ID_Output
  name: String
  Description: String
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface Other extends Node {
  id: ID_Output
  name: String
  Description: String
}

export interface FoodSubscriptionPayload {
  mutation: MutationType
  node?: Food
  updatedFields?: String[]
  previousValues?: FoodPreviousValues
}

export interface OtherSubscriptionPayload {
  mutation: MutationType
  node?: Other
  updatedFields?: String[]
  previousValues?: OtherPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FoodConnection {
  pageInfo: PageInfo
  edges: FoodEdge[]
  aggregate: AggregateFood
}

/*
 * An edge in a connection.

 */
export interface OtherEdge {
  node: Other
  cursor: String
}

export interface WinePreviousValues {
  id: ID_Output
  name: String
  type: String
  price: Float
  Description: String
}

export interface WineSubscriptionPayload {
  mutation: MutationType
  node?: Wine
  updatedFields?: String[]
  previousValues?: WinePreviousValues
}

export interface Setting extends Node {
  id: ID_Output
  name: String
  Description: String
}

export interface OtherPreviousValues {
  id: ID_Output
  name: String
  Description: String
}

/*
 * A connection to a list of items.

 */
export interface SettingConnection {
  pageInfo: PageInfo
  edges: SettingEdge[]
  aggregate: AggregateSetting
}

export interface AggregateWine {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface LikeConnection {
  pageInfo: PageInfo
  edges: LikeEdge[]
  aggregate: AggregateLike
}

export interface AggregateLike {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

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
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number