import React, { Component, Fragment } from 'react';

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Per Favore Inserire Un Negozio</h2>
        <input type="text" required placeholder="Nome Negozio" />
        <button type="submit">Visita lo Store -></button>
      </form>
    );
  }
}

export default StorePicker;
