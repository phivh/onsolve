import Api from './services/api';
import configs from './configs/config';

describe('API tests', () => {

  const API_KEY = configs.publicKey;

  let api = {};

  beforeEach(() => {
    api = new Api(API_KEY);
  });

  afterEach(() => {
    api = null;
  });

  it('Api get all Comics - should response character requests', () => {
    api.get({ page: 1, orderBy: 'name', url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200);
    });
  });

  it('Api get all Comics - should response comics with offset 15', () => {
    api.get({ page: 2, orderBy: 'name',  url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data.offset).toBe(5);
    });
  });

  it('Api get all Comics - should response character by name that starts with spi', () => {
    api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data.results[0].name.toLowerCase()).toBe('spider-dok');
    });
  });

  it('Api.appendParameters - should append options to request url', () => {
    let result = api.appendParameters('/comics', { page: 1, orderBy: 'name', nameStartsWith: 'spi'});
    expect(result).toBe(`/comics?apikey=${api.publicKey}&orderBy=name&limit=5&offset=0`);
  });

  it('Api get all Comics - should retrive error', () => {
    api.version = 'v1';
    api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/comics' }).catch((error) => {
      expect(error.stack).toBeDefined();
    });
  });
});
