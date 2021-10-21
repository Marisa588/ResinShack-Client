import { Component } from "react";
import { Card, CardGroup, Button, Container} from "react-bootstrap";
import ProductsHeader from "./productsHeader";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./card.css";
import APIURL from "../../helpers/environment";
import { Grid } from "@mui/material";

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

  productsMapper = (): JSX.Element[] => {
    return this.state.products.map((products: ProductsList, index: number) => {
        return(
            <Grid item xs={12} sm={6} md={3} key={index}>
               <CardGroup style={{ width: "20rem", height: "600px" }}>
                  <Card className="card">
                    <Card.Img className= "image" variant="top" src={products.imageUrl} />
                    <Card.Body className="card-body">
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.description}</Card.Text>
                      <small className="text-muted">{products.price}</small>
                    </Card.Body>
                    <Card.Footer>
                      <Button href={products.imageLink}>Gotta Have It!</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
            </Grid>
        )
    })
}
  render() {
    return (
      <div className="Products">
        <ProductsHeader />
        <br/>
              <Grid container spacing={4} direction='row' justifyContent='center' alignItems='center' className='productsContainer'>
                {this.productsMapper()}
              </Grid>
      </div>
    );
  }
}

export default Products;
