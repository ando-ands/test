import React, { useState } from 'react';

function MiComponente() {

    const [contador, setContador] = useState(0);


return (
    <div>
      <p>El contador es: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
export default MiComponente;