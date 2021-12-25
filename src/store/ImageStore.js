export const imageReducer = (state = [],  action) => {
    switch (action.type) {
        case 'GET_NEW_LIST':
            return action.payload;
        default:
            return state;
    }
}