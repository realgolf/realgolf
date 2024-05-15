export type Stars = {
	count: number;
	list: [
		{
			username: string;
		}
	];
	username?: string;
};

export type Todo = {
	id: string;
	task: string;
	done: boolean;
	priority: number;
};
