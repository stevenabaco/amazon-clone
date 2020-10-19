import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import './Header.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51HK4KnIrCJ9ILoAD9V3Yz9zsURSlemoJIr95kbtHefOr8cIQfZl0h2BUCdpaEGC1uBRVIsoCMlx7tigTZMEy1nY000dt8UKmle'
);

function App() {
	const [{ user }, dispatch] = useStateValue();

	// will only run once when the app component loads...
	// Piece of code which runs based on a given condition

	useEffect(() => {
		//will only run once when the app component loads...
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is logged in ....
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out ...
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});

		return () => {
			// Any cleanup operations go in here
			unsubscribe();
		};
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/payments'>
						<Header />
						<Elements stripe={promise}>
								<Payment />
						</Elements>
					</Route>
					<Route path='/orders'>
						<Header />
						<Orders />

					</Route>
					{/* This is the default route */}
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
