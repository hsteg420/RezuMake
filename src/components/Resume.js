import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import '../styles/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className='resume' id='resume'>
        <LeftContent data={this.props.data} color={this.props.color} />
        <RightContent data={this.props.data} color={this.props.color} />
      </div>
    );
  }
}

export default Resume;
