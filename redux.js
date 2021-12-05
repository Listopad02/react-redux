const redux = require('redux');
const initialState = { // объект описывает всё приложение
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }

    return state;
}

// Store - место хранения всех данных 
const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

// Actions
const addCounter = {
    type: 'ADD'
}
store.dispatch(addCounter);

store.dispatch({ type: 'SUB' });

store.dispatch({ type: 'ADD_NUMBER', value: 10 });