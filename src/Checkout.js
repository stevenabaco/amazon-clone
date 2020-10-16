import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'; 
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
	const [{ basket, user }] = useStateValue();
	return (
		
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt=''
				/>
				{basket?.length === 0 ? (
					<div>
						<h1>{user ? `Welcome ${user.email} ,` : ''}</h1>
						<br></br>
						<h2>Your Shopping Basket is empty</h2>
						<p>
							You have no items in your basket. To buy one or more items please
							click "Add to basket" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h1>{user ? `Weclcome ${user.email}` : ''}</h1>
						<h2 className='checkout__title'>Your Shopping Basket</h2>
						{/* list out all of the Checkout Products */}

						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className='checkout__right'>
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
