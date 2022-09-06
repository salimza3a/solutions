import styles from "./CalculatorSection.module.css";
import CalculatorIcon from "../../assets/Images/changer.svg";
function CalculatorSection() {
  return (
    <div className={styles.container}>
      <div className={styles.calculatorWrapper}>
        <span>Amount</span>
        <div className={styles.inputSection}>
          <input type="number" placeholder={100} step="0.01" />
          <button className={styles.btn}>
            <img src={CalculatorIcon} alt="Calculator icon" />
          </button>
        </div>
        <span>168.24 usd</span>
      </div>
    </div>
  );
}

export default CalculatorSection;
