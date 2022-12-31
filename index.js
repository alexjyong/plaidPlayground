const plaid = require('plaid');
require('dotenv').config();

const clientID = process.env.PLAID_CLIENT_ID;
const secret = process.env.PLAID_SECRET;
const env = process.env.ENV || 'sandbox;

const client = new plaid.Client({
  clientID: clientID,
  secret: secret,
  env: env
});
