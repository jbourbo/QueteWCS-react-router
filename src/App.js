import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from '../node_modules/react-router-dom';
import { withRouter } from '../node_modules/react-router';
import './App.css';


class Home extends Component {
    render() {
        return (
            <div>
                <p>Bienvenue sur l'accueil</p>
            </div>
        )
    }
}

class History extends Component {
    render() {
        return (
            <div>
                <p>Notre Histoire</p>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (

            <div>

                <BrowserRouter>
                    <div>

                    <NavLink exact to="/" activeClassName="active"> Accueil </NavLink>

                    <NavLink to="/notre-histoire" activeClassName="active"> Notre Histoire </NavLink>

                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/notre-histoire" component={History} />

                    </Switch>
                    </div>
                </BrowserRouter>

            </div>

        );
    }
}

export default App;