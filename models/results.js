const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const resultSchema = mongoose.Schema({

	link: {
		type: String,
		min: [1],
		required: true
	},
	headline: {
		type: String,
		min: [1],
		required: true
	},
	summary: {
		type: String,
		default: 'No summary available'
	},
	img: {
		type: String
	},
	saved: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: String
	},
	comments: { type: Schema.Types.ObjectId, ref: 'Comments' }
});

module.exports = mongoose.model('Results', resultSchema);