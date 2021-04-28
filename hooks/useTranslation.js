import { useRouter } from "next/router";
import { get } from "lodash";

import en from "../locales/en";
import fr from "../locales/fr";

const locales = {
  en,
  fr,
};

const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const language = locale;

  const t = (key = "") => {
    return get(locales[locale], key) || key;
  };

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return {
    t,
    language,
    changeLanguage,
  };
};

export default useTranslation;
