

import prisma from "@/src/libs/prismaDb";
import { cache } from "react";

const getPosts = cache(async (postSlug: string) => {
    const post = await prisma.tbPosts.findUnique({
      where: { postSlug },
      include: {
        DetailPostDesc: true,
      },
    });
  
    return post;
  })

  export default getPosts;