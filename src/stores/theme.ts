import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark" | "system">("system");
  const resolvedTheme = ref<"light" | "dark">("light");

  const isDark = computed(() => resolvedTheme.value === "dark");

  function initializeTheme() {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (
      savedTheme &&
      (savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system")
    ) {
      theme.value = savedTheme;
    }

    // Resolve actual theme
    resolveTheme();

    // Listen for system theme changes
    if (theme.value === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", resolveTheme);
    }
  }

  function resolveTheme() {
    let newTheme: "light" | "dark";

    if (theme.value === "system") {
      newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      newTheme = theme.value;
    }

    resolvedTheme.value = newTheme;

    // Apply theme to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  }

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", theme.value);
    resolveTheme();
  }

  return {
    theme,
    resolvedTheme,
    isDark,
    initializeTheme,
    toggleTheme,
  };
});
