import React,{Component,lazy} from 'react';
import {Switch , Route} from 'react-router-dom';
import Home from '../../component/home';
import NotFound from '../../component/notFound';
 
const routingIs =[
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:'*/',
        component:NotFound,
        exact:true
    }
]

export default class Authorized extends Component{
    
    render(){
        return(
            <React.Fragment>
                <Switch>
                    {
                        routingIs.map((route ,index)=>(
                            <Route 
                             key={index}
                             exact
                             path={route.path}
                             component={route.component}
                            />
                        ))
                    }
                </Switch>
            </React.Fragment>
        )
    }
}