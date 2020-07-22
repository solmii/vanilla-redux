const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerHTML = count;

const updateText = () => {
	number.innerHTML = count;
};

const handleCount = (x) => {
	count = count + x;
	updateText();
};

plus.addEventListener('click', () => handleCount(+1));
minus.addEventListener('click', () => handleCount(-1));
