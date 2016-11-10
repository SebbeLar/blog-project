const initialState = { homeValue: 0, aboutValue: 0 };

export default (state = initialState, action) => {
    switch (action.type) {
    case 'INCREMENT':
        console.log(state);
        const newState = state;
        newState.homeValue = state.homeValue + 1;
        return newState;
    case 'DECREMENT':
        return state.homeValue - 1;
    default:
        return state;
    }
};
