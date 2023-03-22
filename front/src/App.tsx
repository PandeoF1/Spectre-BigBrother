import './App.css';
import Box from '@mui/material/Box';
import { io, Socket } from "socket.io-client";
import { useEffect, useState } from 'react';

function App() {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const newSocket = io("http://localhost:5001");
		setSocket(newSocket);
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("Connected to server");
			});
		}
	}, [socket]);
	

	return (
		<>
			{/* Create a box with material-ui */}
			<Box  component="span" sx={{ width: 300, height: 300, bgcolor: 'primary.main' }} />
		</>
	);
}

export default App;
