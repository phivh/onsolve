const defaultStore = {
    fetching: false,
    pagination: { current: 1, total: 0, pages: [], next: false, prev: false },
    filter: 'comics',
    started: false,
    data: []
};

export default defaultStore;