import React,{Component,lazy} from 'react';
import {Switch , Route} from 'react-router-dom';
import HomeNew from '../../component/HomeNew';
import NotFound from '../../component/notFound';

const routingWas =[
    {
        path:'/',
        component:HomeNew,
        exact:true
    },
    {
        path:'*/',
        component:NotFound,
        exact:true
    }
]

export default class Unauthorized extends Component{

    render(){
        return(
            <React.Fragment>
                <Switch>
                    {
                        routingWas.map((route ,index)=>(
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