import React from 'react';
import '../App.css'; // Importa el archivo CSS

function UserData() {
  return (
    <div className="container-user">
      <h2>Información del Usuario</h2>
      <div className="form-user">
        <label className="user-name">
          Nombres:
          <input type="text" name="name" />
        </label>
        <label className="user-lastname">
          Apellidos:
          <input type="text" name="lastname" />
        </label>
        <label className="user-phone">
          Teléfono:
          <input type="text" name="phone" />
        </label>
        <label className="user-birthdate">
          Fecha de Nacimiento:
          <input type="date" name="birthdate" />
        </label>
      </div>
    </div>
  );
}

export default UserData;


