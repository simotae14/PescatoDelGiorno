import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
// recupero i pesci esempio
import pesciEsempio from '../sample-fishes';

class App extends React.Component {
	state = {
		pesci: {},
		ordine: {}
	};
	addFish = pesce => {
		// 1. Fai copia dello stato esistente
		const pesci = {...this.state.pesci};
		// 2. aggiungo il nuovo pesce ai pesci usando come key un id creato con data
		pesci[`pesce${Date.now()}`] = pesce;
		// 3. aggiorno lo stato
		this.setState({
			pesci
		});
	};
	loadSampleFishes = () => {
		// aggiorno lo state
		this.setState({
			pesci: pesciEsempio
		});
	};
	// handler per aggiungere un pesce all'ordine
	addToOrder = (key) => {
		// 1. fare una copia dello state
		const ordine = { ...this.state.ordine };
		// 2. o aggiungo un elemento all'ordine, o aggiorno il suo numero nell'ordine
		ordine[key] = ordine[key] + 1 || 1;
		// 3. chiamo il setState per aggiornare lo status dell'oggetto
		this.setState({
			ordine
		});
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresco Del Giorno" />
					<ul className="fishes">
						{Object.keys(this.state.pesci).map(key => (
							<Fish
								key={key}
								index={key}
								dettagli={this.state.pesci[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order pesci={this.state.pesci} ordine={this.state.ordine} />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;