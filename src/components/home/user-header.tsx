import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import house from '../../assets/house.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './homepage';
import Products from '../landing/products';
import 'bootswatch/dist/quartz/bootstrap.min.css';




class UserHeader extends Component {




    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                Julee's Resin Shop
                </Navbar.Brand> 
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
  
                    </Nav>
                </Navbar>
                </Container>
            </Navbar> 
        )
    }
}

export default UserHeader;