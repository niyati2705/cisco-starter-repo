import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayIP.css';

const DisplayIP = ({ type }) => {
  const [ip, setIp] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get(
          `https://api${type === 'IPv6' ? '6' : ''}.ipify.org?format=json`
        );
        setIp(response.data.ip);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchIP();
  }, [type]);

  return (
    <div className="ip-display">
      <h3>{type} Address:</h3>
      {error ? <p>Error: {error}</p> : <p>{ip}</p>}
    </div>
  );
};

export default DisplayIP;
