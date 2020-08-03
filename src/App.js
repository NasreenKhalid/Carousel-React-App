import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import Header from "./Header"

let styles = {
  margin: "auto",
  width: "500px",
};

function App() {
  return (
    <div style={styles}>
    <Header />
      <Carousel>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
            alt="Hong Kong"
          />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
            alt="Singapore"
          />
          <p className="legend">Singapore</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
            alt="Japan"
          />
          <p className="legend">Japan</p>
        </div>
      </Carousel>
    </div>
  );
}
export default App;
