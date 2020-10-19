import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-clone-71e58.cloudfunctions.net/api', // THE API (cloud function) endpoint URL
	// Local Host : 'http://localhost:5001/clone-71e58/us-central1/api'
});

export default instance;
