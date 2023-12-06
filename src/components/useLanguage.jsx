// useLanguage.js
import { useTranslation } from "react-i18next";
import { useState } from "react";

const useLanguage = () => {
  const [t, i18n] = useTranslation("global");
  const [openModal, setOpenModal] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLanguageSwitch = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  return {
    t,
    handleChangeLanguage,
    openModal,
    handleLanguageSwitch,
  };
};

export default useLanguage;
