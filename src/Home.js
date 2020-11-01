import React from 'react';
import Product from './Product';
import './Home.css';
import amazonHeader from './amazon_header.jpg';
import { useStateValue } from './StateProvider';
import { requirePropFactory } from '@material-ui/core';



function Home() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className='home'>
			<div>
				<img
					className='home__image'
					src={require('./amazon_header.jpg')}
					alt=''
				/>
			</div>

			{/* Product id, title, price, rating, image */}
			<div className='home__row'>
				<Product
					id='15974564852'
					title='TCL 75" 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 75R635'
					price={1399.99}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SX679_.jpg'
				/>
				<Product
					id='65784556385'
					title='Echo Show 5 - Smart display with Alexa – stay connected with video calling - Charcoal'
					price={95.25}
					rating={4}
					image='https://m.media-amazon.com/images/I/716neMnDXXL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='16548576492'
					title='Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Black (WH-XB900N/B)'
					price={248.69}
					rating={5}
					image='https://m.media-amazon.com/images/I/81OL7eorGHL._AC_UY436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='68749458165'
					title='Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release'
					price={49.99}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL480_SR480,480_.jpg'
				/>
				<Product
					id='16547155285'
					title='Ring Video Doorbell Pro, with HD Video, Motion Activated Alerts, Easy Installation (existing doorbell wiring required)'
					price={249.23}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/31qoYkXj+-L._AC_SX368_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='16758496586'
					title='Ring Solar Panel White - Compatible with Ring Spotlight Cam Battery and Stick Up Cam Battery'
					price={49.99}
					rating={2}
					image='https://images-na.ssl-images-amazon.com/images/I/51QzQADXNFL._AC_US436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='13241523781'
					title='Fire 7 Kids Edition Tablet, 7" Display, 16 GB, Blue Kid-Proof Case'
					price={99.99}
					rating={5}
					image='https://m.media-amazon.com/images/I/61DPuDA7ISL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='16425987774'
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
