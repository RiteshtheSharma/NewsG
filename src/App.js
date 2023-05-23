import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import RoutingError from './components/RoutingError'
export default class App extends Component {
 
//key parameter required for same components of diff paramter val
constructor(){
  super()
  this.apiKey = process.env.REACT_APP_NEWS_API
  this.state={
    progress :0,
    LinearProgressFlag:true,
    country : 'in'
  }
}
setProgress=(Prog)=>{
  this.setState({ progress :Prog})

  if(Prog===100)
  setTimeout(()=>{this.setState({ LinearProgressFlag:false,progress :0})},500)
  else if(Prog>0) this.setState({ LinearProgressFlag:true})
  }
  render() {
    
    return (<BrowserRouter>
    
    <NavBar  />
 
      <LinearProgress variant="determinate" value={this.state.progress} sx={{marginTop:{md:'64px',sm:'175px',xs:'58px'},visibility:(this.state.LinearProgressFlag?'visible':'hidden')}}/>
      <Routes>
      
      <Route
             path='/'
            element={
              <News key="general" pageSize={5} category={'general'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/business'
            element={
              <News key="/business" pageSize={5} category={'business'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
            <Route
             path='/general'
            element={
              <News key='/general' pageSize={5} category={'general'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/sports'
            element={
              <News key='/sports' pageSize={5} category={'sports'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/technology'
            element={
              <News key='/technology' pageSize={5} category={'technology'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/health'
            element={
              <News key="/health" pageSize={5} category={'health'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/entertainment'
            element={
              <News key='/entertainment' pageSize={5} category={'entertainment'} apiKey={this.apiKey } country={this.state.country} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/science'
            element={
              <News key='/science' pageSize={5} category={'science'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
               
              
              
           <Route
             path ='/about'
            element={
              <div>about</div>
            }
          />
           <Route
             path ='*'
            element={
              <RoutingError/>
            }
          />
          </Routes></BrowserRouter>
    )
  }
}
