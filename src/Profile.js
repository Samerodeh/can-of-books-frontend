import React, { Component } from 'react'
import {withAuth0} from "@auth0/auth0-react"
import BeastBooks from './Component/BeastBooks'
import axios from 'axios';

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.auth0.user.name,
            userPicture:this.props.auth0.user.picture,
            userEmail:this.props.auth0.user.email,
            serverUrl: process.env.REACT_APP_SERVER_URL,
            booksData: []
        }
    }

    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`).then(response => {
           
            this.setState({
                booksData: response.data.books
            })

            console.log('response',response);
            
        }).catch(
            error => {
                alert(error.message);
            }
        );
        console.log('axios',this.state.booksData);
        
    }

    render() {
        return (
            <div>

              
                
                <h2> {this.state.username} </h2>
                <p> {this.state.userEmail} </p>
                <img src= {this.state.userPicture} alt={this.state.username} />

               
            { < BeastBooks 
                
                booksData = {this.state.booksData}
                
                />
            }
            </div> 

            
        )
    }
}

export default withAuth0(Profile);
