# multi_langgg

A simple, customizable language translation module for your React applications.

# Install

npm i multi_langgg

# Usage

import LanguageSwitcher from 'multi_langgg';

// Set the initial language
LanguageSwitcher.setLanguage('HINDI');

// Get the translation for a key
const translatedText = LanguageSwitcher.getTranslation('loginheader');
console.log(translatedText); // Output: "अपने खाते में लॉगिन करें"

