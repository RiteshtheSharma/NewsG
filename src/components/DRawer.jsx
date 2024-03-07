import React, { Component } from "react";
import { Box,Typography,Divider,List,ListItemButton,ListItem,ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
export class DRawer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Box onClick={this.props.handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            NewsG+
          </Typography>
          <Divider />
          <List>
            {this.props.pages.map((item, index) => (
              <Link
                to={`/${item}`}
                style={{ color: "black", textDecoration: "none" }}
                key={index}
              >
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "left" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      );
    }
  }