import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
	render() {
		return (
			<form className="store-selector">
				<h2>Inserire il Nome dello Store</h2>
				<input
					type="text"
					required
					placeholder="Nome Store"
					defaultValue={getFunName()} />
				<button type="submit">Visita lo Store -></button>
			</form>
		);
	}
}

export default StorePicker;
