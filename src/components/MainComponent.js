import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import FetchLaunchPads from './FetchComponent';
import Header from './header';
import SecondPage from './SecondPage';

class Main extends Component{
    render() {
       
        const Launch = () =>{
            return(
                <FetchLaunchPads></FetchLaunchPads>
            );
        }

        const SecondLaunch = ({match}) =>{
            return(
                <SecondPage launchId={match.params.launchId}/>
            );
        }

        return (
          <div>
              <Header/>
            <Switch>
              <Route exact path='/launchpads' component={Launch} />
              <Route path='/launchpads/:launchId' component={SecondLaunch}/>
              <Redirect to="/launchpads" />
            </Switch>
          </div>
        );
      }
}

export default Main;