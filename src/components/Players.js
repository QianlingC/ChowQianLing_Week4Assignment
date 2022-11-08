import React, { Component } from "react";
import { connect } from "react-redux";
import { onGetData } from "../action";
import GridDisplay from "./GridDisplay";

class Players extends Component {
  componentDidMount = () => {
    this.props.onGetPosts();
  };

  render() {
    return (
      <>
        <h2 className="text-center">List of Players</h2>
        <GridDisplay data={this.props.posts} />;
      </>
    );
  }
}

//for display
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

//get data
const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(onGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
