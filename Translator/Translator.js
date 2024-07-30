import languages from './languages'
  
let currentLanguage = 'ENGLISH';
  
const setLanguage = (lang) => {
  currentLanguage = lang;
};
  
const getTranslation = (key) => {
  return languages[currentLanguage][key] || key;
};
  
const LanguageSwitcher = {
  setLanguage,
  getTranslation,
};

module.exports = LanguageSwitcher;