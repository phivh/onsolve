import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Cover extends PureComponent {
  render() {
    return (
      <figure className="detail__cover">
        <img src={this.props.selectedItem.full}  alt={this.props.selectedItem.name} />
      </figure>
    );
  }
}

Cover.propTypes = {
  selectedItem: PropTypes.object,
}

export default Cover;
