import React, { Component } from "react";
import { Divider } from "@mui/material";
export default class RoutingError extends Component {
  render() {
    return (
      <span
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "calc(100vh - 200px)",
          width: "350px",
        }}
      >
        <h1 style={{ margin: "auto" }}>404</h1>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "#bdbdbd", height: "60px", margin: "auto 0" }}
        />
        <p
          style={{
            margin: "auto",
            fontSize: "14px",
            fontFamily: `-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;`,
          }}
        >
          This page could not be found.
        </p>
      </span>
    );
  }
}
