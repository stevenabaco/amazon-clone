import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5001/clone-71e58/us-central1/api', // THE API (cloud function) endpoint URL
});

export default instance;
