import GhostContentAPI from "@tryghost/content-api";

export default defineEventHandler(async (event) => {
  const { contentKey } = useRuntimeConfig();
  const { slug } = event.context.params;

  const api = new GhostContentAPI({
    url: "https://truflation.ghost.io",
    key: contentKey,
    version: "v5.0",
  });
  return await api.posts
    .read({
      slug: slug,
    })
    .catch((err) => {
      console.error(err);
    });
});
