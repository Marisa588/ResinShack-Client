import  { Component } from 'react';
import { Card, CardGroup, Button, Container} from 'react-bootstrap';
import UserHeader from './user-header'
import "bootswatch/dist/quartz/bootstrap.min.css";

type FavoriteProps = {
    token: string,
}

 type ProductsList = {
  name: string;
  description: string;
  price: string;
  imageLink: string;
  imageUrl: string;
};
type FavoriteState = {
  favorite: ProductsList[];
};

class UserFavorite extends Component<FavoriteProps, FavoriteState> {
  constructor(props: FavoriteProps) {
    super(props);
    this.state = {
      favorite : []
    };
  }
 
  displayFavorite = () => {
    console.log(localStorage.getItem("token"))
    fetch('http://localhost:3001/favorite', {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          favorite: json,
        });
        console.log(json);
        console.log(this.state.favorite);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.displayFavorite();
    console.log("componentMounted")
  }

  render() {
    return (
      <div className="Products">
        <UserHeader token={this.props.token}/>
        
        <div className="grid">
        {this.state.favorite.map((favorite) => {
            return(
                <Container>
                <CardGroup style={{ width: "18rem" }}>
                  <Card className="box">
                  <Card.Img variant="top" src={favorite.imageUrl}/>
                  <Card.Body>
                    <Card.Title>{favorite.name}</Card.Title>
                    <Card.Text>{favorite.description}</Card.Text>
                    <small className="text-muted">{favorite.price}</small>
                  </Card.Body>
                  <Card.Footer>
                    <Button href={favorite.imageLink}>Gotta Have It!</Button>

                  </Card.Footer>
                  </Card>
                  </CardGroup> 
                </Container>
            )
        })}
            </div>    
      </div>
    );
  }
}


export default UserFavorite;