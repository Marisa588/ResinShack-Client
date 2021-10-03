import { Component} from 'react';
import AdminSitebar from './admin-header';
import AdminProducts from './admin-products';




type AdminProps = {
    token: string,
    role: boolean
    // updateToken(newToken: string): void,
}

type AdminState = {
    // user:{
        // username: string,
        // password: string,
        sessionToken: string,
        sessionRole: boolean
    // }
}
class Admin extends Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props)
        this.state = {
            // user: {
                // username: '',
                // password: '',
                sessionToken:'',
                sessionRole: true
                // }
            }

        }    
        
    render() {
        return (
            <div>
               
            <AdminSitebar token={this.state.sessionToken} />
            <AdminProducts token={this.state.sessionToken} />
            
            </div>
        )
    }
}


export default Admin;