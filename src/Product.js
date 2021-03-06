import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
        }
    })
  }

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<CurrencyFormat
						renderText={(value) => (
							<>
								<p>
									<strong> {value}</strong>
								</p>
							</>
						)}
						decimalScale={2}
						value={price}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'$'}
					/>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p> &#11088; </p>
						))}
				</div>
			</div>

			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
