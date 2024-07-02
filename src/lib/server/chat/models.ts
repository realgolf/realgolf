import mongoose from 'mongoose';

const Chat_Schema = new mongoose.Schema({
	author: { type: String },
	bot: { type: Boolean },
	message_type: { type: String },
	text: { type: String }
});

export const Chat_Model = mongoose.model('Chat', Chat_Schema);
