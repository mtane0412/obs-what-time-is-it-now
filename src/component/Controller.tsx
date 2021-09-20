import React, { useState, useEffect } from 'react';
import styles from './Controller.module.scss';
import {useTranslation} from 'react-i18next';
import {Fieldset} from './Fieldset';
import {Label} from './Label';
import {Checkbox} from './Checkbox';

type Props = {
  children?: React.ReactNode,
};

const styleElement = document.createElement('style');
const saveData: any = (() => {
  try {
    return JSON.parse(localStorage.getItem('obs-time-css') || '{}');
  } catch {
    return {};
  }
})();
const saveDataSave = () => {
  localStorage.setItem('obs-time-css', JSON.stringify(saveData));
};

export function Controller(props: Props) {
  const [bgColor, setBgColor] = useState(saveData.bgColor || '#ffffff');
  const [color, setColor] = useState(saveData.color || '#000000');
  const [weight, setWeight] = useState(saveData.weight || 'normal');
  const [fontFamily, setfontFamily] = useState(saveData.fontFamily || 'sans-serif');
  const [isTransparent, setIsTransparent] = useState(saveData.isTransparent ?? true);
  const { t } = useTranslation();
  console.log(isTransparent, 0);

  const colorChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;

    saveData.color = input.value;
    saveDataSave();

    return setColor(input.value);
  };
  const weightChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLSelectElement;

    saveData.weight = input.value;
    saveDataSave();

    return setWeight(input.value);
  };
  const fontFamilyChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;

    saveData.fontFamily = input.value;
    saveDataSave();

    return setfontFamily(input.value);
  };
  const transparentChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;

    saveData.isTransparent = input.checked;
    saveDataSave();

    return setIsTransparent(input.checked);
  };
  const bgColorChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;

    saveData.bgColor = input.value;
    saveDataSave();

    return setBgColor(input.value);
  };
  const Css = function () {
    const onFocus = function (e: React.SyntheticEvent) {
      const textarea = e.target as HTMLTextAreaElement;

      textarea.select();
    };

    return (
      <p>
        <textarea aria-label={t('カスタムCSS')} onFocus={onFocus} className={styles.result} value={
        `#time {
  /* ${t('ここに時間の見た目のCSSを追記可能')} */
  color: ${color};
  font-weight: ${weight};
  font-family: ${fontFamily};
}

body {
  overflow: hidden;
  background: ${isTransparent ? 'transparent' : bgColor};
}
header, #controller, footer {
  display: none !important;
}
main {
  align-self: auto;
  width: auto;
}
#target {
  margin: 0;
  border: 0;
  background: transparent;
}
#target__inner {
  padding: 0;
}
        `} readOnly/>
      </p>
    );
  };

  styleElement.textContent = `#time {
    color: ${color};
    font-weight: ${weight};
    font-family: ${fontFamily};
  }

  #target__inner {
    background: ${isTransparent ? 'transparent' : bgColor};
  }`;

  useEffect(() => {
    document.head.append(styleElement)
  });

  return (
    <div id="controller" className={styles.wrap}>
      {props.children}

      <Fieldset legend={t('前景色')}>
        <Label name={t('文字色')}>
          <input
            type="color"
            value={color}
            onChange={colorChange}
            className={styles.input}
          />
        </Label>

        <Label name={t('文字の太さ')}>
          <select
            onChange={weightChange}
            value={weight}
            className={styles.input}
          >
            <option>normal</option>
            <option>bold</option>
          </select>
        </Label>

        <Label name={t('フォント')}>
          <input
            onChange={fontFamilyChange}
            value={fontFamily}
            className={styles.input}
          />
        </Label>
      </Fieldset>

      <Fieldset legend={t('背景色')}>
        <Label name={t('透過')}>
          <Checkbox
            checked={isTransparent}
            onChange={transparentChange}
          />
        </Label>

        <Label name={t('背景色')} disabled={isTransparent}>
          <input
            type="color"
            value={bgColor}
            onChange={bgColorChange}
            className={styles.input} disabled={isTransparent}
          />
        </Label>
      </Fieldset>

      <Css />
    </div>
  );
}
