// import { Component } from "react";
// import { Modal } from "react-bootstrap";
// import { Form, Button } from "react-bootstrap";

// type UpdateProps = {
//     token: string;
//   };
// type ProductsList = {
//     id: number;
//     name: string;
//     description: string;
//     price: string;
//     imageLink: string;
//     imageUrl: string;
//   };
//   type UpdateState = {
//     product: ProductsList[];  
//     editModal: boolean;
//   };

// class Update extends Component<UpdateProps, UpdateState> {
//     constructor(props: UpdateProps){
//         super(props)
//     this.state = {
//         product: [],
//         editModal: true,
//     }
    // this.handleUpdate = this.handleUpdate.bind(this)
// }
// editProducts = (postId: number) => {
//   this.setState({ editModal: true });
// };
// handleUpdate = (id: number) => {
//   let newItem = this.state.product;
//   fetch(`http://localhost:3001/products/update/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       product: {
//         name: this.state.product.name,
//           description: this.state.product.description,
//           price: this.state.product.price,
//           imageLink: this.state.product.imageLink,
//           imageUrl: this.state.product.imageUrl,
//           id: this.state.product.id,
//       },
//     }),
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${this.props.token}`,
//     }),
//   })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
// render(){
//     return (
//     <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Update</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//   <Form className="text-center">
//   <Form.Group style={{ width: "25rem" }}>
//     <Form.Label htmlFor="name">Title</Form.Label>
//     <Form.Control
//       type="name"
//       value={this.state.product.name}
//       onChange={(e) =>
//         this.setState({
//           product: { ...this.state.product.name },
//         })
//       }
//     />
//     <Form.Label htmlFor="description">Description</Form.Label>
//     <Form.Control
//       type="Description"
//       value={this.state.product.description}
//       onChange={(e) =>
//         this.setState({
//           product: {
//             ...this.state.product,
//             description: e.target.value,
//           },
//         })
//       }
//     />
//     <Form.Label htmlFor="price">Price</Form.Label>
//     <Form.Control
//       type="Price"
//       value={this.state.product.price}
//       onChange={(e) =>
//         this.setState({
//           product: { ...this.state.product, price: e.target.value },
//         })
//       }
//     />
//     <Form.Label htmlFor="imageLink">Image Link</Form.Label>
//     <Form.Control
//       type="imageLink"
//       value={this.state.product.imageLink}
//       onChange={(e) =>
//         this.setState({
//           product: {
//             ...this.state.product,
//             imageLink: e.target.value,
//           },
//         })
//       }
//     />
//     <Form.Group className="mb-4" controlId="fileUpload">
//       <Form.Label htmlFor="file">Choose a file</Form.Label>
//       <Form.Control
//         type="file"
//         className="file-input"
//         onChange={this.fileSelectedHandler}
//       />
//       <Form.Control
//         type="upload"
//         value="Upload File"
//         className="btn btn-primary btn-block mt-4"
//         // onClick={this.fileUploadHandler}
//       />
//     </Form.Group>
//     <Button type="submit">Submit</Button>
//   </Form.Group>
// </Form>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog>
// )
//     }
// }

// export default Update;
export {}