import React from "react";

import Footer from "./footer/Footer";
import Header from "./header/Header";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Welcome work",
  //   };
  // }

  // changeTitle(title) {
  //   this.setState({title});
  // }

  render() {
    return (
      <div>
        <Header />
        <div class="container container_style">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
