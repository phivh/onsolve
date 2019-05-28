const defaultStore = {
    fetching: true,
    pagination: { current: 1, total: 0, pages: [], next: false, prev: false },
    filter: 'comics',
    search: '',
    started: true,
    error: { code: '' },
    menuOpen: false,
    data: []
};

export default defaultStore;