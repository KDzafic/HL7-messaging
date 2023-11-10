import axios from 'axios';
import Cookies from 'universal-cookie';
import { TOKEN_COOKIE_KEY } from '../constants/global';

export const setupAxios = () => {
    axios.interceptors.request.use(
        function (config) {
            try {
                const cookies = new Cookies();
                cookies.get(TOKEN_COOKIE_KEY);
                if (cookies.get(TOKEN_COOKIE_KEY)) {
                    config.headers['Authorization'] = `Bearer ${cookies.get(TOKEN_COOKIE_KEY)}`;
                }
                return config;
            } catch (e) {
                return config;
            }
        },
        function (error) {
            console.log(error);
            // return Promise.reject(error);
        }
    );
};
