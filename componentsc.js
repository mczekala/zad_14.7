"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      contacts: [{
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
      }],
      contactForm: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
    _this.createContact = _this.createContact.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "createContact",
    value: function createContact(obj) {
      obj.id = obj.firstName + obj.lastName + obj.email;
      console.log(obj);
      var contacts = this.state.contacts;
      contacts.push(obj);
      this.setState({ contacts: contacts });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "app" },
        React.createElement(ContactForm, {
          createContact: this.createContact,
          contact: this.state.contactForm
        }),
        React.createElement(Contacts, { items: this.state.contacts })
      );
    }
  }]);

  return App;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
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
  }]);

  return Contact;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm(props) {
    _classCallCheck(this, ContactForm);

    var _this = _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));

    _this.state = {
      firstName: "",
      lastName: "",
      email: "",
      id: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ContactForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.props.createContact(this.state);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit, className: "contactForm" },
        React.createElement("input", {
          type: "text",
          placeholder: "Imi\u0119",
          value: this.state.firstName,
          onChange: function onChange(e) {
            return _this2.setState({
              firstName: e.target.value
            });
          }
        }),
        React.createElement("input", {
          type: "text",
          placeholder: "Nazwisko",
          value: this.state.lastName,
          onChange: function onChange(e) {
            return _this2.setState({
              lastName: e.target.value
            });
          }
        }),
        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          autoComplete: "email",
          value: this.state.email,
          onChange: function onChange(e) {
            return _this2.setState({
              email: e.target.value
            });
          }
        }),
        React.createElement(
          "button",
          null,
          "Dodaj kontakt"
        )
      );
    }
  }]);

  return ContactForm;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
  _inherits(Contacts, _React$Component);

  function Contacts(props) {
    _classCallCheck(this, Contacts);

    var _this = _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));

    _this.createContacts = _this.createContacts.bind(_this);
    return _this;
  }

  _createClass(Contacts, [{
    key: "createContacts",
    value: function createContacts() {
      var contacts = this.props.items.map(function (contact) {
        return React.createElement(Contact, { item: contact, key: contact.id });
      });
      return contacts;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.createContacts()
      );
    }
  }]);

  return Contacts;
}(React.Component);
