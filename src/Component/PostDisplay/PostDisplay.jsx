import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./PostDisplay.css";
class PostDisplay extends Component {
  state={
  displayComment:false,
  likeClicked:false,
  classBtn:''
  }
  changeColor=()=>{
    const _classBtn ='btnClicked'
    const _likeClicked=true;
    this.setState({
      likeClicked:_likeClicked,
      classBtn:_classBtn
    })
  }
  addComment=()=>{
    const _displayComment= true;
    this.setState({
      displayComment:_displayComment,
      
    })
  }
  render() {
    let postItem = this.props.post;
    return (
      <div>
        <div className="Posts m-auto w-50 d-flex flex-column align-items-center">
          <p className="postItem w-100 m-auto my-3 text-start">{postItem}</p>
          <div className="me-auto ">
          {/* <button className='${this.state.likeClicked? btnClicked : btn1} me-auto px-3 py-2' onClick={this.changeColor.bind()}>Like</button> */}
          {}
            <button className={'btn1 me-auto px-3 py-2 '+this.state.classBtn} onClick={this.changeColor.bind()}><i class="fa-solid fa-thumbs-up"></i></button>
            <button className="btn2 me-auto px-3 py-2 mx-3" onClick={this.addComment.bind()}>Add Comment</button>
          </div>
        </div>
        {this.state.displayComment? <Comment />: null}
        
      </div>
    );
  }
}

export default PostDisplay;
