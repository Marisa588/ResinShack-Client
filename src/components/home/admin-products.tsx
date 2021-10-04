import { Component } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "bootswatch/dist/quartz/bootstrap.min.css";

type PostProps = {
  token: string;
};

const accessToken = localStorage.getItem("token");

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
    fetch("http://localhost:3001/products", {
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
    console.log(this.props.token);
    fetch(`http://localhost:3001/products/${id}`, {
      method: "Delete",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then(() => this.displayProducts())
      .catch((error) => console.log(error));
  }
  // editProducts= (postId: number) => {
  //  this.setState({editModal: true})
  // }
  // handleUpdate = (e: React.FormEvent) => {
  //     e.preventDefault()
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
  render() {
    return (
      <div className="list">
        {this.state.products.map((products) => {
          return (
            <div className="productsPage">
              <div className="admin-cards">
                <CardGroup>
                  <Card style={{ maxWidth: "22rem" }}>
                    <Card.Img variant="top" src={products.imageUrl} />
                    <Card.Body>
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.description}</Card.Text>
                    </Card.Body>
                    <small className="text-muted">{products.price}</small>
                    <Card.Footer>
                      <Button onClick={() => this.handleDelete(products.id)}>
                        Delete
                      </Button>
                      <Button>Update</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AdminProducts;
