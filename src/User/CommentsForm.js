import React from 'react';
import Plus from './plus-square.svg';

const initialState={
    comment_content: ''
}

class CommentForm extends React.Component {
    state= initialState

    handleInput=(e)=>{
        this.setState({comment_content: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/comments',{
          method: 'POST',
          headers: {
            "content-type": 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
            comment_content: this.state.comment_content,
            user_id: this.props.userId,
            park_id: this.props.parkId
          })
        })
        .then(resp=>resp.json())
        .then(newComment=>{
          this.setState(initialState)
          this.props.handleNewComment(newComment.data.attributes)
        })
      }

    render(){
        return (
            <form className='comments-form'>
                <input className='comment-bar' type='text' name='comment_content' value={this.state.comment_content} onChange={this.handleInput}/>
                <img className='comment-submit' src={Plus} type="submit" onClick={this.handleSubmit}/>
            </form>
    )}
}

export default CommentForm;