import configs from '../configs/config';
import axios from 'axios';

class Api {
  constructor() {
    this.publicKey = configs.publicKey;
    this.timeout = 10000;
    this.options = {
      limit: 25,
      offset: 0,
      url: configs.baseUrl
    };

    this.instance = axios.create({
      baseURL: configs.baseUrl,
      timeout: this.timeout
    });
  }

  appendParameters(url, options) {
    let { page, orderBy, titleStartsWith, nameStartsWith } = options;
    let fetchUrl = `${url}?apikey=${this.publicKey}`;

    this.options.offset = 0;

    if (page > 0) {
      page--;
      this.options.offset = page * this.options.limit;
    }

    // let mergedOptions = Object.assign({}, { orderBy }, this.options);

    // mergedOptions = titleStartsWith ? Object.assign({}, { titleStartsWith }, mergedOptions) : mergedOptions;
    // mergedOptions = nameStartsWith ? Object.assign({}, { nameStartsWith }, mergedOptions) : mergedOptions;

    // for (let option in mergedOptions) {
    //   fetchUrl += `&${option}=${mergedOptions[option]}`;
    // }

    return fetchUrl;
  }

  get() {
    return this.instance.get(this.appendParameters("comics", {limit:25}))
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
