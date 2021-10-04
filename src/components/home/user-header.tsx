import { Component } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootswatch/dist/quartz/bootstrap.min.css";

type Props = {
  token: string;
};

type State = {
  role: boolean;
  sessionToken: string;
  click: boolean;
};

class UserSitebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
      role: false,
      click: false,
    };
  }

  render() {
    return (
      
      <Navbar bg="dark" variant="dark">
        <Container className="fluid">
        <div className="container-fluid">
          <Navbar.Brand href="/home/user">Julee's Resin Shop</Navbar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.tiktok.com/@juleesresinshack?lang=en"
                >
                  Etsy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.etsy.com/shop/JuleesResinShack?ref=simple-shop-header-name&listing_id=1020349146"
                >
                  Insta
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/juleesresinshack/"
                >
                  TikTok
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/favorite">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => localStorage.clear()}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Container>
      </Navbar>
     
    );
  }
}

export default UserSitebar;
