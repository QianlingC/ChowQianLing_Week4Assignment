import React, { Component } from "react";
import { connect } from "react-redux";
import { onGetData } from "../actions";

class Players extends Component {
  componentDidMount = () => {
    this.props.onGetPosts();
  };

  render() {
    const postList = this.props.posts.length
      ? this.props.posts.map((info) => {
          return <React.Fragment>{info.idPlayer}</React.Fragment>;
        })
      : "";

    return <div>{postList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(onGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
