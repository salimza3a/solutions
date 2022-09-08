import ConverterSection from "../ConverterSection";
import CalculatorSection from "../CalculatorSection";
import styles from "./Layout.module.css";
import CurrencySection from "../CurrencySection";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
axios.defaults.headers["apikey"] =
  import.meta.env.VITE_CURRENCY_EXCHANGE_API_KEY;
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

  const fromCurrency = optionValues.fromCurrency;
  const staticCurrencies = [
    {
      pastToCurrency: { fromCurrency, toCurrency: "USD" },
      currency_id: "001",
      currency_sign: "$",
      currency_name: "Dollar",
      currency_value: 58.82,
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "EUR" },
      currency_id: "002",
      currency_sign: "€",
      currency_name: "Euro",
      currency_value: 25.85,
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "TRY" },
      currency_id: "003",
      currency_sign: "₺",
      currency_name: "Tl",
      currency_value: 35.85,
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "RUB" },
      currency_id: "004",
      currency_sign: "₽",
      currency_name: "Rubl",
      currency_value: 15.85,
    },
  ];

  // axios
  //   .get(
  //     `https://api.apilayer.com/exchangerates_data/convert?to=${
  //       staticCurrencies[i].pastToCurrency.toCurrency
  //     }&from=${staticCurrencies[i].pastToCurrency.fromCurrency}&amount=${13}`
  //   )

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ConverterSection data={currency} getValue={getOptionValues} />
        <CalculatorSection options={optionValues} />
        {staticCurrencies.map((currency) => (
          <CurrencySection key={currency.currency_id} {...currency} />
        ))}
      </div>
    </div>
  );
}

export default Layout;
