const initData = {
    darkMode: false,
    isLoading: false
}

const appReducer = (state = initData, { type, payload }) => {
    switch (type) {
        case 'CHANGE_APP_MODE':
            return {
                ...state,
                isLoading: true,
            };

        case 'CHANGEE_APP_MODE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                darkMode: payload.darkMode
            }
            break;

        default:
            return state;
    }
}