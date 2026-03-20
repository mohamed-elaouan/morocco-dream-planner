import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to RAD Morocco",
      // Add English translations here as the app scales
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue chez RAD Maroc",
      // Add French translations here
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a RAD Marruecos",
      // Add Spanish translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
