import { Component } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "bootswatch/dist/quartz/bootstrap.min.css";
import APIURL from "../../helpers/environment";
import { Grid } from "@mui/material"

type PostProps = {
  token: string;
};



type ProductsList = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageLink: string;
  imageUrl: string;
};
type PostState = {
  products: ProductsList[];

  editModal: boolean;
};

class AdminProducts extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      products: [],
      editModal: false,
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
        Authorization: `Bearer ${this.props.token}`,
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
  handleDelete(id: number) {
    console.log(localStorage.getItem("token"));
    fetch(`${APIURL}/products/${id}`, {
      method: "Delete",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then(() => this.displayProducts())
      .catch((error) => console.log(error));
  }
  editProducts= (postId: number) => {
   this.setState({editModal: true})
  }
  // handleUpdate = (id:number) => {
  //     let newItem = this.state.products
  //                 fetch(`http://localhost:3001/products/update/${id}`, {
  //                 method: "PUT",
  //                 body: JSON.stringify({
  //                     products: {
  //                         products: this.state.products
  //                     }
  //                 }),
  //                 headers: new Headers({
  //                     "Content-Type": "application/json",
  //                     "Authorization": `Bearer ${this.props.token}`
  //                 })
  //                 })

  //                 .then((data) => {
  //                 console.log(data);
  //                 })
  //                 .catch(err => {
  //                 console.error(err)
  //                 })
  //             }

  productsMapper = (): JSX.Element[] => {
    return this.state.products.map((products: ProductsList, index: number) => {
        return(
            <Grid item xs={12} sm={6} md={3} key={index}>
               <CardGroup style={{ width: "20rem", height: "600px"}}>
                  <Card className="card">
                    <Card.Img className= "image" variant="top" src={products.imageUrl} />
                    <Card.Body className="card-body">
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.description}</Card.Text>
                      <small className="text-muted">{products.price}</small>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={() => this.handleDelete(products.id)}>
                        Delete
                    </Button>
                    {/* <Button onClick={() => this.handleUpdate(products.id)}>
                        Update
                    </Button> */}
                    </Card.Footer>
                  </Card>
                </CardGroup>
            </Grid>
        )
    })
  }
  render() {
          return (
            <Grid container spacing={4} direction='row' justifyContent='center' alignItems='center' className='productsContainer'>
                {this.productsMapper()}
              </Grid>
          );
  }
}

export default AdminProducts;
