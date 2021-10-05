import { Component } from "react";
import FavoriteProduct from "./user-product";
import APIURL from "../../helpers/environment";

type UserProps = {
  token: string;
  updateToken(newToken: string): void;
};


type ProductsList = {
  name: string;
  description: string;
  price: string;
  imageLink: string;
  imageUrl: string;
  owner_id: number;
};

type UserState = {
  favorite: {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    imageLink: string;
    postId: number | undefined;
  };
  products: ProductsList[];
};

class UserProducts extends Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      favorite: {
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        imageLink: "",
        postId: undefined,
      },
      products: [],
    };
  }
  componentDidMount() {
    this.displayProducts();
  }

  displayProducts = () => {
    fetch(`${APIURL}/products`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products: json,
        });
        console.log(json);
        console.log(this.state.products);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="list">
        {this.state.products.map((favorite) => {
          return <FavoriteProduct favorite={favorite} />;
        })}
      </div>
    );
  }
}

export default UserProducts;
