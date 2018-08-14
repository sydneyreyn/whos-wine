
import { Context, getUserId } from "../../utils"

export const collection = {
    createcollection: async (parent, args, ctx: Context, info) => {
      const id = getUserId(ctx)
      // const pictureUrl = await processUpload(args.picture)
      return await ctx.db.mutation.createCollection(
        {
          ...args,
          // pictureUrl: pictureUrl,
          creator: {
            id: id
          }
        },
        info
      )
    }
  }