import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filter}>
      Find contacts by name: <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
