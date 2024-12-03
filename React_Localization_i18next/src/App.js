import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; 

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{t('welcome')}</h1>

        <p className="text-lg text-gray-600 mb-8">{t('welcomeMessage')}</p>

        <div className="relative inline-block">
          <select
            onChange={changeLang}
            value={i18n.language}
            className="appearance-none block w-full px-6 py-3 bg-white text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-300"
          >
            <option value="en">English</option>
            <option value="jp">Japanese</option>
            <option value="de">German</option>
          </select>
          <span className="absolute top-2 right-0 p-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

        <div className="mt-6 text-gray-500">{t('chooseLanguage')}</div>
      </div>
    </div>
  );
};

export default App;
