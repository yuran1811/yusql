import type { RouterOptions } from '@nuxt/schema';

export default {
  async scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition);
        }

        if (to.hash) {
          return resolve({
            el: to.hash,
            top: 0,
          });
        }

        resolve({ top: 0 });
      }, 100);
    });
  },
} satisfies RouterOptions;
