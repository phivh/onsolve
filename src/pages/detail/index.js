import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from '../../components/Cover';

class DetailComic extends Component {
  constructor(props) {
    super(props);
  }

  positionInfos() {
    let viewH = 0;
    if (window.innerWidth < 960) {
      viewH = window.innerHeight - 50;
    }
    this.infos.style = `transform:translateY(${viewH}px)`;
  }

  componentDidMount() {
    this.mobile = true;

    let slides = [...document.querySelectorAll('.slides .first')];

    window.onresize = () => { this.positionInfos(); };

    const content = document.querySelector('.detail__content');

  }

  componentWillUnmount() {
    window.onresize = null;
  }

  createMarkup(markup) {
    return { __html: markup }
  }

  onBackButtonClick() {
    this.props.history.goBack();
  }

  getDescription(description) {
    return description ? <p dangerouslySetInnerHTML={this.createMarkup(description)}></p> : '';
  }

  hasItens(data) {
    let output = false;
    if (data.items && data.items.length) {
      output = true;
    }

    return output;
  }

  render() {
    return (
      <div className="detail">
        <div ref={(c) => this.content = c} className="detail__content" >
          <button type="button" name="back" className="back-button" onClick={this.onBackButtonClick.bind(this)}>
            <span className="back-button__icon"></span>
            </button>
          <Cover {...this.props} />
          <section  className="detail__infos">
            <div className="info__name info__name--comic">
              <h2>{this.props.selectedItem.title}</h2>
              {this.getDescription(this.props.selectedItem.description)}
            </div>
          </section>
        </div>

      </div>
    );
  }
}

DetailComic.propTypes = {
  selectedItem: PropTypes.object,
  history: PropTypes.object,
}

export default DetailComic;
