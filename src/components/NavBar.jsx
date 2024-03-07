import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { DRawer } from "./DRawer";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    const { window } = props;
    this.drawerWidth = 240;
    this.pages = [
      "home",
      "about",
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ];
    this.state = { AnchorElNav: null, mobileOpen: false };
    this.container =
      window !== undefined ? () => window().document.body : undefined;
  }

  render() {
    const handleOpenNavMenu = (event) => {
      this.setState({ AnchorELNav: event.currentTarget });
    };

    const handleCloseNavMenu = () => {
      this.setState({ AnchorELNav: null });
    };
    const handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    return (
      <>
        <>
          <CssBaseline />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AppBar position="fixed" color="success">
              <Toolbar style={{ display: "flex", justifyContent: "start" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>

                <ArticleOutlinedIcon sx={{ color: "white" }} />

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 3,
                    display: { sm: "none", sm: "flex" },
                    fontWeight: 700,
                    letterSpacing: { lg: ".2rem", sm: "0.01rem" },
                    fontSize: { lg: "initial", md: "1rem", xs: "1.25rem" },
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to=""
                  >
                    NewsG+
                  </Link>
                </Typography>

                <Box
                  spacing={1}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-around",
                    flexWrap: { md: "nowrap", sm: "wrap" },
                  }}
                >
                  {this.pages.map((item, index) => (
                    <Button
                      key={index}
                      sx={{
                        color: "#fff",
                        fontSize: { lg: "0.875rem", sm: "0.78rem" },
                        fontWeight: { lg: "500", sm: "bolder" },
                      }}
                    >
                      <Link
                        to={index === 0 ? "" : item}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {item}
                      </Link>
                    </Button>
                  ))}
                </Box>
              </Toolbar>

              <Divider sx={{ height: "3px" }} />

              <Toolbar
                sx={{
                  display: { md: "none", sm: "flex", xs: "none" },
                  width: "100vw",
                }}
              >
                <Grid container>
                  {this.pages.map((item, index) => (
                    <Grid item xs={3} key={index}>
                      <Button key={item} sx={{ color: "#fff" }}>
                        <Link
                          to={index === 0 ? "" : item}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {item}
                        </Link>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Toolbar>
            </AppBar>
          </Box>

          <Box component="nav">
            <Drawer
              container={this.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: this.drawerWidth,
                },
              }}
            >
              <DRawer
                pages={this.pages}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Drawer>
          </Box>
        </>
      </>
    );
  }
}
