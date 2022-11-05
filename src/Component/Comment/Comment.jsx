import React, { Component } from 'react';
import './Comment.css';
import CommentDisplay from '../CommentDisplay/CommentDisplay';
// import { format } from 'date-fns'; // dd/mm/yyyy format
// format(new Date(), 'dd/mm/yyyy')

class Comment extends Component {
    
    state={
        commentList:[{comment:`this is an example of comment 1 added by 
        someone`,date: new Date().toLocaleString()}, 
        {comment:`this is an example of comment 1 added by 
        someone`, date: new Date().toLocaleString()}],
        obj:{
            comment:'',
            date:''
        }
    }
    addComment=(e)=>{
        let commentContent = e.target.value;
        // let _content = commentContent;
        let obj={comment:'', date:''}
        obj.comment = commentContent;
        obj.date = new Date().toLocaleString();
        this.setState({
          obj
        })
      }
      addToComment(e){
        e.preventDefault();
        let newComment= this.state.obj;
        let _commentObj = this.state.commentList;
        _commentObj.splice(this.state.commentList.length,0,newComment);
        console.log(_commentObj);
        this.setState({
            commentList :_commentObj
        })
      }
    render() {
        return (
          <div className="w-50 m-auto my-5">
            <form onSubmit={this.addToComment.bind(this)} action="">
              <input
                type="text"
                className="form-control commentInput"
                placeholder="Write comment"
                defaultValue={''}
                // value={this.state.posts.content}
                onChange = {this.addComment.bind(this)}
              />
            </form>
            <div className="comments">
              {this.state.commentList.map((item, idx) => {
                return <CommentDisplay commentItem={item} key={idx} />;
              })}
            </div>
          </div>
        );
    }
}

export default Comment;