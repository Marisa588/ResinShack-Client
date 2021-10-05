import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

type HeaderProps = {
  token: string;
};

type HeaderState = {
  isOpen: boolean;
  click: boolean;
};

class AdminSitebar extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isOpen: false,
      click: false,
    };
  }

  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      // <div className="admin header">
        <Navbar bg="dark" variant="dark">
          <Container className="fluid">
          <div className="container-fluid">
            <Navbar.Brand>Julee's Resin Shop</Navbar.Brand>
            <div className="collapse navbar-collapse">
              <Nav className="me-auto">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/home/admin">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/upload">
                      Upload
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
              </Nav>
            </div>
            </div>
          </Container>
        </Navbar>
      // </div>
    );
  }
}

export default AdminSitebar;
