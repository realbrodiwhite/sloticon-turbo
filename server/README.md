# Sloticon Server Documentation

## Overview
This server is part of the Sloticon application, built using Express and Socket.IO. It handles socket connections and serves static files.

## Environment Variables
The following environment variables are required for local testing:

- **SOCKET_URL**: The URL for the socket connection (default: `http://localhost:3000/socket`).
- **CORS_ORIGIN**: The allowed origin for CORS (default: `http://localhost:3000`).
- **DATABASE_URL**: The connection string for the database (default: `sqlite://database.db`).

## Server Functions

### Server Class
- **Constructor**: Initializes the server, sets up socket connections, and configures CORS.
- **start()**: Starts the server and listens on the specified port.

### Socket Connection
- Listens for incoming socket connections and logs when a user connects.

## Usage
To start the server, run the following command in the `sloticon-turbo/server` directory:
```
npm start
