export const useGlobalStore = defineStore<
  string,
  GlobalStoreState,
  any,
  GlobalStoreActions
>('global_store', {
  state: () => ({}),
  actions: {},
});
