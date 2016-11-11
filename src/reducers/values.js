const initialState = { homeValue: 0, aboutValue: 0 };

export default (state = initialState, action) => {
    switch (action.type) {
    case 'INCREMENT':
        const newState = Object.assign({}, state, {homeValue: state.homeValue + 1});
        return newState;
    case 'DECREMENT':
        return Object.assign({}, state, {homeValue: state.homeValue - 1});
    default:
        return state;
    }
};
