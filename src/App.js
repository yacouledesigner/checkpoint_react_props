import React from 'react';
import "./App.css"
import Profile from './profil/Profile';
import profile from "./profile.png";

const App = () => {
  let appStyle = {display:'flex', justifyContent:'center', alignItem:'center', width:'100%', height:'100vh', textAlign:'center', marginTop:200}
  return (
    <div style ={appStyle}>
      <Profile fullname="Ouattara Ibrahim Yacouba" bio="Je suis amoureux du developpement web" profession="Graphiste 2D ">{profile}</Profile>
    </div>
  );
}

export default App;
