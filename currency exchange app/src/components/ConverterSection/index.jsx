import styles from "./ConverterSection.module.css";
import ConverterIcon from "../../assets/Images/converter.svg";
function ConverterSection() {
  return (
    <div className={styles.container}>
      <div className={styles.optionWrapper}>
        <select className={styles.leftOption}>
          <option>AZN</option>
        </select>
        <span>
          <img src={ConverterIcon} alt="converter icon" />
        </span>
        <select className={styles.rightOption}>
          <option>ENG</option>
        </select>
      </div>
    </div>
  );
}

export default ConverterSection;
