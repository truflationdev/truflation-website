// import VueGtag from "vue-gtag-next";

// export default defineNuxtPlugin((nuxtApp) => {
//   const { gtagId } = useRuntimeConfig();

//   nuxtApp.vueApp.use(VueGtag, {
//     property: {
//       id: gtagId,
//     },
//   });
// });

import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const { gtagId } = useRuntimeConfig();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: gtagId,
      },
    },
    nuxtApp.$router
  );
});
