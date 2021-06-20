import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {withAuth0} from "@auth0/auth0-react" 
import myFavoriteBook from './myFavoriteBooks'
import Profile from './Profile'
class App extends React.Component {

  render() {
    console.log('app', this.props)
    const {isAuthenticated} =this.props.auth0
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */
                  
                  isAuthenticated ? 
                   < myFavoriteBook />  
                  :
                  <login />
                  }
                </Route>
                < Route exact path="/Profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                 
                  <Profile />

                </Route>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default App;
