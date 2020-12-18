import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Mission from "./components/Mission";
import NavBar from "./NavBar";

class Routes extends Component{
    render() {
        return (
                <Router>
                    <NavBar />
                    <div>
                    <hr />
                    <Route name="Home" exact path="/" component={Home} /> 
                    <Route name="Menu" path="/menu" component={Menu} /> 
                    <Route name="About" path="/about" component={About} /> 
                    <Route name="Mission" path="/mission" component={Mission} /> 
                </div>
                </Router>
           
        )
    }    
}
export default Routes;