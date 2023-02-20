import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'
import DefaultImg from '../image/Default_Image.jpeg'
import Chip from '@mui/material/Chip';
export class NewsItem extends Component {

  
  render() {let {title,description,ImgUrl,newsUrl,authorName,date, source} = this.props;
    return (<Box >
      <Card sx={{ maxWidth:{sm:420,xs: 600 }  }}>
      <CardActionArea>
      <Chip label={source} color='error' sx={{position: "absolute",
right: "0",}}/>
        <CardMedia
          component="img"
          sx={{ height:{sm:350,xs: 200 }  }}
          image={!ImgUrl?DefaultImg:ImgUrl}
          alt=""
        />
      
        <CardContent >
        <Box  
        sx={{height:{sm:200,xs:150},overflow: 'hidden'}}
        >
          <Typography gutterBottom variant='h5' sx={{fontSize:{sm:'large',xs:'medium'}}} component="div" >
            {title }
          </Typography>
          <Typography variant="body2" color="text.secondary" >
           { description }
          </Typography>
         
          </Box>
          <Typography variant="body1" color="text.secondary" >
            { (authorName?'By '+authorName:'')+(date?' On '+(new Date (date).toString()):'') }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="success" href={newsUrl} target='_blank' my={4}>
          Read More..
        </Button>
      </CardActions>
    </Card> </Box>
    )
  }

} 
NewsItem.defaultProps ={
  title:'No Title',
  description:'No Description',
  ImgUrl:DefaultImg
}
NewsItem.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string,
  ImgUrl:PropTypes.string
};
export default NewsItem