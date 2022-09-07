import styles from "./ConverterSection.module.css";
import ConverterIcon from "../../assets/Images/converter.svg";
import React, { useState, useEffect } from "react";
function ConverterSection({ data, getValue }) {
  const [wholeOptions, setWholeOptions] = useState({
    fromCurrency: "USD",
    toCurrency: "AZN",
  });

  function getCurrencyFrom(val) {
    setWholeOptions({ ...wholeOptions, fromCurrency: val });
  }

  function getPassTo(val) {
    setWholeOptions({ ...wholeOptions, toCurrency: val });
  }
  useEffect(() => getValue(wholeOptions), [wholeOptions]);
  function changeOptionValues() {
    const fromCurrency = wholeOptions.toCurrency;
    const toCurrency = wholeOptions.fromCurrency;
    const obj = { fromCurrency, toCurrency };
    setWholeOptions(obj);
    getValue(wholeOptions);
  }
  return (
    <div className={styles.container}>
      <div className={styles.optionWrapper}>
        <select
          value={wholeOptions.fromCurrency}
          className={styles.leftOption}
          onChange={(e) => getCurrencyFrom(e.target.value)}
        >
          {data.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span onClick={() => changeOptionValues()}>
          <img src={ConverterIcon} alt="converter icon" />
        </span>
        <select
          value={wholeOptions.toCurrency}
          className={styles.rightOption}
          onChange={(e) => getPassTo(e.target.value)}
        >
          {data.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default React.memo(ConverterSection);
