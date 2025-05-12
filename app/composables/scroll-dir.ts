export const useScrollDir = () => {
  const { directions } = useWindowScroll();

  const dir = ref(0);

  const updateScrollDirection = () => {
    if (directions.bottom) {
      dir.value = 1;
    } else if (directions.top) {
      dir.value = 0;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScrollDirection);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollDirection);
  });

  return dir;
};
