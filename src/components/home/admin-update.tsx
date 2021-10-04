// import { Modal, Button } from "react-bootstrap";
// import React, { Component } from "react";

// class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSave = this.handleSave.bind(this);
//     this.state = {
//       name: "",
//       description: "",
//       price: "",
//       imageLink: "",
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       name: nextProps.name,
//       description: nextProps.description,
//       price: nextProps.price,
//       imageLink: nextProps.imageLink,
//     });
//   }

//   nameHandler(e) {
//     this.setState({ name: e.target.value });
//   }

//   descriptionHandler(e) {
//     this.setState({ description: e.target.value });
//   }

//   priceHandler(e) {
//     this.setState({ price: e.target.value });
//   }

//   imageLinkHandler(e) {
//     this.setState({ imageLink: e.target.value });
//   }

//   handleSave() {
//     const item = this.state;
//     this.props.saveModalDetails(item);
//   }

//   render() {
//     return (
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Post</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>
//             <span className="modal-lable">Name:</span>
//             <input
//               value={this.state.name}
//               onChange={(e) => this.nameHandler(e)}
//             />
//           </p>
//           <p>
//             <span className="modal-lable">Description:</span>
//             <input
//               value={this.state.description}
//               onChange={(e) => this.descriptionHandler(e)}
//             />
//           </p>
//           <p>
//             <span className="modal-lable">Price:</span>
//             <input
//               value={this.state.price}
//               onChange={(e) => this.priceHandler(e)}
//             />
//           </p>
//           <p>
//             <span className="modal-lable">Image Link</span>
//             <input
//               value={this.state.imageLink}
//               onChange={(e) => this.imageLinkHandler(e)}
//             />
//           </p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     );
//   }
// }

// export default Modal;
export {}