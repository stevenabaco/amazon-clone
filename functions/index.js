const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HK4KnIrCJ9ILoADbjxrRl4Xh6IFoXfd4d2mF0LYFSttdQGUAdYP0qbQ07dE4BrlqFDthD0vZzONTjQ7N6DuSlDl002coog3kv'
);

// API

// App config

const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API Routes

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Received BOOM!!! for this amount>>>', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'usd',
	});
	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
	console.log('Client_Secret >>>', paymentIntent.client_secret);
})
//Listen Command

exports.api = functions.https.onRequest(app)

// Emulated example endpoint
// http://localhost:5001/clone-71e58/us-central1/api