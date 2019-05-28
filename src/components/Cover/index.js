import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cover extends Component {
  
  render() {
    return (
      <figure className="detail__cover">
        <img src={this.props.selectedItem.thumbL}  alt={this.props.selectedItem.title} />
      </figure>
    );
  }
}

Cover.propTypes = {
  selectedItem: PropTypes.object
}

export default Cover;
