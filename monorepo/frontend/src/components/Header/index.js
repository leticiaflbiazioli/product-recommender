import i18n from 'i18next';
import React, { useState } from 'react';
import bandeiraPt from '../../images/brazil.png';
import bandeiraEn from '../../images/united-kingdom.png';

export const Header = () => {
  const [currentLang, setCurrentLang] = useState('pt');

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <header className="bg-white shadow-md w-full ">
      <div className=" flex flex-col justify-center items-center py-8">
        <div className="w-full md:w-3/4 lg:w-2/3 px-8">
          <div className="flex justify-between">
            <img
              data-testid="logo"
              width="200"
              src="/logo.svg"
              alt="RDStation"
            />

            <div onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
              <img
                src={currentLang === 'pt' ? bandeiraEn : bandeiraPt}
                alt="flag"
                style={{ width: '28px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
