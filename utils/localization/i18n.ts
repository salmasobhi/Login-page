// import { getLocales } from "expo-localization";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import { I18nManager } from "react-native";
// import { getUserLanguage, saveUserLanguage } from "../storage/cacheUser";
// import ar from './ar.json';
// import en from './en.json';

// export enum SupportedLanguages {
//   English = 'en',
//   Arabic = 'ar',
// }
// const resources = {
//   en: { translation: en },
//   ar: { translation: ar }
// };

// // Initialize i18n with saved language 
// const initializeWithSavedLanguage = async () => {
//   try {
//     const savedLanguage = await getUserLanguage();
//     const defaultLanguage = savedLanguage || 
//      getLocales()[0]?.languageCode || SupportedLanguages.Arabic;
  
//     await i18n
//       .use(initReactI18next)
//       .init({
//         resources,
//         lng: defaultLanguage,
//         fallbackLng: SupportedLanguages.Arabic,
//         interpolation: {
//           escapeValue: false
//         }
//       });
    
//     // Apply RTL settings based on loaded language
//     applyRTLSettings(i18n.language);
    
//     console.log("i18n initialized with language:", i18n.language);
//   } catch (error) {
//     console.log("Error initializing i18n:", error);
//   }
// };

// // Apply RTL settings based on language
// const applyRTLSettings = (language: string) => {
//   I18nManager.allowRTL(true);
//   if (language === SupportedLanguages.Arabic) {
//     I18nManager.forceRTL(true);
//   } else {
//     I18nManager.forceRTL(false);
//   }
// };

// // Handle language change
// i18n.on("languageChanged", async () => {
//   const currentLang = i18n.language;
  
//   // Save the selected language
//   await saveUserLanguage(currentLang);
  
//   // Apply RTL settings
//   applyRTLSettings(currentLang);
  
//   console.log(`Language changed to: ${currentLang}`);
// });

// // Initialize i18n
// initializeWithSavedLanguage();

// export default i18n;




import { getLocales } from "expo-localization";
import * as Updates from "expo-updates";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

import ar from "./ar.json";
import en from "./en.json";

export enum SupportedLanguages {
  English = "en",
  Arabic = "ar",
}

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocales()[0]?.languageCode ?? SupportedLanguages.Arabic,
  fallbackLng: SupportedLanguages.Arabic,
  interpolation: { escapeValue: false },
});

I18nManager.allowRTL(true);

i18n.on("languageChanged", async (lng) => {
  if (lng === "ar") {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }

  try {
    await Updates.reloadAsync();
  } catch (err) {
    console.log("Error reloading app:", err);
  }
});

export default i18n;
