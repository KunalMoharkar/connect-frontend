import React from "react";
import { Switch, Route} from "react-router-dom";
import {App} from './App';
import {Home} from './pages/home';
import {BlogDetails} from './pages/blogDetails';
import {Blogs} from './pages/blogs';
import {ProfileDetails} from './pages/profileDetails';

export const Routes=()=>{

    return(

        <Switch>
            <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL+"/blogs/"} component={Blogs}/>
            <Route exact path={process.env.PUBLIC_URL+"/blogDetails/"} component={BlogDetails}/>
            <Route exact path={process.env.PUBLIC_URL+"/profileDetails/:userId"} component={ProfileDetails}/>
        </Switch>
    )

}

