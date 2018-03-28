import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}
	myInput = React.createRef();

	goToStore(event) {
		// 1. stoppa il submit della Form
		event.preventDefault();
		// 2. recupero il testo passato in input
		console.log(this.myInput);
		// 3. cambia la pagina mandandola a /store/testo-inserito


	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Inserire il Nome dello Store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Nome Store"
					defaultValue={getFunName()} />
				<button type="submit">Visita lo Store -></button>
			</form>
		);
	}
}

export default StorePicker;
