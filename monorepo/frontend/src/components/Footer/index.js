import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#f1f3f5] shadow-md w-full ">
      <div className=" flex flex-col justify-center items-center py-8">
        <div className="w-full md:w-3/4 lg:w-2/3 px-8">
          <div className="flex justify-between">
            <div>
              <img width="200" src="/logo.svg" alt="RDStation" />
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-x-12">
              <div className="flex flex-col items-center">
                <h4 className="font-bold">{t('phone')}</h4>
                <p className="text-sm text-center">+55 48 3877-2700</p>
              </div>

              <div className="flex flex-col items-center mt-4 md:mt-0">
                <h4 className="font-bold">{t('address')}</h4>
                <p className="text-sm text-center">Florianópolis - SC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
