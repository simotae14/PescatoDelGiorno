import React from 'react';

import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
  render() {
    return (
      <div className="inventory">
        <h2>
          Inventario
        </h2>
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSampleFishes}>Carica Pesci Esempio</button>
      </div>
    );
  }
}

export default Inventory;
