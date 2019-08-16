import React from 'react';

class VisitorName extends React.Component {

  state = {
    name: '',
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div className="Center">
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.name}
          name='name'
        />

        <h3>{this.state.name}</h3>
      </div>
    )
  }
}

export default VisitorName;