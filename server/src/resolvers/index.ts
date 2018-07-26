import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { AuthPayload } from "./AuthPayload"
import { collection } from "./Mutation/createcollection"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...collection,
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
