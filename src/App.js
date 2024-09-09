import React from 'react';
import NavbarComponent from './component/navbarComponent.jsx';
import BodyComponent from './component/bodyComponent.jsx';

import FormLogin from './component/FormLoginComponent.jsx';
import PokemonComponent from './component/PokemonComponent.jsx';

import HeaderFunctionComponent from './component/HeaderFunctionComponent.jsx'
import MainContentFunctionComponent from './component/MainContentFunctionComponent.jsx'
import FooterFunctionComponent from './component/FooterFunctionComponent.jsx'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BodyComponent/>
      <FormLogin/>
      {/* <PokemonComponent/> */}
      <HeaderFunctionComponent/>
      <hr/>
      <MainContentFunctionComponent/>
      <hr/>
      <FooterFunctionComponent/>
    </div>
  );
}

export default App;
