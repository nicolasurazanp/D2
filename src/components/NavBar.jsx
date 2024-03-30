import React from 'react';

const NavBar = () => {
  const [activeItem, setActiveItem] = React.useState('home');

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
  };

  return (
    <div style={{ position: 'fixed', top: 0, zIndex: 10 }}>
      <div className="ui pointing secondary menu">
        <a className="item">
          <img src="path/to/your/logo.png" alt="Logo" className="ui image" />
        </a>

        <div className="right menu">
          <div className="ui dropdown item">
            Idioma
            <div className="menu">
              <a className="item">English</a>
              <a className="item">Español</a>
            </div>
          </div>
          <a className="item">Login</a>
        </div>

        <div className="center menu">
          <a className="item" name="home" active={activeItem === 'home'} onClick={handleItemClick}>Inicio</a>
          <a className="item" name="about" active={activeItem === 'about'} onClick={handleItemClick}>Acerca de</a>
          <a className="item" name="contact" active={activeItem === 'contact'} onClick={handleItemClick}>Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
