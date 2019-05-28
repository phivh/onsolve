import configs from '../configs/config';
import axios from 'axios';

class Api {
  constructor() {
    this.publicKey = configs.publicKey;
    this.timeout = 10000;
    this.options = {
      limit: 5,
      offset: 0
    };

    this.instance = axios.create({
      baseURL: `${configs.baseUrl}`,
      timeout: this.timeout
    });
  }

  appendParameters(url, options) {
    let { page, orderBy } = options;
    let fetchUrl = `${url}?apikey=${this.publicKey}`;

    this.options.offset = 0;

    if (page > 0) {
      page--;
      this.options.offset = page * this.options.limit;
    }

    let mergedOptions = Object.assign({}, { orderBy }, this.options);

    for (let option in mergedOptions) {
      fetchUrl += `&${option}=${mergedOptions[option]}`;
    }

    return fetchUrl;
  }

  get(options) {
    return this.instance.get(this.appendParameters(options.url, options))
      .then((resolve) => {
        return resolve;
      }, (reject) => {
        return Promise.reject(reject);
      }).catch((error) => {
        throw error;
      });
  }
}

export default Api;
