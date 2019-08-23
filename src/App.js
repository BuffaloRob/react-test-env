import React from 'react';
import Comment from './/Comment';
import './App.css';
import VisitorName from './VisitorName';
import FizzBuzz from './FizzBuzz';
import CommentClass from './CommentClass';
import ItemList from './ItemList';

class App extends React.Component {

  state = {
    visitorName: '',
    comment: '',
    comments: []

  }

  updateVisitorName = name => {
    this.setState({ visitorName: name})
  }

  updateComment = comment => {
    this.setState({ comment: comment})
  }

  submitComment = comm => {
    let comment = comm
    this.setState({ comments: [...this.state.comments, comment] })
    this.setState({ comment: '' })
  }

  render() {
    return (
      <>
        <Comment 
          comment={this.state.comment}
          comments={this.state.comments}
          updateComment={this.updateComment}
          submitComment={this.submitComment}
        />
        <VisitorName
          visitorName={this.state.visitorName}
          updateVisitorName={this.updateVisitorName}
        />
        {/* <FizzBuzz /> */}

        <CommentClass />

        <ItemList />
      </>
    )
  }

}

export default App;
