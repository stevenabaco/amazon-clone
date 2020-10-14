import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
	return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
			  <p className='product__price'>
				<strong>$</strong>
				<strong>{price}</strong>
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
			<button>Add to basket</button>
		</div>
	);
}

export default Product;