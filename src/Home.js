import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt=''
			/>
			{/* Product id, title, price, rating, image */}
			<div className='home__row'>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='12321341'
					title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
				/>
			</div>
			{/* Product  */}
		</div>
	);
}

export default Home
