import  { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {Navbar, Nav, Container} from 'react-bootstrap';



type FavoriteProps = {
    token: string,
};

type FavoriteState = {
   product: {
   name: string;
   description: string;
   price: string;
   imageUrl: string;
   imageLink: string;
   owner_id: string;

    };
    postId: number 
}

class UserFavorite extends Component <FavoriteProps, FavoriteState> {
    constructor (props: FavoriteProps) {
        super(props)
        this.state ={
            product: {
                name: "",
                description: "",
                price: "",
                imageUrl: "",
                imageLink: "",
                owner_id: ""
            },

            postId: 1
        }
    }
    componentDidMount() {
        this.displayFavorite()
    }

     displayFavorite = () => {
           fetch('http://localhost:3001/favorite/', {
            method: 'Get',
            body: JSON.stringify({
                product: {
                  name:"",
                  description:"",
                  price: "",
                  imageUrl:"",
                  owner_id: ""
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then (res => res.json())
        .then(json => {
            this.setState({
                product: json
            })
           console.log(json)
           console.log(this.state.product)
        })

        .catch(err => {
            console.error(err)
        })
            
    } 

    handleDelete = (e: React.FormEvent) => {
        e.preventDefault() 
                 fetch(`http://localhost:3001/products/${this.state.postId}`, {
                   method: "Delete",
                   headers: new Headers({
                   'Content-Type': "application/json",
                     'Authorization': `Bearer ${this.props.token}`
                   })
                 })
                 .then(response => response.json())
                 .then((data) => console.log(data))
                 .catch((error) => console.log(error));
                 this.displayFavorite()
                 }
    
    
    
    render() {
        return(
            <div>
            <div className="navbar">
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">
                Julee's Resin Shop
                </Navbar.Brand> 
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                </Navbar>
                </Container>
                </Navbar>
            </div>
        <div className="landing-cards">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
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
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
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

export default UserFavorite;