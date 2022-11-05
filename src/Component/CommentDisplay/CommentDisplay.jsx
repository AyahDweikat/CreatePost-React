import React, { Component } from 'react';

class CommentDisplay extends Component {
    render() {
        let {comment, date}=this.props.commentItem;
        console.log(comment);
        return (
            <div>
                <div className='commentItem'>
                    <p>{comment}</p>
                    <span className='dateForm'>Date: <span className='date'> {date}</span> </span>
                </div>
            </div>
        );
    }
}

export default CommentDisplay;