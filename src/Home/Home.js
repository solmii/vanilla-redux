import React, { useState } from 'react';

const Home = () => {
	const [text, setText] = useState('');

	const changeToDo = (e) => {
		const { value } = e.target;
		setText(value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setText('');
	};

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type='text' value={text} onChange={changeToDo} />
				<button>Add</button>
			</form>
			<ul></ul>
		</>
	);
};

export default Home;
