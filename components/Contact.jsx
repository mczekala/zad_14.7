class Contact extends React.Component {
  render() {
    return (
      <div className={"contactItem"}>
        <img
          src={
            "http://icons.veryicon.com/png/System/Fast%20Icon%20Users/User%20group.png"
          }
          className={"contactImage"}
        />
        <p className={"contactLabel"}>Imię: {this.props.item.firstName}</p>
        <p className={"contactLabel"}>Nazwisko: {this.props.item.lastName}</p>
        <a className={"contactEmail"} href={"mailto:" + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    );
  }
}
