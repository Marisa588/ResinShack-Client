
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import SignIn from './signin';
import SignUp from './signup';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';






type Props = {
    token: string,
    updateToken(newToken: string): void,
    updateRole(newRole: boolean): void
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
        // adminView = () => {
        // return localStorage.getItem("role") === "true" ?  (
        //      <Redirect to= '/admin'/>
        // )
        //     : (
        //         <Redirect to ='/user'/>
        //     )
        // }

        // componentDidMount() {
        //     this.adminView()
        // }

    render() {
        
        return (
            
            <div className='landing'>
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href='/'>
                Julee's Resin Shop
                </Navbar.Brand> 
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar>
                    <div className="list">
                    <ul>
                        <Link to="/products">Products</Link>
                    </ul>
                    </div>
                    <div className='route'>
                   
                    </div>
                </Container>
                </Navbar>
                <Container className='landing-pg'>
                    <br/>
                    <br/>
                    <h1>
                    <img alt= 'shop logo' src= {logo} style={{height: 300}}></img>
                    </h1>
                    <br />
                    <br />
                <Row className='homeWrapper'>
                    <Col md={4}>
                    <Card.Body>
                    <Card.Title as="h5">Sign Up</Card.Title>
                    <SignUp token={this.props.token} updateToken={this.props.updateToken} updateRole={this.props.updateRole} />
                    </Card.Body>
                    </Col>                   
                    <Col md={{span: 4, offset:4}}>
                    <Card.Body>
                    <Card.Title as="h5">Sign In</Card.Title>
                    <SignIn token={this.props.token} updateToken={this.props.updateToken} updateRole={this.props.updateRole}/>
                    </Card.Body>
                    </Col>               
                </Row>
                </Container>
                </div>
        )    
    }
}
  
  export default Landing;