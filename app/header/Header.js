import { faCog, faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { SocketContext } from '../src/context/socket';
import BalanceDisplay from '../balance-display/BalanceDisplay'; // Importing the BalanceDisplay component

const Header = (props) => {
  const loggedIn = useSelector((state) => state.lobby.loggedIn);
  const username = useSelector((state) => state.lobby.username);
  const socket = useContext(SocketContext);

  return (
    <div className="Header">
      <div className="brand">
        <FontAwesomeIcon icon={faCrown} size="2x" className="logo"></FontAwesomeIcon>
        <span className="name">Sloticon</span>
      </div>

      <div className={`menu ${!loggedIn ? 'd-none' : ''}`}>
        <div className="account">
          <button className="btn-toggle-account-menu" aria-label="Toggle account menu">
            <FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon>
            <span>{username}</span>
          </button>
        </div>

        <button className="btn-settings" aria-label="Settings">
          <FontAwesomeIcon icon={faCog} size="2x"></FontAwesomeIcon>
        </button>
      </div>

      <BalanceDisplay />
    </div>
  );
}

export default Header;
