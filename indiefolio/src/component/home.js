import React,{Component} from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {addData} from '../store/action/index.action'
import Modal from '../component/modal'
 
 class Home extends Component{
     constructor(props){
         super(props);
         this.state = {
            isModel : false
         }

     }

     openModel=()=>{
         this.setState({
            isModel : true
         })
     }

    componentDidMount() {
        this.props.$addData({ name: "shilpi" });
      }

    render(){
        const {isModel} = this.state
        const { _addData } = this.props
        console.log(_addData, "data in app");
        return(
            <React.Fragment>
                <section className="home-parent"> 
                <div className="col-md-12">
                  <div className="anyModal" id="overlay">
                        <div className="formodel">
                                {
                                    isModel?<div>
                                        <Modal /> 
                                    </div>:""
                                }
                        </div>
                  </div>
                </div>
                <Header openModel={this.openModel}/>
                
                <h3>indifolio home</h3>
                </section>
                <style jsx="true"> 
                   {
                       ` .formodel{
                        position:absolute;
                        top:0%;
                        width:80%;
                        left:50%;
                        right:50%;
                        z-index:99;
                        transform: translate(-50% ,-50%);
                        bottom:50%;
                    }
                    .home-parent{
                        position:relative
                    }
                       `
                   }
                </style>
            </React.Fragment>
        )
    }
}

const mapState = ({ addData }) => {
    return {
      _addData: addData
    };
  };
  const mapDispatch = dispatchEvent => ({
    $addData: values => dispatchEvent(addData(values))
  });
  export default connect(mapState, mapDispatch)(Home);