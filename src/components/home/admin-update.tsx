// import React, { Component } from 'react';
// // import { Redirect, Link } from 'react-router-dom';
// import { Form, FormGroup, Button, Modal } from 'react-bootstrap';
// import AdminUpload from './admin-upload';

// type PostProps = {
//   token: string;
//   updateToken(newToken: string): void;
// };

// type ProductsList = {
//   // id: number | null
//   name: string;
//   description: string;
//   price: string;
//   imageLink: string;
//   imageUrl: string;
// };

// type PostState = {
//   products: ProductsList[];
//   postId: number | null;
//   handleClose: boolean;
//   handleShow: boolean;
//   show: boolean;
// };

// class Update extends Component<PostProps, PostState> {
//   constructor(props: PostProps) {
//     super(props);
//     this.state = {
//       products: [],
//       postId: 1,
//       handleClose: false,
//       handleShow: true,
//       show: false,
//     };
//   }
//   componentDidMount() {
//     this.handleUpdate();
//   }
//   handleUpdate = () => {
//     fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
//       method: "PUT",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${this.props.token}`,
//       }),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           products: json,
//         });
//         console.log(json);
//         console.log(this.state.products);
//       })
//       .catch((err) => console.log(err));
//   };

//   // handleUpdate = (e: React.FormEvent) => {
//   //     e.preventDefault()
//   //                 fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
//   //                 method: "PUT",
//   //                 body: JSON.stringify({
//   //                     products: {
//   //                         name: this.state.products.name,
//   //                     }
//   //                 })
//   //                 headers: new Headers({
//   //                     "Content-Type": "application/json",
//   //                     "Authorization": `Bearer ${this.props.token}`
//   //                 })
//   //                 })

//   //                 .then((data) => {
//   //                 console.log(data);
//   //                 })
//   //                 .catch(err => {
//   //                 console.error(err)
//   //                 })
//   //     onst body = (
//       <div>
//       <h2>Text in a modal</h2>
//         <AdminUpload token={this.props.token}/>
//     </div>
//   );
//         }
//   render() {
//     return (
//       <div className="list">
//         {/* {this.state.products.map((products) => { */}

//         {/* return( */}
//         <Button variant="primary" onClick={this.state.handleShow}>
//           Update
//         </Button>
//         <Modal show={this.state.show} onHide={this.state.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Update Product</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>

//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.state.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.state.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Update;
export {}