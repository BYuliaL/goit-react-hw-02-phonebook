import { Component } from "react";
import shortid from "shortid";
// import PropTypes from "prop-types";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  telInputId = shortid.generate();

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleTelChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.form__label}>
          Name
          <br />
          <input
            className={styles.form__input}
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label htmlFor={this.telInputId} className={styles.form__label}>
          Namber
          <br />
          <input
            className={styles.form__input}
            id={this.telInputId}
            value={this.state.number}
            onChange={this.handleTelChange}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <br />
        <button className={styles.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default Form;
