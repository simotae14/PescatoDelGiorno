import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
  render() {
    // recupero id degli ordini
    const orderIds = Object.keys(this.props.ordine);
    const totale = orderIds.reduce((prevTotal, key) => {
      const pesce = this.props.pesci[key];
      // numero di pesci di quel tipo
      const cont = this.props.ordine[key];
      const isAvailable = pesce && pesce.status === 'available';
      if(isAvailable) {
        return prevTotal + cont * pesce.prezzo;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Ordine</h2>
        <ul>
        </ul>
        {orderIds}
        <div className="total">
          Totale:
          <strong>{formatPrice(totale)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
