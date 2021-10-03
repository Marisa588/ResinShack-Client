import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// import { Etsy.jpg } from "../../assets/Etsy.jpg";
import "bootswatch/dist/quartz/bootstrap.min.css";

type Props = {
  token: string;
};
type State = {
  role: boolean;
  sessionToken: string;
};

class UserHeader extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
      role: false,
    };
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home/user">Julee's Resin Shop</Navbar.Brand>
          <Navbar bg="dark" expand="lg">
            <Nav className="me-auto"></Nav>
          </Navbar>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.tiktok.com/@juleesresinshack?lang=en">
                Etsy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.etsy.com/shop/JuleesResinShack?ref=simple-shop-header-name&listing_id=1020349146">
                  Insta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/juleesresinshack/">
                  TikTok
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/favorite">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Out
                </a>
              </li>
              
            </ul>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default UserHeader;
