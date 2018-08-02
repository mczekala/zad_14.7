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
