import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
	return {
		type: ADD,
		text,
	};
};

const deleteToDo = (id) => {
	return {
		type: DELETE,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			const newToDo = { text: action.text, id: Date.now() };
			return [newToDo, ...state];
		case DELETE:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

const toDoStore = createStore(reducer);

toDoStore.subscribe();

export default toDoStore;
