import React from 'react';
import { Route,Switch } from 'react-router';
import Home from './home';
import NewsArticle from './post';
import Layout from './layout';
import News from './news';
import Signin from './signin';
import Dashboard from './dashboard';
import NewsPost from './newspost';
import PrivateRoute from './privateroute';
import PublicRoute from './publicroute';
const route =(props)=>{

        return (
            <Layout user={props.user}>
            <Switch>
                <Route  path="/" exact component={Home}/>
                <Route  path="/articles/:id" exact component={NewsArticle}/>
                <Route path="/news" exact component={News}/>
                <PublicRoute {...props} permit={true}  path="/sign-in" exact component={Signin}/>
                <PublicRoute {...props} permit={false} path="/newspost" exact component={NewsPost}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            </Switch>
            </Layout>
        )
}
export default route;