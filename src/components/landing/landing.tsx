
import { Container, Card, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import SignIn from './signin';
import SignUp from './signup';
import Admin from '../home/admin';
import User from '../home/user';
import Home from '../home/homepage';
import logo from '../../assets/logo.jpg';
import {Link, Route, Switch} from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';
import Products from './products';
import 'bootswatch/dist/quartz/bootstrap.min.css'





type Props = {
    token: string,
    updateToken(newToken: string): void,
    // updateRole(newRole:boolean):void
}

type State = {
    user:{
        username: string,
        password: string,
        sessionToken: string,
        // role: boolean
    }
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: '',
                sessionToken:'',
                // role: true
                }
            }

        }
    

    // updateToken = (newToken: string) => {
    //     localStorage.setItem('token', newToken)
    //     this.setState({
    //         sessionToken: newToken
    //     })
    //     console.log(this.state.sessionToken)
    // }

    // protectectViews = () => {
    //     return (localStorage.getItem('role')? <Admin updateToken={this.state.sessionToken}/> : <User/>)
    //   }

    render() {
        // if (this.state.user.role === true)  {
        //         return <Redirect to= '/admin'/>}
        //         else if (this.state.user.role) {
        //             <Redirect to ='/user'/>
        //         }

        return (
            
            <div className='landing'>
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                Julee's Resin Shop
                </Navbar.Brand> 
                    <div className="list">
                    <ul>
                        <Link to="/products">Products</Link>
                    </ul>
                    </div>
                    <div className="route">
                      <Switch> 
                         <Route exact path='/products'><Products/></Route> 
                     </Switch>  
                    </div>
                </Container>
                </Navbar>
                <Container className='landing-pg'>
                    <br/>
                    <br/>
                    <h1>
                    <img alt= 'shop logo' src= {logo}></img>
                    </h1>
                    <br />
                    <br />
                <Row className='homeWrapper'>
                    <Col md={4}>
                    <Card.Body>
                    <Card.Title as="h5">Sign Up</Card.Title>
                    <SignUp token={this.props.token}updateToken={this.props.updateToken} />
                    </Card.Body>
                    </Col>                   
                    <Col md={{span: 4, offset:4}}>
                    <Card.Body>
                    <Card.Title as="h5">Sign In</Card.Title>
                    <SignIn token={this.props.token}updateToken={this.props.updateToken}/>
                    </Card.Body>
                    </Col>               
                </Row>
                </Container>
                </div>
        )    
    }
}
  
  export default Landing;

