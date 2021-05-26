import React from "react";
import logo from "./logo.svg";
import {Button, Navbar, Form, FormControl, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <AmplifySignOut width="20px"/>
        </Form>
      </Navbar>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>

    </div>
  );
}

export default withAuthenticator(App);
