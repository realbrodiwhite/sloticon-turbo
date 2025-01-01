import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method === "GET") {
    const io = new Server(res.socket.server);
    io.on("connection", (socket) => {
      console.log("a user connected");
    });
    res.end();
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
