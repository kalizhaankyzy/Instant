export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case 'toggle':
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
}