import React, { Component } from "react";
import { Card, CardGroup, Button, Row, Col } from "react-bootstrap";

type FavoriteProps = {
  favorite: {
    name: string;
    description: string;
    price: string;
    imageLink: string;
    imageUrl: string;
    owner_id: number;
  };
};

class FavoriteProduct extends Component<FavoriteProps> {
  handleSubmit = () => {
    fetch("http://localhost:3001/favorite", {
      method: "POST",
      body: JSON.stringify({
        favorite: {
          name: this.props.favorite.name,
          description: this.props.favorite.description,
          price: this.props.favorite.price,
          imageLink: this.props.favorite.imageLink,
          imageUrl: this.props.favorite.imageUrl,
          id: this.props.favorite.owner_id,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <div className="card border-primary mb-3" style={{ width: "20rem" }}>
        <Row style={{ width: "20rem" }}>
          <Col>
            <CardGroup style={{ display: "flex", flexDirection: "row" }}>
              <Card.Img variant="top" src={this.props.favorite.imageUrl} />
              <Card.Body>
                <Card.Title>{this.props.favorite.name}</Card.Title>
                <Card.Text>{this.props.favorite.description}</Card.Text>
                <small className="text-muted">
                  {this.props.favorite.price}
                </small>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => this.handleSubmit()}> Favorite!</Button>
                <Button href={this.props.favorite.imageLink}>Buy!</Button>
              </Card.Footer>
            </CardGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FavoriteProduct;
