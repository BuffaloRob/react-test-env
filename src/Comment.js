import React from 'react';

// class Comment extends React.Component {
//   state = {
//     comment: '',
//     comments: []
//   }

const Comment = ({ comment, comments, updateComment, submitComment }) => {

  const handleChange = e => {
    updateComment( e.target.value )
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitComment(e.target[0].value)
    // let comment = e.target[0].value
    // this.setState({ comments: [...this.state.comments, comment] })
    // this.setState({ comment: '' })
  }

  // render() {
    return (
      <>
        <form onSubmit={handleSubmit} className="Center">
          <label>Enter Comment:</label>
          <input
            type='text'
            name='comment'
            value={comment}
            onChange={handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>

        <div className="Center">
          <ul>
            {comments.map((comment, index) => <li key={index}>{comment}</li>)}
          </ul>
        </div>
      </>
    )
  // }
} 

export default Comment;