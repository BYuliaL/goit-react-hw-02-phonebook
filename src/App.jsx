import { Component } from "react";
import shortid from "shortid";

import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    filter: "",
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  formSubmitHandler = ({ name, number }) => {
    const inputValue = this.state.contacts
      .map((contact) => contact.name)
      .includes(name);

    if (inputValue) {
      alert(`Name '${name}' is already in contacts`);
    } else {
      const data = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState((prevState) => ({
        contacts: [data, ...prevState.contacts],
      }));
    }
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onAdd={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}
export default App;
