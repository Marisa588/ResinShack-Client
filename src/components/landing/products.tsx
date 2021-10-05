import { Component } from "react";
import { Card, CardGroup, Button, Container} from "react-bootstrap";
import ProductsHeader from "./productsHeader";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./card.css";
import APIURL from "../../helpers/environment";

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
    fetch(`${APIURL}/products`, {
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
      <div className="Products">
        <ProductsHeader />

        <div className="grid">
          {this.state.products.map((products) => {
            return (
              <Container>
                <CardGroup style={{ width: "20rem" }}>
                  <Card className="box">
                    <Card.Img variant="top" src={products.imageUrl} />
                    <Card.Body>
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.description}</Card.Text>
                      <small className="text-muted">{products.price}</small>
                    </Card.Body>
                    <Card.Footer>
                      <Button href={products.imageLink}>Gotta Have It!</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Container>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
