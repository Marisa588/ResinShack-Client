import { Component } from "react";
import { Card } from "react-bootstrap";
import ProductsHeader from "./productsHeader";
import "bootswatch/dist/quartz/bootstrap.min.css";

type ProductsList = {
  name: string;
  description: string;
  price: string;
  imageLink: string;
  imageUrl: string;
};
type State = {
  products: ProductsList[];
};

class Products extends Component<{}, State> {
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
                /* <CardGroup> */
                /* <Row xs={1} md={2} className="g-4"> */
                  <Card style={{ maxWidth: "22rem" }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{products.price}</small>
                    </Card.Footer>
                  </Card>
                  /* <Card style={{ maxWidth: "22rem" }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted"></small>
                    </Card.Footer>
                  </Card> */
                /* </CardGroup> */
            //   </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
