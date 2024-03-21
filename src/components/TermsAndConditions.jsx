import React from 'react';
import '../App.css'; // Importa el archivo CSS

function TermsAndConditions() {
  return (
    <div>
      <label>
        <input type="checkbox" name="agreeTerms" />
        Acepto los términos y condiciones
      </label>
    </div>
  );
}

export default TermsAndConditions;
