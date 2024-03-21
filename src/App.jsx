import React from 'react';
import './App.css'; // Importa el archivo CSS
import UserData from './components/UserData';
import CreditCardInfo from './components/CreditCardInfo';
import TermsAndConditions from './components/TermsAndConditions';
import SubmitButton from './components/SubmitButton';
import MiComponente from './components/contador';



{/* <Provider store= {store}></Provider> */}

const App = () => {
  return (
    <div className="App row">
      <h1>Check-out</h1>
      <UserData />
      <CreditCardInfo />
      <TermsAndConditions />
      <SubmitButton />
      <MiComponente />
    </div>
  );
};

export default App;

