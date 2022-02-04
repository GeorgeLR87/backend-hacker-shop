const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		default: ""
	},
	country: {
		type: String,
		default: ""
	},
	address: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})


const User = mongoose.model('User', userSchema)


module.exports =  User