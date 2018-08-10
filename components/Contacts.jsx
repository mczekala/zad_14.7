class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.createContacts = this.createContacts.bind(this);
  }
  createContacts() {
    let contacts = this.props.items.map(function(contact) {
      return <Contact item={contact} key={contact.id} />;
    });
    return contacts;
  }
  render() {
    return <div>{this.createContacts()}</div>;
  }
}
