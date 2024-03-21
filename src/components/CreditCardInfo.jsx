import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS

function CreditCardInfo() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleCardNumberChange = (event) => {
    let value = event.target.value;
    // Elimina cualquier espacio en blanco del valor ingresado
    value = value.replace(/\s/g, '');
    // Agrega un espacio después de cada grupo de cuatro caracteres
    value = value.replace(/(.{4})/g, '$1 ');
    // Limita la entrada a un máximo de 19 caracteres (incluyendo los espacios)
    if (value.length <= 19) {
      setCardNumber(value);
    }
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    // Verifica si la longitud del valor ingresado no excede los 5 caracteres
    if (value.length <= 5) {
      // Verifica si se ha ingresado el segundo dígito y agrega automáticamente el "/" si aún no se ha agregado
      if (value.length === 2 && expirationDate.length === 1 && !expirationDate.includes('/')) {
        setExpirationDate(value + '/');
      } else {
        setExpirationDate(value);
      }
    }
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <h2>Información de la Tarjeta de Crédito o Débito</h2>
      </div>
      <div className='checkout-form'>
        <label>
          Número de Tarjeta:
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
          />
        </label>
        <label>
          Fecha de Vencimiento:
          <input
            type="text"
            name="expirationDate"
            value={expirationDate}
            onChange={handleDateChange}
            placeholder="MM/YY"
          />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" placeholder="123" />
        </label>
      </div>
    </div>
  );
}

export default CreditCardInfo;
