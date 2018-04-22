import React from 'react';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component{
  render() {
    return (
      <div className="inventory">
        <h2>
          Inventario
        </h2>
        {Object.keys(this.props.pesci).map(key => (
          <EditFishForm
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            pesce={this.props.pesci[key]}
          />
        ))}
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSampleFishes}>Carica Pesci Esempio</button>
      </div>
    );
  }
}

export default Inventory;
