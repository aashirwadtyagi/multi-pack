#multi_langgg

multi_langgg is a lightweight package for handling multiple languages in a React application. It provides easy-to-use methods for switching languages and retrieving translations based on the current language setting.

#Installation

To install multi_langgg, use npm or yarn:

npm install multi_langgg

or

yarn add multi_langgg

#Usage

1. Import the Package

In your React component, import the LanguageSwitcher:

import LanguageSwitcher from 'multi_langgg';

2. Set Up Translations

The package provides translations for English and Hindi. The default language is set to English, but you can switch between languages using the setLanguage method.

Here is an example of how to use the package in your React application:

import React, { useState } from 'react';
import LanguageSwitcher from 'multi_langgg';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ENGLISH');

  const handleChangeLanguage = () => {
    const newLanguage = language === 'ENGLISH' ? 'HINDI' : 'ENGLISH';
    setLanguage(newLanguage);
    LanguageSwitcher.setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <button onClick={handleChangeLanguage}>
        Switch Language
      </button>

      <h1>{LanguageSwitcher.getTranslation('loginheader')}</h1>
      <h2>{LanguageSwitcher.getTranslation('loginSubHeader')}</h2>
      <p>{LanguageSwitcher.getTranslation('userId')}</p>
      <p>{LanguageSwitcher.getTranslation('password')}</p>
      {/* Add other translated texts here */}
    </div>
  );
}

export default App;
3. API

LanguageSwitcher.setLanguage(lang)

Sets the current language.

Parameters: lang (string) - The language to switch to. Options are 'ENGLISH' or 'HINDI'.
LanguageSwitcher.getTranslation(key)

Returns the translation for the given key based on the current language.

Parameters: key (string) - The key for which to get the translation.

Returns: The translation string if found; otherwise, returns the key itself.