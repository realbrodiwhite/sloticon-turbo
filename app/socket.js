import { useEffect } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = process.env.SOCKET_URL || "http://localhost:3000/socket";

const useSocket = () => {
  useEffect(() => {
    const socket = io(SOCKET_URL);

    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useSocket;
