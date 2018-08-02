"use strict";

var ContactForm = React.createClass({
  displayName: "ContactForm",

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function () {
    return React.createElement(
      "form", {
        className: "contactForm"
      },
      React.createElement("input", {
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
        "button", {
          type: "submit"
        },
        "Dodaj kontakt"
      )
    );
  }
});