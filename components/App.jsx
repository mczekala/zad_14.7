class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          firstName: "Jan",
          lastName: "Nowak",
          email: "jan.nowak@example.com"
        },
        {
          id: 2,
          firstName: "Adam",
          lastName: "Kowalski",
          email: "adam.kowalski@example.com"
        },
        {
          id: 3,
          firstName: "Zbigniew",
          lastName: "Koziol",
          email: "zbigniew.koziol@example.com"
        }
      ]
    };
    this.createContact = this.createContact.bind(this);
  }
  createContact(obj) {
    obj.id = obj.firstName + obj.lastName + obj.email;
    // console.log(obj);
    // let contacts = this.state.contacts;
    // contacts.push(obj);
    this.setState({ contacts: [...this.state.contacts, obj] });
  }
  render() {
    return (
      <div className="app">
        <ContactForm createContact={this.createContact} />
        <Contacts items={this.state.contacts} />
      </div>
    );
  }
}
