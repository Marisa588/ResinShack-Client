import React, { Component } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';



type Props ={
    token: string,
    updateToken(newToken: string): void,
    updateRole(newRole:boolean):void
}


type State = {
    // products: {
        name: string,
        description: string,
        price: string,
        imageUrl: string,
        imageLink: string
    // }
};



class Upload extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {            
                name: '',
                description: '',
                price: '',
                imageUrl: '',
                imageLink: ''
        }
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Multer stuff goes here

        fetch('http://localhost:3001/products/', {
            method: 'POST',
            body: JSON.stringify({ 
                products: { 
                    name: this.state.name, 
                    description: this.state.description, 
                    price: this.state.price, 
                    imageLink: this.state.imageLink, 
                    imageUrl: this.state.imageUrl 
                } 
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        }).then((res) => res.json())
            .then((data) => {
                this.props.updateToken(data.sessionToken)
            })
                .catch(err => {
                    console.log(err)
                })
    }


render(){
    return(

    <div>
    <Form onSubmit={this.handleSubmit}>
        <Form.Group>
            <Form.Label htmlFor="name">Title</Form.Label>
            <Form.Control type="name"  value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} />
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="Description"  value={this.state.description} onChange={(e) => this.setState({description:e.target.value})} />
            <Form.Label htmlFor="price">Price</Form.Label>
            <Form.Control type="Price"  value={this.state.price} onChange={(e) => this.setState({price:e.target.value})} />
            <Form.Label htmlFor="imageLink">Image Link</Form.Label>
            <Form.Control type="imageLink" value={this.state.imageLink} onChange={(e) => this.setState({imageLink:e.target.value})} />

            {/* <FormLabel htmlFor="imageUrl">Product Image</FormLabel>
            <Input name="image" type="file" /> */}
        </Form.Group>
        
        <Button type='submit'>Submit</Button>
    </Form>
</div>
)
}

      
        
      


    
}

export default Upload;