import React, { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { SocketContext } from '../src/context/socket';
import store from '../store';
import lobbySlice from '../lobbySlice';

const BalanceDisplay = ({ loggedIn }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const balance = useSelector((state) => state.lobby.balance);
  const socket = useContext(SocketContext);

  useEffect(() => {
    const handleBalanceUpdate = (balance) => {
      setLoading(false);
      store.dispatch(lobbySlice.actions.updateBalance(balance));
    };

    const handleError = (error) => {
      setLoading(false);
      setError('Failed to fetch balance');
      console.error('Socket error:', error);
    };

    if (loggedIn) {
      setLoading(true);
      socket.emit('balance', {
        key: localStorage.getItem('key'),
      });

      socket.on('balance', handleBalanceUpdate);
      socket.on('error', handleError);
    }

    // Cleanup function
    return () => {
      socket.off('balance', handleBalanceUpdate);
      socket.off('error', handleError);
    };
  }, [loggedIn, socket]);

  if (!loggedIn) return null;

  return (
    <div className="balance">
      {loading && <p>Loading balance...</p>}
      {error && <p>{error}</p>}
      <span className="label">Balance</span>
      <span className="value">€{balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
  );
};

export default BalanceDisplay;
