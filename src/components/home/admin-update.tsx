import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, FormGroup, Button } from 'react-bootstrap'

// type UpdateProps = {
//     token: string,
//     // productsList: ProductsList
// }

// // type ProductsList = {
// //     name: string,
// //     description: string,
// //     price: string,
// //     imageLink: string,
// //     imageUrl: string
// // }

// type UpdateState = {
//     postId: number,
//     name: string,
//     description: string,
//     price: string,
//     imageLink: string,
//     imageUrl: string
// }

// class UpdatePost extends Component <UpdateProps, UpdateState>{
// constructor(props: UpdateProps) {
//     super(props);
//     this.state = {
//     postId: 1,
//     name: '',
//     description: '',
//     price: '',
//     imageLink: '',
//     imageUrl: ''
//     }
// }
//     // componentDidMount() {
//         handleUpdate = (e: React.FormEvent) => {
//             e.preventDefault() 
//                         fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
//                         method: "PUT",
//                         body: JSON.stringify({
//                             products: {
//                                 name: this.state.name,
//                                 description: this.state.description,
//                                 price: this.state.price,
//                                 imageLink: this.state.imageLink,
//                                 imageUrl: this.state.imageUrl
//                             }
//                         }),
//                         headers: new Headers({
//                             "Content-Type": "application/json",
//                             "Authorization": `Bearer ${this.props.token}`
//                         })
//                         })
                        
//                         .then((data) => {
//                         console.log(data);
//                         })
//                         .catch(err => {
//                         console.error(err)
//                         })
//                     }
//     // };
        
// render() {
//     const { postId } = this.state;
//     return (
//         <Form onSubmit={this.handleUpdate} className="text-center">
//         <Form.Group style={{width:'25rem'}}>
//             <Form.Label htmlFor="name">Title</Form.Label>
//             <Form.Control type="name"  value={this.state.name} onChange={(e) => this.setState({ name:e.target.value })} />
//             <Form.Label htmlFor="description">Description</Form.Label>
//             <Form.Control type="Description"  value={this.state.description} onChange={(e) => this.setState({ description:e.target.value })} />
//             <Form.Label htmlFor="price">Price</Form.Label>
//             <Form.Control type="Price"  value={this.state.price} onChange={(e) => this.setState({  price:e.target.value })} />
//             <Form.Label htmlFor="imageLink">Image Link</Form.Label>
//             <Form.Control type="imageLink" value={this.state.imageLink} onChange={(e) => this.setState({  imageLink:e.target.value })} />
//         <Form.Group controlId="formFile" className="mb-3">
//             <Form.Label htmlFor="imageUrl">Default file input example</Form.Label>
//             <Form.Control type="imageUrl" />
//         </Form.Group>
        
//         <Button type='submit'>Submit</Button>
//         </Form.Group>
//     </Form>
//     )
// }
// }

type PostProps = {
    token: string,
    updateToken(newToken: string): void,
    
}

type ProductsList ={
    // id: number | null
    name: string,
    description: string,
    price: string,
    imageLink: string,
    imageUrl: string
}
type PostState = {
    products : ProductsList[]
    postId: number | null
}



class Update extends Component<PostProps, PostState> {
    constructor(props: PostProps){
        super(props)
    this.state ={
        products: [],
        postId: 1,
    }
}
componentDidMount() {
    this.displayUpdate()
}
displayUpdate = () => {
    fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.token}`
        })
    })
    .then(res => res.json())
    .then(json => {
        this.setState({
            products: json
        })
        console.log(json)
        console.log(this.state.products)
    })
    .catch(err => console.log(err))
}
    //  handleDelete = (e: React.FormEvent) => {
    //     e.preventDefault() 
    //              fetch(`http://localhost:3001/products/${this.state.postId}`, {
    //                method: "Delete",
    //                headers: new Headers({
    //                'Content-Type': "application/json",
    //                  'Authorization': `Bearer ${this.props.token}`
    //                })
    //              })
    //              .then(response => response.json())
    //              .then((data) => console.log(data))
    //              .catch((error) => console.log(error));
    //              this.displayProducts()
    //              }
               
        // handleUpdate = (e: React.FormEvent) => {
        //     e.preventDefault() 
        //                 fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
        //                 method: "PUT",
        //                 body: JSON.stringify({
        //                     products: {
        //                         name: this.state.products.name,
        //                     }
        //                 })
        //                 headers: new Headers({
        //                     "Content-Type": "application/json",
        //                     "Authorization": `Bearer ${this.props.token}`
        //                 })
        //                 })
                        
        //                 .then((data) => {
        //                 console.log(data);
        //                 })
        //                 .catch(err => {
        //                 console.error(err)
        //                 })
        //             }
        render() {

            return(
            <div className='list'>
                {this.state.products.map((products) => {
    
            return(
                <div className= 'productsPage'>
                {/* <div className = 'searchbar'>
                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </div> */}
            {/* <div className="admin-cards"> */}
            
                {/* <CardGroup>               
                    <Card style={{maxWidth: "22rem"}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                        {products.description}
                        </Card.Text>
                        </Card.Body>
                        <small className="text-muted">{products.price}</small>
                        <Card.Footer>
                        <Button onClick={this.handleDelete}>Delete</Button>
                        {/* <Button>Update</Button> */}
                        {/* </Card.Footer> */}
                
               
                    </div>            
                )
            })}
                </div>
            );
        }
    
    }

    export default Update;