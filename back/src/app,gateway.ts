import {
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway(5001, { cors: '*:*' })
export class AppGateway {
	
	constructor() {}
	@WebSocketServer()
	server;

	@SubscribeMessage('msgToServer')
	handleMessage(client: Socket, payload: any): string {
		return 'Hello world!';
	}
}
