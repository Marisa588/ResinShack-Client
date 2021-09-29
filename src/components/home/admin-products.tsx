import { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';
// import {Link, Route, Switch} from 'react-router-dom';



type Props = {
    token: string,
}

type ProductsList ={
    name: string,
    description: string,
    price: string,
    imageLink: string,
    imageUrl: string
}
type State = {
    products : ProductsList[]
}



class AdminProducts extends Component<Props, State> {
    constructor(props:Props){
        super(props)
    this.state ={
        products: []
    }
}
componentDidMount() {
    this.displayProducts()
}
displayProducts = () => {
    fetch('http://localhost:3001/products', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.token}`
        })
    })
    .then(res => res.json())
    .then(json => {
        this.setState({
            products: json
        })
        console.log(json)
        console.log(this.state.products)
    })
    .catch(err => console.log(err))
}
    //  handleDelete = (e: React.FormEvent) => {
    //     e.preventDefault() 
    //              fetch(`http://localhost:3001/${this.state.postId}`, {
    //                method: "Delete",
    //                headers: new Headers({
    //                  "Content-Type": "application/json",
    //                  "Authorization": `Bearer ${this.props.token}`
    //                })
    //              })
    //              .then(response => response.json())
    //              .then((data) => {
    //                console.log(data);
    //              })
    //              .catch(err => {
    //                console.error(err)
    //              })
    //             }
        // handleUpdate = (e: React.FormEvent) => {
        //     e.preventDefault() 
        //                 fetch(`http://localhost:3001/${postId}`, {
        //                 method: "PUT",
        //                 headers: new Headers({
        //                     "Content-Type": "application/json",
        //                     "Authorization": `Bearer ${this.props.token}`
        //                 })
        //                 })
        //                 .then(response => response.json())
        //                 .then((data) => {
        //                 console.log(data);
        //                 })
        //                 .catch(err => {
        //                 console.error(err)
        //                 })
        //             }
        render() {

            return(
            <div className='list'>
                {this.state.products.map((products) => {
    
            return(
                <div className= 'productsPage'>
                    <Navbar bg='dark' variant='dark'>
                    <Container>
                    <Navbar.Brand href="/">
                    Julee's Resin Shop
                    </Navbar.Brand> 
                    <Navbar bg="dark" expand="lg">
                        <Nav className="me-auto">
                        </Nav>
                    </Navbar>
                    </Container>
                    </Navbar>
                
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
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                        {products.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{products.price}</small>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
                     
                    </div>
                    </div>            
                )
            })}
                </div>
            );
        }
    
    }

export default AdminProducts;