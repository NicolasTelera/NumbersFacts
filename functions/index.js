'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});

app.intent('number request', (conv, {number}) => {
  conv.close('You want to know about the number ' + number + '.');
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
