import styles from "./CurrencySection.module.css";

function CurrencySection() {
  return (
    <div className={styles.container}>
      <div className={styles.currencyWrapper}>
        <div className={styles.currency}>
          <span>$</span>
          <span>Dollar</span>
        </div>
        <span>99.23</span>
      </div>
    </div>
  );
}

export default CurrencySection;
