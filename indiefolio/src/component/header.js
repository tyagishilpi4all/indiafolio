import React,{Component} from 'react';

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModel : false
        } 
    }

    openModel=()=>{
        this.props.openModel()
    }
    
    render(){
        return(
            <React.Fragment>
               <section  className="header bg-info">
                    <div className="container">
                       <div className="row">
                            <div className="col-md-3">
                                <h3>Logo Here</h3>
                            </div>
                            <div className="col-md-7">

                            </div>
                            <div className="col-md-2">
                                <div className="test mr-auto">
                                    <ul>
                                        <li onClick={this.openModel}>
                                            Log in
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                    </div>
               </section>

               <style jsx="true">
                  {
                      `.test ul li{
                          list-style:none;
                          cursor:pointer;
                      }
                      `
                  }
               </style>
            </React.Fragment>
        )
    }
}