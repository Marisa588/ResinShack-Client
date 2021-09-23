
import { Container, Col, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import SignIn from './signin';
import SignUp from './signup';
//import pic1 from '../../assets/pic1.jpg';



type Props = {
    token: string,
    updateToken(newToken: string): void,
}

type State = {
        username: string,
        password: string
        sessionToken: string
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
                username: '',
                password: '',
                sessionToken:''
                }

        }
    

    updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        this.setState({
            sessionToken: newToken
        })
        console.log(this.state.sessionToken)
    }


    render() {
        // if (this.state.user.role === true)  {
        //         return <Redirect to= '/home/admin'/>}
        //         else if (this.state.user.role) {
        //             <Redirect to ='/home/user'/>
        //         }

        return (
            <div className='landing'>
                <Container className='landing-pg'>
                    <br/>
                    <br/>
                    <h1>Welcome to Julee's Resin Shack! </h1>
                    <br />
                    <br />
                <Col className='homeWrapper' md={{ span: 6, offset: 3 }}>
                    <Card style={{ width: '30rem'}}>
                    <SignUp token={this.props.token} updateToken={this.props.updateToken} />
                    </Card>
                    <br/>
                    <br/>
                    <Card style={{ width: '30rem'}}>
                    <SignIn token={this.props.token}updateToken={this.props.updateToken}/>
                    </Card>
                    
                </Col>
                </Container>
            </div>
        )
    }
}
  
  export default Landing;

  //'style={{ backgroundImage: `url(${pic1})`, backgroundSize: 'cover', height: '100%', width: '100%'}}