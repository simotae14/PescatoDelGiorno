import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Pescato
          <span className="ofThe">
            <span className="of">Di</span>
            <span className="the">Ogni</span>
          </span>
          Giorno</h1>
        <h3 className="tagline">
          <span>Fresco ogni Giorno</span>
        </h3>
      </header>
    );
  }
}

export default Header;