import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'
import LoadingComponent from './LoadingComponent';
export class News extends Component {
  static defaultProps ={
    country:'in',
    pageSize:8,
    category:'business'
      
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  constructor(props){//runs first 
    super(props);
  //  console.log('news constructed ')
    this.state={
      articles:[],
      loading:true,
      totalResults:0,
      page:0,
      apiKey:this.props.apiKey
    }
    this.Scroll = this.Scroll.bind(this);
    
  }
 async update_News(){const PgNo = this.state.page
  this.props.setProgress(0)
 
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${PgNo+1}&pageSize=${this.props.pageSize}`;
try {
  //  Block of code to try

let data = await fetch(url);
this.props.setProgress(40)
    let parsedData = await data.json()
    this.props.setProgress(60)
    //console.table(parsedData)
    //console.log('total results = ',parsedData.totalResults)
 
    this.setState({ articles: [ ...this.state.articles , ...parsedData.articles],totalResults: parsedData.totalResults,loading:false})
    this.props.setProgress(100)
  }
catch(e){
console.log(e)



}
 }
 
 Scroll(event) {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
  if(this.state.totalResults>0  && ((this.state.totalResults%this.props.pageSize===0 && this.state.page <= Math.floor(this.state.totalResults/this.props.pageSize)  ) ||this.state.page <= 1+Math.floor(this.state.totalResults/this.props.pageSize) ))
  
        { this.update_News();this.setState({page:this.state.page+1});}
    }
  }

async componentDidMount(){//runs after rendering through render()
  // console.log(this.state.page+' did  '+this.state.totalResults)
  if(this.state.page === 0){
    this.update_News()
    this.setState({page:this.state.page+1})
   window.addEventListener('scroll',this.Scroll)}
 

}
componentWillUnmount() {//runs before rendering through render()
 
    document.removeEventListener("scroll", this.Scroll)

  }

  render() {
    return (
      <>
      <Box m={2} >
      
      {this.state.loading && 
        <LoadingComponent/>
        }
      {!this.state.loading && <Stack>
       <Box> <Typography variant="h5" mb={4}> NewsG+  - Top {this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1)} Headlines </Typography></Box>
        <Grid container spacing={4} sx={{justifyContent:{sm:'initial',xs:'center'}}}>
        {this.state.articles?.map((element,index)=>{
           return (<Grid item   md={4} sm={6} key={index} >
        <NewsItem key={element.url} ImgUrl ={element?.urlToImage} authorName={element.author} date={element.publishedAt} title={element?.title?.slice(0,100)} description={element?.description?.slice(0,500)} newsUrl={element?.url} source={element.source.name}  />
         </Grid>)})}
      </Grid>

     
</Stack> }
      
       </Box></>
    )
  }
}

export default News