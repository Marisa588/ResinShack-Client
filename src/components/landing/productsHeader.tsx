import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class ProductsHeader extends Component {
  render() {
    //   return(
    //   <div className='list'>
    //       {this.state.products.map((products) => {

    return (
      <div className="productsPage">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Julee's Resin Shop</Navbar.Brand>
        </Navbar>
        {/* <Navbar bg="dark" expand="lg">
                      <Nav className="me-auto">
                      </Nav> */}
        <Container></Container>
      </div>
    );
  }
}

export default ProductsHeader;
