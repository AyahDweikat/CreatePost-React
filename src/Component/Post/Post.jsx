import React, { Component } from 'react';
import PostDisplay from '../PostDisplay/PostDisplay'
import Comment from "../Comment/Comment";

export default class Post extends Component {
  state={
    // posts:[`this is first post
    // I feel goog and the sun 
    // is shining
    // it will be a great day
    // ....`, 
    // `this is second post
    // I feel goog and the sun 
    // is shining
    // it will be a great day
    // ....`, 
    // `this is third post
    // I feel goog and the sun 
    // is shining
    // it will be a great day
    // ....`],
    posts:[],
    content:''
  }
  addContentPost=(e)=>{
    let postContent = e.target.value;
    this.setState({
      content:postContent
    })
  }
  addToPosts(e){
    e.preventDefault();
    let _postList = this.state.posts;
    let x = (this.state.content !=="")? _postList.splice(this.state.posts.length,0,this.state.content): null;
    this.setState({
      posts :_postList,
      content:''
    })
  }
  render() {
    return (
      <div>
        <form 
        onSubmit={this.addToPosts.bind(this)} 
        className="form-floating w-50 m-auto mt-5" >
          <textarea
            className="rounded w-100"
            rows="5" cols="50"
            placeholder="Write what you think"
            id="post"
            value={this.state.content}
            onChange = {this.addContentPost.bind(this)}
          />
          <button className="btn btn-success mt-3" type='submit'>Add post</button>
        </form>
        <hr />
        {this.state.posts.map((item, idx)=>{
        return <PostDisplay post={item}key={idx}/>
        })}
        
      </div>
    );
  }
}
