import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import BeastBooks from "./Component/BeastBooks";
import axios from "axios";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.auth0.user.name,
      userPicture: this.props.auth0.user.picture,
      userEmail: this.props.auth0.user.email,
      serverUrl: process.env.REACT_APP_SERVER_URL,
      booksData: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`)
      .then((response) => {
        console.log("axios",response.data[0].books );
        this.setState({
          booksData: response.data[0].books,
        });

        console.log("response", response);
      })
      .catch((error) => {
        alert(error.message);
      });
   
  };

  render() {
    return (
      <div>
        <h2> {this.state.username} </h2>
        <p> {this.state.userEmail} </p>
        <img src={this.state.userPicture} alt={this.state.username} />

        {<BeastBooks booksData={this.state.booksData} />}
      </div>
    );
  }
}

export default withAuth0(Profile);
