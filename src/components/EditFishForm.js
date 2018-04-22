import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        // aggiorno il pesce
        // 1. Fai una copia del pesce corrente
        const pesceAggiornato = {
            ...this.props.pesce,
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, pesceAggiornato);
    }
    render() {
        return (
            <div className="fish-edit">
                <input
                    name="nome"
                    value={this.props.pesce.nome}
                    type="text"
                    placeholder="Nome"
                    onChange={this.handleChange}
                />
                <input
                    name="prezzo"
                    value={this.props.pesce.prezzo}
                    type="text"
                    placeholder="Prezzo"
                    onChange={this.handleChange}
                />
                <select
                    name="status"
                    value={this.props.pesce.status}
                    onChange={this.handleChange}
                >
                    <option value="available">Fresco!</option>
                    <option value="unavailable">Terminato!</option>
                </select>
                <textarea
                    name="desc"
                    value={this.props.pesce.desc}
                    placeholder="Desc"
                    onChange={this.handleChange}
                />
                <input
                    name="immagine"
                    value={this.props.pesce.immagine}
                    type="text"
                    placeholder="Immagine"
                    onChange={this.handleChange}
                />
                <button type="submit">+ Aggiungi Pesce</button>
            </div>
        );
    }
}

export default EditFishForm;