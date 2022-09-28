import React from 'react';
import Profile from './profil/Profile'
import './App.css';
import maphoto from './maphoto.jpg'


function App() {

  return (
    <div className="App">
      <Profile fullName= "Ouattara Ibrahim Yacouba" bio="Je suis perfectionniste" profession=" Developpeur Fullstack JS">{maphoto}</Profile>
    </div>
  );
}

export default App;