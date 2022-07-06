const subState = {
    loaded: false,
    fetching: false,
    error: {
        status: false,
        message:"",
    }
}
const initialState = {
    collection: {
        ...subState,
        items: []
    },
    item: {
        ...subState,
        data: {}
    }
}

export default initialState;