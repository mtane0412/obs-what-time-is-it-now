import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import {Time} from './component/Time';
import {Controller} from './component/Controller';
import reportWebVitals from './reportWebVitals';
import './styles/common.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <main>
      <Time />
      <Controller>
        <h2>OBS用カスタムCSSジェネレータ</h2>
        <p>次の手順でご利用ください。</p>
        <ul>
          <li>OBSでブラウザソースを追加（新規作成）</li>
          <li>URL：このページのURLを設定</li>
          <li>幅：500程度</li>
          <li>高さ：150程度</li>
          <li>カスタムCSS：ページ下部のものを設定</li>
        </ul>
      </Controller>
    </main>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
