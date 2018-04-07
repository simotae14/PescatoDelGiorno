import React from 'react';

class AddFishForm extends React.Component{
  nomeRef = React.createRef();
  prezzoRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  immagineRef = React.createRef();
	// metodo handler submit
	createFish = (event) => {
		// 1. stoppo la form dal submit
    event.preventDefault();
    // creo oggetto pesce
    const pesce = {
      nome: this.nomeRef.value.value,
      prezzo: parseFloat(this.prezzoRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      immagine: this.immagineRef.value.value
    };
    this.props.addFish(pesce);
    // pulisco form
		event.currentTarget.reset();
	}
  render() {
    return (
        <form className="fish-edit" onSubmit={this.createFish}>
            <input name="nome" ref={this.nomeRef} type="text" placeholder="Nome" />
            <input name="prezzo" ref={this.prezzoRef} type="text" placeholder="Prezzo" />
            <select name="status" ref={this.statusRef}>
            <option value="available">Fresco!</option>
            <option value="unavailable">Terminato!</option>
            </select>
            <textarea name="desc" ref={this.descRef} placeholder="Desc" />
            <input name="immagine" ref={this.immagineRef} type="text" placeholder="Immagine" />
            <button type="submit">+ Aggiungi Pesce</button>
        </form>
    );
  }
}

export default AddFishForm;
