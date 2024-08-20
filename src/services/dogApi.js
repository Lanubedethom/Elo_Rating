import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_DOG_API_KEY;

const instance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/images/search?limit=2',
});

export const getPuppy = async () => {
    try {
        const response = await instance.get('', {
            headers: {
                'x-api-key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
