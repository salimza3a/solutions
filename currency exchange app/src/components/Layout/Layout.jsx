import ConverterSection from "../ConverterSection";
import CalculatorSection from "../CalculatorSection";
import styles from "./Layout.module.css";
import CurrencySection from "../CurrencySection";
function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ConverterSection />
        <CalculatorSection />
        <CurrencySection />
      </div>
    </div>
  );
}

export default Layout;
