import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import './Header.css';
import Home from './Home';

function App() {
  return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<h1>Checkout !</h1>
					</Route>
					<Route path='/login'>
						<h1>Login Page !</h1>
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

{/* We NEED React-Router */ }

{/* localhost.com/ */ }
{/* localhost.com/checkout */ }
{/* localhost.com/login */ }

export default App;
