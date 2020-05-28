import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Bulletin from "./Bulletin";
import HomePage from "./HomePage";
import Progress from "./Progress";

export default () => {
    return(
        <div>
        <Switch>
            <Route exact path = "/" component = {HomePage}></Route>
            <Route exact path = "/home" component = {Bulletin}></Route>
            <Route exact path= "/progress" component = {Progress}></Route>
        </Switch>
        </div>
        

    )

}