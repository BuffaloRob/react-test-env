import React from 'react';

class CommentClass extends React.Component {

  state = {
    comments: [],
    comment: ''
  }

  componentDidMount() {
    fetch("http://api.getInfo")
      .then(response => response.json())
      .then(data => {
        this.setState({
          apidata: data.whatever
        })
      })
  }

  handleChange = e => {
    this.setState({ comment: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    let comment = this.state.comment
    this.setState({ comments: [...this.state.comments, comment] })
    this.setState({ comment: ''})
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="Center">
          <input
            type="text"
            onChange={this.handleChange}
            name="comment"
            value={this.state.comment}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="Center">
          <ul>
          {this.state.comments.map((comment, index) => 
            <li key={index}>{comment}</li>
          )}
        </ul>
      </div>
      </>
    )
  }
}

export default CommentClass;