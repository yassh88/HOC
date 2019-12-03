import React, { Component } from "react";
import FeedItem from "./FeedItem";
import Loading from "./HOC/Loading";

class Feed extends Component {
  render() {
    return (
      <div className="justify-content-center align-items-center">
        <FeedItem contacts={this.props.contacts} />
      </div>
    );
  }
}

export default Loading("contacts")(Feed);