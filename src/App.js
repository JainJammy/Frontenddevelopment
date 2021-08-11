import React from 'react'
import {LoginForm} from './FormComponents/LoginForm'
import {Home} from './FormComponents/Home'
import {BrowserRouter as Router,Route,Switch,Link, BrowserRouter } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { LoginComponent } from './FormComponents/LoginComponent'
import history from './FormComponents/history'
export const App = () => {
  return (
    <div> 
     <LoginForm/> 
      <Router history={history}>
         <Switch>
         <Route path="/Home" component={Home}>
         </Route>
         </Switch>
      </Router>   
     </div>    
  )
}
export default App;