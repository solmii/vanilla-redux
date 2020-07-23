import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
	return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
	return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			const newToDo = { text: action.text, id: Date.now() };
			return [newToDo, ...state];
		case DELETE_TODO:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

const store = createStore(reducer);

const paintToDos = () => {
	const toDos = store.getState();
	ul.innerHTML = '';
	toDos.forEach((toDo) => {
		const toDoList = document.createElement('li');
		const delBtn = document.createElement('button');
		delBtn.innerText = 'DEL';
		delBtn.addEventListener('click', dispatchDeleteToDo);
		toDoList.id = toDo.id;
		toDoList.innerText = toDo.text;
		toDoList.appendChild(delBtn);
		ul.appendChild(toDoList);
	});
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
	store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
	const id = parseInt(e.target.parentNode.id);
	store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value; // toDo는 유저가 입력한 value
	input.value = ''; // toDo에 유저 value를 저장한 후에는 "" 빈 문자열로 바꿔줌
	dispatchAddToDo(toDo); // 위에서 만든 addToDo 함수에 인자로 유저 value를 넣어서 실행
};

form.addEventListener('submit', onSubmit);

// Redux에서 state를 변경하고 싶다면, 절대 기존의 state를 수정하면 안된다!!1
// 새로운 state object를 return해야 한다!!
