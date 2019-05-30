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

  it('Api get all Comics - should response comics requests', () => {
    api.get({ page: 1, orderBy: 'title', url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200); 
    });
  });

  it('Api get all Comics - should response comics with offset 5', () => {
    api.get({ page: 2, orderBy: 'title',  url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data.offset).toBe(5);
    });
  });

  it('Api get all Comics - should response comics by title', () => {
    api.get({ page: 1, orderBy: 'title', url: '/comics' }).then((response) => {
      expect(response.data.code).toBe(200);
    });
  });

  it('Api.appendParameters - should append options to request url', () => {
    let result = api.appendParameters('/comics', { page: 1, orderBy: 'title', nameStartsWith: 'spi'});
    expect(result).toBe(`/comics?apikey=${api.publicKey}&orderBy=title&limit=5&offset=0`);
  });

  it('Api get all Comics - should retrive error', () => {
    api.version = 'v1';
    api.get({ page: 1, orderBy: 'title',  url: '/comics' }).catch((error) => {
      expect(error.stack).toBeDefined();
    });
  });
});
