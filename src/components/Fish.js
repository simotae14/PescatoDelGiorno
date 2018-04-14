import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
  render() {
    const { immagine, nome, desc, status, prezzo } = this.props.dettagli;
    return (
      <li className="menu-fish">
        <img src={immagine} alt={nome} />
        <h3 className="fish-name">
          {nome}
          <span className="price">{formatPrice(prezzo)}</span>
        </h3>
        <p>{desc}</p>
        <button>Aggiungi Al Carrello</button>
      </li>
    );
  }
}

export default Fish;
