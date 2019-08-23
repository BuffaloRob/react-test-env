import React from 'react';

// class VisitorName extends React.Component {
const VisitorName = ({ updateVisitorName, visitorName }) => {
  
  const handleChange = e => {
    updateVisitorName(e.target.value)
  }

  return (
    <div className="Center">
      <input
        type='text'
        onChange={handleChange}
        value={visitorName}
        placeholder='Enter Your Name'
        name='visitorName'
      />

      <h3>{visitorName}</h3>
    </div>
  )
}

export default VisitorName;