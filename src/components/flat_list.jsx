import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, index) => {
          return < Flat key={index} index={index} name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng} clickFlat={this.props.clickFlat} clickedFlat={flat.name === this.props.clickedFlat.name} />
        })}
      </div>
    )
  }
}

export default FlatList;
