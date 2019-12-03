
import React, { Component } from "react";
import "./Loading.css";

  const Loading = loadingProp => WrappedComponent =>{
    return class LoadingHOC extends Component{
      render() {
        return !this.props[loadingProp] ? (
          <div className="loader" />
        ) : (
          <WrappedComponent {...this.props} />
        );
      }
    };
  };

  export default Loading;