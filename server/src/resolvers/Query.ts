import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

collections: async (parent, args, ctx: Context, info) => {
  return ctx.db.query.collections(
    {
      where: args.where
    },
    info
  )
},
allcollections: async (parent, args, ctx: Context, info) => {
  return ctx.db.query.collections({})
},
// wines: async (parent, args, ctx: Context, info) => {
//   return ctx.db.query.wines({ ...args }, info)
// },
// settings: async (parent, args, ctx: Context, info) => {
//   return ctx.db.query.settings({ ...args }, info)
// },
// foods: async (parent, args, ctx: Context, info) => {
//   return ctx.db.query.foods({ ...args }, info)
// },
// others: async (parent, args, ctx: Context, info) => {
//   return ctx.db.query.others({ ...args }, info)
// },

// likes: async (parent, args, ctx: Context, info) => {
//   return await ctx.db.query.likes({ ...args }, info)
// },
collection: async (parent, args, ctx: Context, info) => {
  return await ctx.db.query.collections({ ...args }, info)
}
}
