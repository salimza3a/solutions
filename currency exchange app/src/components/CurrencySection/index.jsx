import styles from "./CurrencySection.module.css";

function CurrencySection({ currency_sign, currency_name, currency_value }) {
  // console.log(currency_value, "currency value");
  return (
    <div className={styles.container}>
      <div className={styles.currencyWrapper}>
        <div className={styles.currency}>
          <span>{currency_sign}</span>
          <span>{currency_name}</span>
        </div>
        <span>{currency_value ?? ""}</span>
      </div>
    </div>
  );
}

export default CurrencySection;
