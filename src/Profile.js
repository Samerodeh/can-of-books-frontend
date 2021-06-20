import React, { Component } from 'react'
import {withAuth0} from "@auth0/auth0-react"

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.auth0.user.name,
            userPicture:this.props.auth0.user.picture,
            userEmail:this.props.auth0.user.email,
        }
    }
    render() {
        return (
            <div>
                
                <h2> {this.state.name} </h2>
                <p> {this.state.userEmail} </p>
                <img src= {this.state.userPicture} alt={this.state.name} />

            </div>
        )
    }
}

export default withAuth0(Profile);
