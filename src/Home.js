import React from 'react';
import Product from './Product';
import './Home.css';
import { useStateValue } from './StateProvider';


function Home() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt=''
			/>
			<div className='home__cloneAlert'>
				<h3>Welcome {user ?.email}</h3>
				<h5>
					Please be advised this is a FAKE AMAZON CLONE. It has no affiliation
					with Amazon.{' '}
				</h5>
			</div>
			{/* Product id, title, price, rating, image */}
			<div className='home__row'>
				<Product
					id='1597456852'
					title='TCL 75" 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 75R635'
					price={1399.99}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SX679_.jpg'
				/>
				<Product
					id='6578456385'
					title='Echo Show 5 -- Smart display with Alexa – stay connected with video calling - Charcoal'
					price={74.99}
					rating={4}
					image='https://m.media-amazon.com/images/I/716neMnDXXL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='1654857492'
					title='Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Black (WH-XB900N/B)'
					price={248.69}
					rating={5}
					image='https://m.media-amazon.com/images/I/81OL7eorGHL._AC_UY436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='6874958165'
					title='Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release'
					price={49.99}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL480_SR480,480_.jpg'
				/>
				<Product
					id='1654715285'
					title='Ring Video Doorbell Pro, with HD Video, Motion Activated Alerts, Easy Installation (existing doorbell wiring required)'
					price={249.23}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/31qoYkXj+-L._AC_SX368_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='1675849586'
					title='Ring Solar Panel White - Compatible with Ring Spotlight Cam Battery and Stick Up Cam Battery'
					price={49.99}
					rating={2}
					image='https://images-na.ssl-images-amazon.com/images/I/51QzQADXNFL._AC_US436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='1324152781'
					title='Fire 7 Kids Edition Tablet, 7" Display, 16 GB, Blue Kid-Proof Case'
					price={99.99}
					rating={5}
					image='https://m.media-amazon.com/images/I/61DPuDA7ISL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='1642587774'
					title='Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz,'
					price={1925.35}
					rating={5}
					image='https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>
			{/* Product  */}
		</div>
	);
}

export default Home
