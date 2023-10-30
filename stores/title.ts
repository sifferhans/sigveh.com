export const useTitleStore = defineStore("title", () => {
  const hasAnimated = ref(false);

  function setAnimated(value: boolean) {
    hasAnimated.value = value;
  }

  return {
    hasAnimated,
    setAnimated,
  };
});
