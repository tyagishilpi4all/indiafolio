import React,{Component, Suspense} from 'react';
import {Switch ,Router} from 'react-router-dom';
import Authorized from './autorized';
import Unauthorized from './unautorized'


export default class RootRouter extends Component{

    constructor(props){
        super(props);
        this.state={
            authIs:true 
        }
    }

    render(){

        const {authIs} = this.state;
        return(
            <React.Fragment>
                {/* <Suspense fallback={<div>Loading....</div>}> */}
                {
                    authIs?<Authorized />:<Unauthorized />
                }
                {/* </Suspense> */}
            </React.Fragment>
        )
    }
}