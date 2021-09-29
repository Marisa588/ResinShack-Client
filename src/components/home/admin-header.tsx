import { Component } from 'react';
import {Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import AdminUpload from './admin-upload';


type HeaderProps = {
        token: string,
}

type HeaderState = {

}




class AdminHeader extends Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props)
        this.state ={

        }
    }


    render() {
        return (
        <div className='admin header'>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                Julee's Resin Shop
                </Navbar.Brand> 
                    <div className="list">
                    <ul>
                        <Link to="/admin/products">Products</Link>
                        <Link to="/admin/upload">Upload</Link>
                    </ul>
                    </div>
                </Container>
                <div className="route">
                </div>
            </Navbar> 
        </div>
        )
    }
}

export default AdminHeader;