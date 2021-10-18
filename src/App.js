import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import Result from './components/result'

 
class App extends Component{
  render(){
    return(
      <div>
        <Route exact path='/' render={()=>(<Home />)} />        
        <Route path='/city' render={()=>(<Result />)} />  
      </div>
    )
  }
}

export default App;
