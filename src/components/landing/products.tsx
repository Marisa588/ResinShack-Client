import { Component } from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import ProductsHeader from "./productsHeader";
import "bootswatch/dist/quartz/bootstrap.min.css";

type ProductsList = {
  name: string;
  description: string;
  price: string;
  imageLink: string;
  imageUrl: string;
};
type ProductsState = {
  products: ProductsList[];
};

class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.displayProducts();
  }
  displayProducts = () => {
    fetch("http://localhost:3001/products", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products: json,
        });
        console.log(json);
        console.log(this.state.products);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="list"> 
       <ProductsHeader />
        {this.state.products.map((products) => {
          return (
            // <div className="productsPage">
            /* <div className = 'searchbar'>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </div> */
            <Container className= "flexwrap: wrap">
              <Row>
                  <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
                      <Card.Img variant="top" src={products.imageUrl} />
                      <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>{products.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{products.price}</small>
                      </Card.Footer>
                  </CardGroup>
               </Row> 
            </Container>
          );
        })}
      </div>
    );
  }
}

export default Products;
