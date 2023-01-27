import GhostContentAPI from "@tryghost/content-api";

export default defineEventHandler(async (event) => {
  const { contentKey } = useRuntimeConfig();

  const api = new GhostContentAPI({
    url: "https://truflation.ghost.io",
    key: contentKey,
    version: "v5.0",
  });

  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
});

// export async function getSinglePost(postSlug) {
//   const api = new GhostContentAPI({
//     url: "https://truflation.ghost.io",
//     key: contentKey,
//     version: "v5.0",
//   });
//   return await api.posts
//     .read({
//       slug: postSlug,
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
