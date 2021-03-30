const { config } = require('dotenv');
const { connect } = require('mongoose');

config();

module.exports = () => connect(process.env.DB_URI)