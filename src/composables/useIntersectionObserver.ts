import { ref, onMounted, onUnmounted } from "vue";

export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {},
) {
  const elementRef = ref<Element | null>(null);
  let observer: IntersectionObserver | null = null;

  const observe = (element: Element) => {
    if (!element) return;

    elementRef.value = element;

    observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry);
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    observer.observe(element);
  };

  const unobserve = () => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(() => {
    // Cleanup handled by unobserve
  });

  onUnmounted(() => {
    unobserve();
  });

  return {
    elementRef,
    observe,
    unobserve,
  };
}
