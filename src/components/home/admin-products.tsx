import { Component } from 'react';
import { Card, CardGroup, Button, Modal, Col, Row } from 'react-bootstrap';
import 'bootswatch/dist/quartz/bootstrap.min.css';




type PostProps = {
    token: string,   
    
}

const accessToken= localStorage.getItem("token")

type ProductsList ={
    id: number
    name: string,
    description: string,
    price: string,
    imageLink: string,
    imageUrl: string
}
type PostState = {
    products : ProductsList[],
    postId: number
    // editModal: boolean
}



class AdminProducts extends Component<PostProps, PostState> {
    constructor(props: PostProps){
        super(props)
        
    this.state ={
        products: [],
        postId: 0 ,
        // editModal: false
    }
}
componentDidMount() {
    this.displayProducts()
}
displayProducts = () => {
  fetch('http://localhost:3001/products', {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.token}`
      })
  })
  .then(res => res.json())
  .then((json) => {
      this.setState({
          products: json,
          postId: json
      })
      console.log(json[0].id)
      // console.log(this.state.products)
  })
  .catch(err => console.log(err))
}
     handleDelete = (e: React.FormEvent) => {
        e.preventDefault() 
        console.log(this.props.token)
                 fetch(`http://localhost:3001/products/${this.state.postId}`, {
                   method: "Delete",
                   headers: new Headers({
                   'Content-Type': 'application/json',
                     'Authorization': `Bearer ${accessToken}`
                   })
                 })
                 .then(() => this.displayProducts())
                //  .then((data) => console.log(data))
                 .catch((error) => console.log(error));
                //  this.displayProducts()
                 }
        // editProducts= (postId: number) => {
                  //  this.setState({editModal: true})
        // }
        // handleUpdate = (e: React.FormEvent) => {
        //     e.preventDefault() 
        //     let newItem = this.state.products
        //                 fetch(`http://localhost:3001/products/update/${this.state.postId}`, {
        //                 method: "PUT",
        //                 body: JSON.stringify({
        //                     products: {
        //                         products: this.state.products
        //                     }
        //                 }),
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
    
            return (
              <div className="productsPage">
                {/* <div className = 'searchbar'>
                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </div> */}
                {/* <Row> */}
                {/* <Col md={3}> */}
                <div className="admin-cards">
                <CardGroup style={{display: 'flex', flexDirection: 'row'}}>                    
                      <Card.Img variant="top" src="holder.js/100px160"/>
                      <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>{products.description}</Card.Text>
                      </Card.Body>
                      <small className="text-muted">{products.price}</small>
                      <Card.Footer>
                        <Button onClick={this.handleDelete}>Delete</Button>
                        {/* <Button onClick={this.handleUpdate}>Update</Button> */}
                      </Card.Footer>
                    
                  </CardGroup>
                </div>
                {/* </Col> */}
                {/* </Row> */}
                {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Input name="itemToEdit" type="text" placeholder={this.state.itemToUpdate} onChange={(e) => this.setState({itemToUpdate: e.target.value})}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => this.updatePostId()}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal> */}
              </div>
            );
            })}
                </div>
            );
        }
    
    }

export default AdminProducts;