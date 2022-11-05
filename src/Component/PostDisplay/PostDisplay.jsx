import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./PostDisplay.css";
class PostDisplay extends Component {
  changeColor=(e)=>{
    // console.log(e.target.style.color)
  }
  render() {
    let postItem = this.props.post;
    return (
      <div>
        <div className="Posts m-auto w-50 d-flex flex-column align-items-center">
          <p className="postItem w-100 m-auto my-3 text-start">{postItem}</p>
          <div className="me-auto ">
            <button className="btn1 me-auto px-3 py-2" onClick={this.changeColor.bind()}>Like</button>
            <button className="btn2 me-auto px-3 py-2 mx-3">Add Comment</button>
          </div>
        </div>
        <Comment />
      </div>
    );
  }
}

export default PostDisplay;
