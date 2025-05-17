export const usePages = () => {
  const router = useRouter();
  const { pageCategories } = useAppConfig();

  const routes = router
    .getRoutes()
    .filter(
      (route) =>
        !['index', 'about', 'references', 'all'].includes(
          route.name as string,
        ) && !(route.name as string).includes('slug'),
    );

  const categorizedRoutes = routes.reduce(
    (acc, route) => {
      const category = (route.meta.category as string) || 'other';
      if (!category) return acc;

      if (!acc[category]) {
        acc[category] = {
          label: pageCategories[category as keyof typeof pageCategories]?.label,
          icon:
            pageCategories[category as keyof typeof pageCategories]?.icon ||
            'i-lucide-folder',
          to: route.path,
          slot: 'main' as const,
          children: [],
        };
      }

      acc[category].children.push({
        label: (route.meta.name || route.name) as string,
        description: route.meta.description as string,
        icon: (route.meta.icon as string) || 'i-lucide-package',
        to: route.path,
        slot: 'main' as const,
      });

      return acc;
    },
    {} as Record<
      string,
      {
        label: string;
        icon: string;
        to: string;
        slot: string;
        children: Array<{
          label: string;
          description: string;
          icon: string;
          to: string;
          slot: string;
        }>;
      }
    >,
  );

  return {
    pages: [
      [
        {
          label: 'About',
          icon: 'lucide:info',
          to: '/about',
          slot: 'main' as const,
        },
        {
          label: 'References',
          icon: 'lucide:book-open-text',
          to: '/references',
          slot: 'main' as const,
        },
        ...Object.values(categorizedRoutes),
      ],
      [],
    ],
  };
};
