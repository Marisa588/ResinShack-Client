import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import Products from './admin-products';



type UploadProps ={
    token: string,
    updateToken(newToken: string): void,
}


type UploadState = {
     product: {
        name: string,
        description: string,
        price: string,
        imageUrl: string,
        imageLink: string,
        postId: number
     }
     selectedFile: null,
     fileName: string,
    //  redirectToAdminHome: boolean
};


class Upload extends Component<UploadProps, UploadState> {
    constructor(props: UploadProps){
        super(props)
        this.state = {   
            product: {         
                name: '',
                description: '',
                price: '',
                imageUrl: '',
                imageLink: '',
                postId: 1
            },
            selectedFile: null,
            fileName: '',
            // redirectToAdminHome: false,
        }
    }
  fileSelectedHandler = (event: any) => {
     this.setState({
         selectedFile: event.target.files[0]
     })
 }
 
        fileUploadHandler = () => {
        fetch('http://localhost:3001/products/', {
            method: 'POST',
            body: JSON.stringify({ 
                product: { 
                    name: this.state.product.name, 
                    description: this.state.product.description, 
                    price: this.state.product.price, 
                    imageLink: this.state.product.imageLink, 
                    imageUrl: this.state.product.imageUrl,
                    postId: this.state.product.postId 
                } 
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`,
            })
        }).then((res) => res.json())
            .then((data) => {
               this.props.updateToken(data.sessionToken)
            //    this.setState({redirectToAdminHome: true})
            })
                .catch(err => {
                    console.log(err)
                })
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        this.setState({
            product: {
                name: this.state.product.name,
                description: this.state.product.description,
                price: this.state.product.price,
                imageUrl: this.state.product.imageUrl,
                imageLink: this.state.product.imageLink,
                postId: this.state.product.postId
            },
        })
}


render() {

    // let redirectUpload = this.state.redirectToAdminHome
    // if (redirectUpload) {
    //     if (this.state.product.postId) 
    //     return <Redirect to = '/home/admin' />
    // }
    return(

    <div>
    <Form onSubmit={this.handleSubmit} className="text-center">
        <Form.Group style={{width:'25rem'}}>
            <Form.Label htmlFor="name">Title</Form.Label>
            <Form.Control type="name"  value={this.state.product.name} onChange={(e) => this.setState({ product: {...this.state.product, name: e.target.value} })} />
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="Description"  value={this.state.product.description} onChange={(e) => this.setState({ product: {...this.state.product, description:e.target.value} })} />
            <Form.Label htmlFor="price">Price</Form.Label>
            <Form.Control type="Price"  value={this.state.product.price} onChange={(e) => this.setState({ product: {...this.state.product, price:e.target.value} })} />
            <Form.Label htmlFor="imageLink">Image Link</Form.Label>
            <Form.Control type="imageLink" value={this.state.product.imageLink} onChange={(e) => this.setState({ product: {...this.state.product, imageLink:e.target.value} })} />
            <Form.Group className="mb-4" controlId="fileUpload">
            <Form.Label htmlFor="file">Choose a file</Form.Label> 
            <Form.Control type="file" className="file-input" id="customFile" onChange={this.fileSelectedHandler}/>           
            <Form.Control type="upload"  value="Upload File" className="btn btn-primary btn-block mt-4" onClick={this.fileUploadHandler} />
            {/* <form action="/imageUrl" method="POST" enctype="multipart/form-data">
                <input type ="file" name="imageUrl" />
                <button type="submit">Upload</button>
            </form> */}
            </Form.Group>
       
        
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form.Group>
    </Form>
</div>
    )
}

      
        
      


    
}

export default Upload;