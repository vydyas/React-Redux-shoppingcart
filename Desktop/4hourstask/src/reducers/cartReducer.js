import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    const { type, item } = action;
    switch (type) {
        case 'ADD':
            return [...state, item];
        case 'REMOVE':
            return state.filter( i => i.id !== item.id);
        default:
            return state;
    }
};