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
	}
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresco Del Giorno" />
					<ul className="fishes">
						{Object.keys(this.state.pesci).map(key => <Fish key={key} dettagli={this.state.pesci[key]} />)}
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;