import { createStore } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer는 data를 변경해주는 유일한 함수! reducer가 return 하는건 뭐든지!! 새로운 state가 된다!
const countModifier = (count = 0, action) => {
	// 기본 state는 undefined! 기본값으로 0을 주자!
	switch (action.type) {
		case 'ADD':
			return count + 1;
		// count + 1이 새로운 state가 되어, countModifier가 두번째 실행될때는 (count + 1) + 1 이 된다.
		case 'MINUS':
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// action! action은 object 여야 하며, type을 반드시 포함해야 한다.
const handelPlus = () => {
	countStore.dispatch({ type: 'ADD' });
};

const handelMinus = () => {
	countStore.dispatch({ type: 'MINUS' });
};

plus.addEventListener('click', handelPlus);
minus.addEventListener('click', handelMinus);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });
