import React, { useContext } from "react";
import languageContext from "../context/LanguageContext";
import themeContext from "../context/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(themeContext);
  const { texts } = useContext(languageContext);
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
