import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Header extends React.Component {
    render() {
        return <Navbar bg="navbar-dark bg-primary" variant="dark" >
            <Navbar.Brand href="#home">To Do</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mx-auto" />
            </Form>
        </Navbar>

    }
}

export default Header
