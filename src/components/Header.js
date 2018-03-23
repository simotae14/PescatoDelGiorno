import React from 'react';

const Header = ({tagline, age}) => (
  <header className="top">
    <h1>Pesce
      <span className="ofThe">
        <span className="of">Di</span>
        <span className="the">Ogni</span>
      </span>
      Giorno</h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);


export default Header;