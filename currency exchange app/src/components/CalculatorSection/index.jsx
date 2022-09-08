import styles from "./CalculatorSection.module.css";
import CalculatorIcon from "../../assets/Images/changer.svg";
import { useRef } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
function CalculatorSection({ options, returnInputVal }) {
  const [currencyValue, setCurrencyValue] = useState();
  const [inputVal, setInputVal] = useState();
  const inputEl = useRef(null);
  function getInputValue() {
    let inputValue = inputEl.current.value;
    setInputVal(inputValue);
    convertValue(inputValue);
    returnInputVal(inputValue);
  }

  function convertValue(amount) {
    axios
      .get(
        `https://api.apilayer.com/exchangerates_data/convert?to=${options.toCurrency}&from=${options.fromCurrency}&amount=${amount}`
      )
      .then((res) => {
        const result = res.data.result.toFixed(2);
        setCurrencyValue(result);
      });
  }
  // compare previous state with current state
  useEffect(() => getInputValue(), [options]);

  return (
    <div className={styles.container}>
      <div className={styles.calculatorWrapper}>
        <span>Amount</span>
        <div className={styles.inputSection}>
          <input type="number" ref={inputEl} />
          <button className={styles.btn} onClick={() => getInputValue()}>
            <img src={CalculatorIcon} alt="Calculator icon" />
          </button>
        </div>
        <span>
          {currencyValue}
          {currencyValue && options.toCurrency}
        </span>
      </div>
    </div>
  );
}

export default CalculatorSection;
