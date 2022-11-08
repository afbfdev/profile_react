import React from 'react';
import './App.css';
import Profile from './profile/component';
import photo from './profile/photo_fall.jpg'

function App() {
  
  const handleName = () => {
    alert(fullName);
  }

   let fullName = "Fall Alioune";
   let bio = "Diplômé à l'Institut technique supérieur au Maroc, étudiant à GoMyCode et passionné par l'informatique."
   let profession = "Developpeur Full-Stack JS"  
   
   return (
    <div className="App">
  <Profile name = {fullName} bio = {bio} profession = {profession} handleName = {handleName}>
  {photo}
  </Profile>
   
    </div>
   
  );
}

export default App;
