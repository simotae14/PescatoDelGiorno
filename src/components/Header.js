import React from 'react';
class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Pesce
          <span className="ofThe">
            <span className="of">Di</span>
            <span className="the">Ogni</span>
          </span>
          Giorno</h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;