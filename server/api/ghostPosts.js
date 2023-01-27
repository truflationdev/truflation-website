import GhostContentAPI from "@tryghost/content-api";

export async function getPosts() {
  const { contentKey } = useRuntimeConfig();
  const key = contentKey;

  const api = new GhostContentAPI({
    url: "https://truflation.ghost.io",
    key: key,
    version: "v5.0",
  });

  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  const { contentKey } = useRuntimeConfig();
  const key = contentKey;

  const api = new GhostContentAPI({
    url: "https://truflation.ghost.io",
    key: key,
    version: "v5.0",
  });
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
