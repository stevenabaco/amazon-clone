import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket...
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
  })

  }
  return (
		<div>
			<div className='checkoutProduct'>
				<img className='checkoutProduct__image' src={image} alt='' />
				<div className='checkoutProduct__info'>
					<p className='checkoutProduct__title'>{title}</p>
					<p className='checkoutProduct__price'>
					<br/>
						<CurrencyFormat
							renderText={(value) => (
									<p>
										<strong> {value}</strong>
									</p>
							)}
							decimalScale={2}
							value={price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
						/>
					</p>

					<div className='checkoutProduct__rating'>
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p> 🌟 </p>
							))}
					</div>
					{!hideButton && (
						<button onClick={removeFromBasket}>Remove from basket</button>
					)}
				
				</div>
			</div>
		</div>
	);
};

export default CheckoutProduct;

