import React,{Component} from 'react';
import RootRouter from './RootRouter/Router/indexRouting';
import Home from './component/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router, Route} from 'react-router-dom';
 import store from './store/index.store';
 import {Provider} from 'react-redux' 

 class App extends Component{

  render(){
    return(

      // <React.Fragment>
      //     {/* <Home /> */}
      //     <Router>
      //       <Route render={(props)=> <RootRouter {...props}/>}/>
      //    </Router>
      // </React.Fragment>
      
       <Provider store={store()}>   
          <Router>
           <Route render={(props)=> <RootRouter {...props}/>}/>
         </Router>
       </Provider>
    )
  }
}
export default App;