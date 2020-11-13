import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

class Main extends Component {
    render = () => {
        return (
            <Switch>
                <Route path="/pegawai" component={Pegawai} />
            </Switch>
        );
    }
}

export default Main;