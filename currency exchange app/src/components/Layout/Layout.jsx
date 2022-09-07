import ConverterSection from "../ConverterSection";
import CalculatorSection from "../CalculatorSection";
import styles from "./Layout.module.css";
import CurrencySection from "../CurrencySection";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
axios.defaults.headers["apikey"] = import.meta.env.VITE_CURRENCY_EXCHANGE_API;
function Layout() {
  const [currency, setCurrency] = useState([]);
  const [optionValues, setOptionValue] = useState({});
  useEffect(() => {
    axios
      .get("https://api.apilayer.com/exchangerates_data/latest")
      .then(({ data }) => {
        const getKeys = Object.keys(data.rates);
        setCurrency([data.base, ...getKeys]);
      });
  }, []);

  function getOptionValues(item) {
    setOptionValue(item);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ConverterSection data={currency} getValue={getOptionValues} />
        <CalculatorSection options={optionValues} />
        <CurrencySection />
      </div>
    </div>
  );
}

export default Layout;
