import React from 'react';

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
        })
      }

    render(){
        return (
            <form className='comments-form'>
                <input type='text' name='comment_content' value={this.state.comment_content} onChange={this.handleInput}/>
                <button className='comment-submit' type="submit" onClick={this.handleSubmit}>comment</button>
            </form>
    )}
}

export default CommentForm;