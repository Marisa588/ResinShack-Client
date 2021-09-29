import React, { Component} from 'react';
import AdminHeader from './admin-header';
import AdminProducts from './admin-products';



type Props = {
    token: string,
}

type State = {
    // user:{
        // username: string,
        // password: string,
        sessionToken: string,
        role: boolean
    // }
}
class Admin extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            // user: {
                // username: '',
                // password: '',
                sessionToken:'',
                role: true
                // }
            }

        }    
        
    render() {
        return (
            <div>
            <AdminHeader token={this.state.sessionToken} />
            <AdminProducts token={this.state.sessionToken} />
            
            </div>
        )
    }
}


export default Admin;