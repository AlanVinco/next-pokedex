'use client'
import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      addGoogleTranslateScript();
    }

    // Define the function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'es', // Specify included languages (optional)
            autoDisplay: false, // Set to true to automatically display the translation
          },
        'google_translate_element'
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
