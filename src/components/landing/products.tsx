import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';
// import {Link, Route, Switch} from 'react-router-dom';
// import Landing from './landing';




// type Props = {
//     token: string,
//     updateToken(newToken: string) : void,
// };

type State = {
    products: {
        name: string,
        description: string,
        price: string,
        imageUrl:string
    }


}

class Products extends Component<{}, State> {
    State ={
        products:{
            name: '',
            description: '',
            price: '',
            imageUrl:'',
        }
    }

     fetchItems = async() => {
        // const result=
        fetch('http://localhost:3001/products', {
            method: 'Get',
            body: JSON.stringify({
                product: {
                  name: '',
                  description: '',
                  price: '',
                  imageUrl:''
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(
            (response) => response.json()
        ).then((itemData) => {
           console.log(itemData)
        })

        .catch(err => {
            console.error(err)
        })
            
    }  
    
    render() {
        return(
            <div className= 'productsPage'>
            <div className='navbar'>
                <Navbar bg='dark' variant='dark'>
                <Container>
                <Navbar.Brand href="/home">
                Julee's Resin Shop
                </Navbar.Brand> 
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar>
                </Container>
                </Navbar>
            </div>
            {/* <div className = 'searchbar'>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </div> */}
        <div className="landing-cards">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        body
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                    test
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">price</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                </div>
                </div>
        )
    }

}

export default Products;
// export {}