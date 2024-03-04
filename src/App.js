import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import RoutingError from './components/RoutingError'
import About from './components/About';
import RedirectPage from './components/RedirectPage';
export default class App extends Component {
 
//key parameter required for same components of diff paramter val
constructor(){
  super()
  this.apiKey = process.env.REACT_APP_NEWS_API
  this.site_github_repo_link = process.env.REACT_APP_SITE_GITHUB_REPO_LINK
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
             path='/NewsG/'
            element={
              <News key="general" pageSize={5} category={'general'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/business'
            element={
              <News key="/business" pageSize={5} category={'business'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
            <Route
             path='/NewsG/general'
            element={
              <News key='/general' pageSize={5} category={'general'} country={this.state.country}  apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/sports'
            element={
              <News key='/sports' pageSize={5} category={'sports'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/technology'
            element={
              <News key='/technology' pageSize={5} category={'technology'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/health'
            element={
              <News key="/health" pageSize={5} category={'health'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/entertainment'
            element={
              <News key='/entertainment' pageSize={5} category={'entertainment'} apiKey={this.apiKey } country={this.state.country} setProgress={this.setProgress}/>
            }
          />
          <Route
             path='/NewsG/science'
            element={
              <News key='/science' pageSize={5} category={'science'} country={this.state.country} apiKey={this.apiKey} setProgress={this.setProgress}/>
            }
          />
               
              
              
           <Route
             path ='/NewsG/about'
            element={
              <About setProgress={this.setProgress}/>
            }
          />
           <Route
             path ='/NewsG/site_git_repo_link'
            
            element={
              <RedirectPage site_github_repo_link ={ `https://github.com/${this.site_github_repo_link}` } />
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
