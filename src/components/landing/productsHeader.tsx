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
      </div>
    );
  }
}

export default ProductsHeader;
