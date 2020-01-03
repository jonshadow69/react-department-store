import React from "react";
import axios from "axios"
import { Card, Header, } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    debugger
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data });
      })
  }

  renderDepartments = () => {
    const { departments } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
          <Card.Description>
            No Description
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Departments;