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
    let _content = postContent;
    this.setState({
      content:_content
    })
  }
  addToPosts(e){
    e.preventDefault();
    let newPost= this.state.content;
    let _postList = this.state.posts;
    _postList.splice(this.state.posts.length,0,newPost);
    // console.log(_postList);
    this.setState({
      posts :_postList
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
            defaultValue={''}
            // value={this.state.posts.content}
            onChange = {this.addContentPost.bind(this)}
          />
          <button className="btn btn-success mt-3" type='submit'>Add post</button>
        </form>
        <hr />
        {this.state.posts.map((item, idx)=>{
        return <PostDisplay post={item}key={idx}/>
        })}
        <hr />
        <Comment />
      </div>
    );
  }
}
