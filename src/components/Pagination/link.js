import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";


class PaginationLink extends Component {
  render() {
    return (
      <a className={this.props.className} onClick={this.props.onClick} href={this.props.href} >
        <span className={this.props.iconClassName}>{this.props.label}</span>
      </a>
    );
  }
}

PaginationLink.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default PaginationLink;
