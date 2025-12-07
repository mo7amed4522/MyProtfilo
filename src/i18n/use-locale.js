/**
 * Internationalization configuration for ElementPlus/EleAdminPlus/Dayjs
 */
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const I18N_CACHE_NAME = "i18n_lang";
function setPageTitle(title) {
  if (title) document.title = title;
}
// ElementPlus
import zh_CN from "element-plus/es/locale/lang/zh-cn";
import zh_TW from "element-plus/es/locale/lang/zh-tw";
import en from "element-plus/es/locale/lang/en";
import ar from "element-plus/es/locale/lang/ar";
// Dayjs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";
import "dayjs/locale/ar";
const elLocales = { zh_CN, zh_TW, en, ar };

export function useLocale() {
  const { currentRoute } = useRouter();
  const { locale } = useI18n();
  const elLocale = ref();

  watch(
    locale,
    () => {
      elLocale.value = elLocales[locale.value];
      dayjs.locale(locale.value.toLowerCase().replace(/_/g, "-"));
      setPageTitle(getRouteTitle(currentRoute.value));
    },
    { immediate: true },
  );
  return { elLocale };
}

/**
 * Get the cached language
 */
export function getCacheLang() {
  return localStorage.getItem(I18N_CACHE_NAME) || "zh_CN";
}

/**
 * Set the cached language
 * @param lang Language to cache
 */
export function setCacheLang(lang) {
  if (!lang) {
    localStorage.removeItem(I18N_CACHE_NAME);
    return;
  }
  localStorage.setItem(I18N_CACHE_NAME, lang);
}

/**
 * Get the title of the route
 * @param route Route object
 */
export function getRouteTitle(route) {
  // const lang = route.meta?.lang ?? {};
  const lang = route.meta?.lang ? JSON.parse(route.meta.lang) : {};
  return lang[getCacheLang()] ?? route.meta?.title;
}
