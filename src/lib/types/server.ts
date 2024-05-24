export type message = {
	author: string;
	text: string;
	bot: boolean;
};

export type user_chat = {
	id: string;
	name: string;
};

export type ServerToClientEvents = {
	message: (m: message) => void;
	users: (u: user_chat[]) => void;
	redirect: (url: string) => void;
	socketNumber: (n: number) => void;
	id: (id: string) => void;
};

export type ClientToServerEvents = {
	name: (n: string) => void;
	message: (m: message) => void;
	redirect: (url: string) => void;
};

export type InterServerEvents = object;

export type SocketData = {
	name: string;
};
