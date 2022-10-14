import styles from "../styles/Select.module.css";

const Select = ({ defaultText, optionsKeyPairs, addStylesClass, ...rest }) => {
  return (
    <div className={`${styles.select} ${addStylesClass}`}>
      <select {...rest}>
        <option>{defaultText}</option>
        {Object.entries(optionsKeyPairs).map(([k, v]) => (
          <option key={k} value={k}>
            {v}
          </option>
        ))}
      </select>
      <img src="/images/select_down_arrow.svg" />
    </div>
  );
};
export default Select;
