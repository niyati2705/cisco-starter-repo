import './Latency.css';
import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const Latency = () => {
  const [latency, setLatency] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const wsClient = new W3CWebSocket('ws://localhost:55455');

    wsClient.onopen = () => {
      console.log('WebSocket Client Connected');
      setClient(wsClient);
    };

    wsClient.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data);
      const currentTimestamp = Date.now();
      const currentLatency = currentTimestamp - packetTimestamp;
      setLatency(currentLatency);
    };

    wsClient.onclose = () => {
      console.log('WebSocket Client Disconnected');
    };

    return () => {
      if (client) {
        client.close();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="latency-container">
      <h2 className="latency-title">Packet Latency</h2>
      <div className="latency-value">
        {latency !== null ? (
          <p>Current Latency: {latency} milliseconds</p>
        ) : (
          <p>Waiting for packets...</p>
        )}
      </div>
    </div>
  );
};

export default Latency;
