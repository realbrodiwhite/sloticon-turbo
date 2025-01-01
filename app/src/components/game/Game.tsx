import React, { useContext, useEffect, useRef } from 'react';
import './Game.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SocketContext } from '../../context/socket';
import * as PIXI from 'pixi.js';
import Reel from '../slot/Reel';
import SlotGame from '../slot/SlotGame';
import initControls from '../slot/initControls.ts';
import gsap from 'gsap';

const Game: React.FC = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const params = useParams<{ gameId: string }>();
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  useEffect(() => {
    let game: any;

    axios.get(`../gamescripts/${params.gameId}.js`).then((response) => {
      game = (new Function(`
        const gameId = arguments[0];
        const Game = arguments[1];
        const Reel = arguments[2];
        const initControls = arguments[3];
        const socket = arguments[4];
        const PIXI = arguments[5];
        const gsap = arguments[6];
        const goToLobby = arguments[7];

        ${response.data}
      `))(params.gameId, SlotGame, Reel, initControls, socket, PIXI, gsap, () => { navigate('/'); });

      const gameCanvas = elRef.current?.querySelector('canvas');

      if (gameCanvas) {
        gameCanvas.remove();
      }

      elRef.current?.appendChild(game.renderer.view);
    });

    return () => {
      if (game) {
        game.destroy();
      }
    };
  }, [params.gameId, navigate, socket]);

  return (
    <div className="Game" ref={elRef}></div>
  );
};

export default Game;
