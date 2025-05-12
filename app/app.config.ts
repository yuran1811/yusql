export default defineAppConfig({
  app: {
    name: 'yusql',
    author: 'yuran1811',
    repo: 'https://github.com/yuran1811/yusql',
  },
  pageCategories: {
    other: {
      label: 'Other',
      icon: 'lucide:box',
    },
  },
  ui: {
    accordion: {
      slots: {
        trigger: 'cursor-pointer',
        item: 'md:py-2',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    colors: {
      primary: 'green',
      neutral: 'zinc',
    },
    contextMenu: {
      slots: {
        group: 'p-1 isolate max-h-42 overflow-y-auto w-max',
      },
    },
    formField: {
      slots: {
        root: 'w-full',
      },
    },
    input: {
      slots: {
        root: 'w-full',
      },
    },
    modal: {
      slots: {
        overlay: 'fixed inset-0 sm:bg-elevated/45 sm:backdrop-blur-sm',
        content:
          'fixed sm:bg-default/30 sm:backdrop-blur-2xl divide-y divide-default flex flex-col focus:outline-none',
      },
    },
    navigationMenu: {
      slots: {
        link: 'cursor-pointer',
      },
      variants: {
        disabled: {
          true: {
            link: 'cursor-text',
          },
        },
      },
    },
    textarea: {
      slots: {
        root: 'w-full',
        base: 'resize-none',
      },
    },
  },
});
