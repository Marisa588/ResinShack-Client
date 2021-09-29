import React, { Component } from "react";


type Props = {
  token: string;
};

type State = {
  // user: {
  username: string;
  password: string;
  role: boolean;
  sessionToken: string;
  // }
};

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: false,
      sessionToken: "",
    };
  }
  render() {
    return <div>Homepage</div>;
  }
}

export default Home;
