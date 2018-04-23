import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  renderOrder = (key) => {
    const pesce = this.props.pesci[key];
    // numero di pesci di quel tipo
    const cont = this.props.ordine[key];
    const isAvailable = pesce && pesce.status === 'available';
    // Assicurarsi che il pesce venga caricato prima di continuare
    if (!pesce) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Mi spiace il { pesce ? pesce.nome : 'pesce'} non è più disponibile
        </li>
      );
    }
    return (
      <CSSTransition classNames="order" key={key} timeout={{ enter: 500, exit: 500 }}>
        <li key={key}>
          <span>{cont} kg di {pesce.nome}</span>
          <span className="price">{formatPrice(cont * pesce.prezzo)}</span>
          <button onClick={() => this.props.removeFromOrder(key) }>&times;</button>
        </li>
      </CSSTransition>
    );
  }
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
        <TransitionGroup component="ul" className="order">
        {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Totale:</strong>
            {formatPrice(totale)}
          </li>
        </TransitionGroup>
			</div>
		);
	}
}

export default Order;
