import React from 'react';
import ReactDOM from 'react-dom';
import './locales/i18n';
import {useTranslation} from 'react-i18next';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import {Time} from './component/Time';
import {Controller} from './component/Controller';
import reportWebVitals from './reportWebVitals';
import './styles/common.scss';

const Main = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Time />
      <Controller>
        <h2>{t('OBS用カスタムCSSジェネレータ')}</h2>
        <p>{t('次の手順でご利用ください。')}</p>
        <ol>
          <li>{t('OBSでブラウザソースを追加（新規作成）')}</li>
          <li>{t('URL：このページのURLを設定')}</li>
          <li>{t('幅：500程度')}</li>
          <li>{t('高さ：150程度')}</li>
          <li>{t('カスタムCSS：ページ下部のものを設定')}</li>
        </ol>
      </Controller>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Main />

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
