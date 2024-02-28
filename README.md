# Whiteboard Collaboration App Documentation

## Overview:
This is a whiteboard collaboration app built using React.js. It allows users to create or join rooms where they can collaborate on a shared drawing board in real-time. The app supports features such as Google login, room creation, joining active rooms, real-time updates of the canvas, downloading canvas state as PNG, and room-specific chat functionality.

## Installation:
1. Clone the repository: `git clone https://github.com/SinanovicAhmed/colabarative-whiteboard.git`
2. Install dependencies: `npm install`
3. Then continue instructions [here](https://github.com/SinanovicAhmed/colabarative-whiteboard-backend)

## Usage:
### Starting the Application:
- Run the app locally: `npm run dev`
- Access the app via the provided URL (e.g., [http://localhost:5173](http://localhost:5173)).

## Features:
### Landing Page:
- Upon accessing the application, users are greeted with a landing page displaying options to login with Google or continue as a guest.

### Google Login:
- Users can authenticate using their Google accounts.

### Continue as Guest:
- Alternatively, users can continue as guests, which allows them to explore the application without authentication.

### Room Creation:
- Users can create new rooms by providing a unique room name. Each room serves as a separate space for collaboration.

### Joining Active Rooms:
- Users can join existing active rooms using room selection page. Upon joining, they gain access to the collaborative drawing board and chat functionality within that room.

### Drawing Board State:
- The drawing board state is specific to each room and updated in real-time as users draw on the canvas. Changes made by one user are immediately reflected for all other participants in the same room. Users who join the room get the latest canvas state.

### Canvas State Download:
- Users have the ability to download the current state of the canvas as a PNG image, preserving their collaborative creations for future reference or sharing.

### Room Chat:
- Each room features a chat functionality enabling users to communicate with each other in real-time.
