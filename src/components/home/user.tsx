import React, { Component} from 'react';
import logo from '../../assets/logo.jpg';

// import './bootstrap.min.css';


// type Props ={
//     token: string,
//     // updateToken(newToken: string) : void,
// };

// type State = {
//     user: {
//         username: string,
//         password: string,
//         sessionToken: string,
//         role: boolean
//     }
// };

class User extends Component {
//     constructor(props: Props) {
//         super(props)
//         this.state = {
//             user: {
//                 username: '',
//                 password: '',
//                 sessionToken:'',
//                 role: false
//                 }
//             }

//         }    



    render() {
        return (
            <div>
                
            <h3><img alt="logo" src={logo}></img></h3>
            </div>
        )
    }
}


export default User;