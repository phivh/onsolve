import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from '../../components/Cover';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './index.css';

class DetailComic extends Component {
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
            <button type="button" name="back" className="back-button" onClick={this.onBackButtonClick.bind(this)}>
              <span className="back-button__icon"></span>
            </button>
          <Container fixed>
            <div ref={(c) => this.content = c} className="detail__content" >
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Cover {...this.props} />
              </Grid>
              <Grid item xs={12} md={6}>
                <section className="detail__infos">
                    <div className="info__name info__name--comic">
                      <h2>{this.props.selectedItem.title}</h2>
                      {this.getDescription(this.props.selectedItem.description)}
                      <h3>From Series: {this.props.selectedItem.series.name} </h3>
                      {this.props.selectedItem.creators.items.length > 0 &&
                        <h3 className="heading">Creators</h3>
                      }
                      <ul className="orderList">
                      {this.props.selectedItem.creators.items.map((item, key) =>
                        <li tabIndex={key}> {item.name} ({item.role}) </li>
                      )}
                      </ul>
                      
                      {this.props.selectedItem.characters.items.length > 0 &&
                        <h3 className="heading">Characters</h3>
                      }
                      <ul className="orderList">
                      {this.props.selectedItem.characters.items.map(item =>
                        <li> {item.name}</li>
                      )}
                      </ul>
                     
                    </div>
                </section>
              </Grid>
            </Grid>
            </div>
            </Container>
            <div className="detailOverlay">
              <img src={this.props.selectedItem.thumb}  alt={this.props.selectedItem.title} />
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
