import React from "react";
import Table from "react-bootstrap/Table";

class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, users: [] };
    this.headers = [
      { key: "name", label: "Name" },
      { key: "age", label: "Age" },
      { key: "email", label: "Email" },
      { key: "role", label: "Role" },
      { key: "status", label: "Status" },
    ];
  }

  componentDidMount() {
    var request = new XMLHttpRequest(); //XMLHttpRequest for fetching data instead of Fetch API (fetch())

    request.open(
      "GET",
      "https://1bferubrff.execute-api.ap-southeast-1.amazonaws.com/dev/userslist",
      true
    );

    request.onload = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.setState({ users: JSON.parse(request.responseText) }); //use setState() to update your component when the data is retrieved.
      } else {
        //Error
      }
    };

    request.onerror = (err) => {
      this.setState({ error: err });
    };

    request.send();
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else {
      return (
        <div className="container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                {this.headers.map(function (h) {
                  return <th key={h.key}>{h.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(function (item, key) {
                return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default Userlist;
