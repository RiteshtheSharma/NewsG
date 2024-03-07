
import React, { Component } from 'react'
import LoadingComponent from './LoadingComponent';
import { Box,Stack,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default class About extends Component {
//   static propTypes = {second: third}
constructor(props){//runs first 
    super(props);
   
    this.state={

      loading:true,
     
    }
   this.props.setProgress(0)
  }
  componentDidMount() {
   
    const timer = setTimeout(() => {
        this.props.setProgress(60)
        this.setState({loading:false,})
        
        this.props.setProgress(100)
      }, 1000);
      
      return () => clearTimeout(timer);
    
  }
  render() {
    return (
        <>
        <Box m={2} >
        
        {this.state.loading && 
        <LoadingComponent/>
        }
      {!this.state.loading && <Stack>
       <Box> <Typography variant="h5" mb={4}> About NewsG+ </Typography></Box>
      <Typography variant="h5" component={"p"} color="text.secondary" mb={2}>Welcome to newG+! We are a dynamic newz website that brings you daily headlines from around the world. Powered by newzapi, a cutting-edge platform that provides APIs to fetch news from various sources across different countries, we ensure that you stay informed and up-to-date with the latest happenings.</Typography>
      <Typography variant="h5" component={"p"} color="text.secondary" mb={2}>Founded by Ritesh Sharma, a talented new graduate from Swami Keshavananda Institute of Technology, newG+ is the result of his passion for technology and his dedication to creating a user-friendly news platform. Using his expertise in React JS and the newzapi component, Ritesh has crafted a website that not only delivers news efficiently but also strives to enhance the user experience.</Typography>
      <Typography variant="h5" component={"p"} color="text.secondary" mb={2}>At newG+, we believe in constant improvement. Ritesh is tirelessly working to make our website even better, adding new features and functionalities to provide you with a seamless news reading experience. We value your input and encourage you to contribute to the development of newG+ by visiting Ritesh's newzG repository on GitHub at <Link to="/site_git_repo_link" target="_blank" rel="noopener noreferrer">https://github.com/RiteshtheSharma/NewsG</Link>.</Typography>
      <Typography variant="h5" component={"p"} color="text.secondary" mb={2}>Whether you're looking for breaking news, insightful articles, or in-depth analysis, newG+ has got you covered. Join us on this exciting journey as we bring you the latest news from around the globe, delivered conveniently and effortlessly. Stay connected, stay informed with newG+!</Typography>
     
     
</Stack> }
  

        
         </Box></>
    )
  }
}
