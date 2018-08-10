class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.props.createContact(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={"contactForm"}>
        <input
          type="text"
          placeholder="Imię"
          value={this.state.firstName}
          onChange={e =>
            this.setState({
              firstName: e.target.value
            })
          }
        />
        <input
          type="text"
          placeholder="Nazwisko"
          value={this.state.lastName}
          onChange={e =>
            this.setState({
              lastName: e.target.value
            })
          }
        />
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={this.state.email}
          onChange={e =>
            this.setState({
              email: e.target.value
            })
          }
        />
        <button>Dodaj kontakt</button>
      </form>
    );
  }
}
