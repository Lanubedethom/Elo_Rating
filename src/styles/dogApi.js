import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.REACT_APP_DOG_API_KEY;

export const getPuppy = async () => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
            headers: {
                'x-api-key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}