export type message = {
	author: string;
	text: string;
	bot: boolean;
};

export type private_message = {
	author: string;
	to: string;
	text: string;
	bot: boolean;
};

export type ServerToClientEvents = {
	message: (m: message) => void;
	redirect: (url: string) => void;
	socketNumber: (n: number) => void;
	id: (i: string) => void;
};

export type ClientToServerEvents = {
	name: (n: string) => void;
	message: (m: message) => void;
	redirect: (url: string) => void;
	private_message: (m: private_message) => void;
};

export type InterServerEvents = object;

export type SocketData = {
	name: string;
};
