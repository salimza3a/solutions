import ConverterSection from "../ConverterSection";
import CalculatorSection from "../CalculatorSection";
import styles from "./Layout.module.css";
import CurrencySection from "../CurrencySection";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
axios.defaults.headers["apikey"] =
  import.meta.env.VITE_CURRENCY_EXCHANGE_API_KEY;
function Layout() {
  const [currency, setCurrency] = useState([]);
  const [optionValues, setOptionValue] = useState({});
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
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "EUR" },
      currency_id: "002",
      currency_sign: "€",
      currency_name: "Euro",
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "TRY" },
      currency_id: "003",
      currency_sign: "₺",
      currency_name: "Tl",
    },
    {
      pastToCurrency: { fromCurrency, toCurrency: "RUB" },
      currency_id: "004",
      currency_sign: "₽",
      currency_name: "Rubl",
    },
  ];
  const [newCurrency, setNewCurrency] = useState(staticCurrencies);
  useEffect(() => {
    axios
      .get("https://api.apilayer.com/exchangerates_data/latest")
      .then(({ data }) => {
        const getKeys = Object.keys(data.rates);
        setCurrency([data.base, ...getKeys]);
      });
  }, []);

  // uncompleted part here i use for loop with axios for fetching data but i have a problem
  // i need to time for fixing bug here are my solving way
  let currencyValues;
  async function getINputValueAndConvertNewResult(amount) {
    console.log(amount);
    const arr = [];
    for (let i = 0; i < staticCurrencies.length; i++) {
      await axios
        .get(
          `https://api.apilayer.com/exchangerates_data/convert?to=${staticCurrencies[i].pastToCurrency.toCurrency}&from=${staticCurrencies[i].pastToCurrency.fromCurrency}&amount=${amount}`
        )
        .then(({ data }) => {
          // console.log(data.result, "data");
          const convertedCurrency = data.result.toFixed(2);
          const newObj = {
            ...newCurrency[i],
            currency_value: convertedCurrency,
          };
          arr.push(newObj);
          setNewCurrency([...arr]);
        });
    }
    for (let i = 0; i < arr.length; i++) {
      currencyValues = [...currencyValues, arr[i].currency_value];
    }
  }
  console.log(currencyValues, "currency values");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ConverterSection data={currency} getValue={getOptionValues} />
        <CalculatorSection
          options={optionValues}
          returnInputVal={getINputValueAndConvertNewResult}
        />
        {newCurrency.map((currency) => (
          <CurrencySection key={currency.currency_id} {...currency} />
        ))}
      </div>
    </div>
  );
}

export default Layout;
