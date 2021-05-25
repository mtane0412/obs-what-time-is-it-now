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
        <h2>OBS用カスタムCSS</h2>
        <p>OBSでは500x150程度で読み込んでください。</p>
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
