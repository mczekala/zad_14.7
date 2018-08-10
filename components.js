"use strict";

var contacts = [{
  id: 1,
  firstName: "Jan",
  lastName: "Nowak",
  email: "jan.nowak@example.com"
}, {
  id: 2,
  firstName: "Adam",
  lastName: "Kowalski",
  email: "adam.kowalski@example.com"
}, {
  id: 3,
  firstName: "Zbigniew",
  lastName: "Koziol",
  email: "zbigniew.koziol@example.com"
}];

var contactForm = {
  firstName: "",
  lastName: "",
  email: ""
};

var App = React.createClass({
  displayName: "App",

  onName: function onName(name) {
    var contact = contacts[0].firstName;
    this.setState({ contact: name });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(ContactForm, { onName: this.onName, contact: contactForm }),
      React.createElement(Contacts, { items: contacts })
    );
  }
});
"use strict";

var Contact = React.createClass({
  displayName: "Contact",

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "contactItem" },
      React.createElement("img", {
        src: "http://icons.veryicon.com/png/System/Fast%20Icon%20Users/User%20group.png",
        className: "contactImage"
      }),
      React.createElement(
        "p",
        { className: "contactLabel" },
        "Imi\u0119: ",
        this.props.item.firstName
      ),
      React.createElement(
        "p",
        { className: "contactLabel" },
        "Nazwisko: ",
        this.props.item.lastName
      ),
      React.createElement(
        "a",
        { className: "contactEmail", href: "mailto:" + this.props.item.email },
        this.props.item.email
      )
    );
  }
});
"use strict";

var ContactForm = React.createClass({
  displayName: "ContactForm",

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  handleChange: function handleChange(event) {
    this.props.onName(event.target.value);
  },

  render: function render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit, className: "contactForm" },
      React.createElement("input", {
        onChange: this.handleChange,
        type: "text",
        placeholder: "Imi\u0119",
        value: this.props.contact.firstName
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Nazwisko",
        value: this.props.contact.lastName
      }),
      React.createElement("input", {
        type: "email",
        placeholder: "Email",
        value: this.props.contact.email
      }),
      React.createElement(
        "button",
        { type: "submit" },
        "Dodaj kontakt"
      )
    );
  }
});
"use strict";

var Contacts = React.createClass({
  displayName: "Contacts",

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function render() {
    var contacts = this.props.items.map(function (contact) {
      return React.createElement(Contact, { item: contact, key: contact.id });
    });
    return React.createElement(
      "ul",
      { className: "contactsList" },
      " ",
      contacts
    );
  }
});
