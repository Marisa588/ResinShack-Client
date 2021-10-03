import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// import AdminUpload from './admin-upload';

type HeaderProps = {
  token: string;
  // clearToken: () => void;
};

type HeaderState = {
  isOpen: boolean;
  click: boolean;
};

class AdminHeader extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isOpen: false,
      click: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      <div className="admin header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Julee's Resin Shop</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={this.toggle}
            />
            <div className="collapse navbar-collapse" id="navbarColor01">
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
                    <a className="nav-link" href="#">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </Nav>
            </div>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AdminHeader;

{
  /* <Nav.Item>
      {/* <Nav.Link onClick={this.props.clearToken}> */
}
// <Link to="/" className='nav-link text-white nav-item' onClick={this.toggle}>Log Out</Link>
{
  /* </Nav.Link> */
}
// </Nav.Item> */}
