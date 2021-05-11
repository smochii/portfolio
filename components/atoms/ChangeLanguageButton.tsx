import React from 'react'
import styles from '../../styles/modules/Home.module.css'
import LanguageState from '../../states/atoms/LanguageState';
import { LANGUAGE_EN, LANGUAGE_JA } from '../../constant/constant';
import { useRecoilState } from 'recoil';

const ChangeLanguageButton: React.FC = () => {
  const [language, setLanguage] = useRecoilState(LanguageState);

  const onClickEn: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setLanguage(LANGUAGE_EN);
  };

  const onClickJa: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setLanguage(LANGUAGE_JA);
  };
  
  return (
    <div className={styles.languageButton}>
      <div onClick={onClickEn} className={`${styles.languageButtonItem} ${language == LANGUAGE_EN ? styles.languageButtonItemActive: ''}`}>en</div>
      <div onClick={onClickJa} className={`${styles.languageButtonItem} ${language == LANGUAGE_JA ? styles.languageButtonItemActive: ''}`}>ja</div>
    </div>
  )
}

export default ChangeLanguageButton
