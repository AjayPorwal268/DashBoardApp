import axios from 'axios';
import authInterceptor from './authInterceptor'

class BaseApi {
    constructor(dispatch) {
        this.loadAxiosConfiguration();
        authInterceptor(this.request);
    }

    loadAxiosConfiguration() {
        this.request = axios.create({
            baseURL: 'https://sigviewauth.sigmoid.io',
            timeout: 10000,
            withCredentials: false,
            responseType: 'json',
          });
    }
    
    getRequest(url) {
        this.request.get(url);
    }
}

const baseApiInstance = new BaseApi();
export default BaseApi;