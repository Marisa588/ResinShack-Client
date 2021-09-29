import  { Component } from 'react';
import { Card, CardGroup} from 'react-bootstrap';



type Props = {
    token: string,
    
};

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

class UserProducts extends Component <Props, State> {
    constructor (props: Props) {
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
    
    render() {
        return(
            <div className='list'>
                
            {this.state.products.map((products) => {

        return(
            <div className= 'productsPage'>
            
            <div className = 'searchbar'>
                {/* <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </input>
                </form> */}
            </div>
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
        )
    }

}

export default UserProducts;