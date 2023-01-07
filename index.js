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

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const startDate = yesterday.toISOString().slice(0, 10);
const endDate = 'today';

client.transactions.get(access_token, startDate, endDate, (error, transactionsResponse) => {
  if (error != null) {
    console.log(error);
  } else {
    console.log(transactionsResponse.transactions);
  }
});
