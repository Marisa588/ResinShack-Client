import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./upload.css";
import AdminSitebar from "./admin-header";


type UploadProps = {
  token: string;
  updateToken(newToken: string): void;
};

type UploadState = {
  product: {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    imageLink: string;
    id: number;
  };
  selectedFile: null;
  fileName: string;
 
};

class Upload extends Component<UploadProps, UploadState> {
  constructor(props: UploadProps) {
    super(props);
    this.state = {
      product: {
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        imageLink: "",
        id: 0,
      },
      selectedFile: null,
      fileName: ""
    };
  }
  fileSelectedHandler = (event: any) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  //  fileUploadHandler= (event: any) => {
  //      this.setState ({
  //     this.state.products.imageUrl event?.target.files[0]
  // })
  //  }

  handleSubmit = () => {
    fetch("http://localhost:3001/products/", {
      method: "POST",
      body: JSON.stringify({
        product: {
          name: this.state.product.name,
          description: this.state.product.description,
          price: this.state.product.price,
          imageLink: this.state.product.imageLink,
          imageUrl: this.state.product.imageUrl,
          id: this.state.product.id,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    
    return (
      <div className="header">
        <AdminSitebar token={this.props.token} />
        <div className="center">
          <Form onSubmit={this.handleSubmit} className="text-center">
            <Form.Group style={{ width: "25rem" }}>
              <Form.Label htmlFor="name">Title</Form.Label>
              <Form.Control
                type="name"
                value={this.state.product.name}
                onChange={(e) =>
                  this.setState({
                    product: { ...this.state.product, name: e.target.value },
                  })
                }
              />
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                type="Description"
                value={this.state.product.description}
                onChange={(e) =>
                  this.setState({
                    product: {
                      ...this.state.product,
                      description: e.target.value,
                    },
                  })
                }
              />
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
                type="Price"
                value={this.state.product.price}
                onChange={(e) =>
                  this.setState({
                    product: { ...this.state.product, price: e.target.value },
                  })
                }
              />
              <Form.Label htmlFor="imageLink">Image Link</Form.Label>
              <Form.Control
                type="imageLink"
                value={this.state.product.imageLink}
                onChange={(e) =>
                  this.setState({
                    product: {
                      ...this.state.product,
                      imageLink: e.target.value,
                    },
                  })
                }
              />
              <Form.Group className="mb-4" controlId="fileUpload">
                <Form.Label htmlFor="file">Choose a file</Form.Label>
                <Form.Control
                  type="file"
                  className="file-input"
                  onChange={this.fileSelectedHandler}
                />
                <Form.Control
                  type="upload"
                  value="Upload File"
                  className="btn btn-primary btn-block mt-4"
                  // onClick={this.fileUploadHandler}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Upload;
