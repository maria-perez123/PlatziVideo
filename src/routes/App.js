import React from 'react';
import{BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../Containers/Register';
import NotFound from '../Containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';
//https://platzi.com/cursos/webpack/


const App=()=>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/player/:id" component={Player}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;