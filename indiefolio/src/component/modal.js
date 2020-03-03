import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

class Modal extends Component{

    LogIn=()=>{
       alert("shilpi") 

    }

    render(){
        const{data}= this.props
        return(
            <React.Fragment>
                <div id="exampleModal" className="modaldemo" role="dialog" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                          <h5>Log In</h5>
                        </div>
                        <div className="modal-body">
                            {/* <div className="phone-price d-flex justify-content-center mt-3">
                                 <h5>Log In</h5>
                            </div> */}
                            <div className="add-cart d-flex justify-content-center mt-3">
                                <input  placeholder="Email" className="form-control"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" 
                              onClick={this.LogIn}
                            >Continue</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default withRouter(Modal);