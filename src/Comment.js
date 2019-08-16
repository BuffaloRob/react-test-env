import React from 'react';

class Comment extends React.Component {
  state = {
    comment: '',
    comments: []
  }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let comment = e.target[0].value
    this.setState({ comments: [...this.state.comments, comment] })
    this.setState({ comment: '' })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Comment:</label>
          <input
            type='text'
            name='comment'
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>

        <div>
          <ul>
            {this.state.comments.map((comment, index) => <li key={index}>{comment}</li>)}
          </ul>
        </div>
      </>
    )
  }
} 

export default Comment;