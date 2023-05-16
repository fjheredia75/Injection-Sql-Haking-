import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Aquí debes realizar la petición a la API utilizando axios.
      // Reemplaza 'API_URL', 'ENDPOINT' y 'requestData' con los valores correctos.
      const response = await axios.post('user', 2023);

      // Verifica la respuesta de la API y muestra el mensaje correspondiente.
      if (response.data.success) {
        setResponseMessage('HACKED');
      } else {
        setResponseMessage('FAILED');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('FAILED');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default Login;
