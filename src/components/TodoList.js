import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
	const tasks = props.todos.map((item) => {
		return (
			<div className={style.task} key={item.id}>
				<p> {item.text} </p>
				<button onClick={() => props.remove(item.id)}> X </button>
			</div>
		)
	});

	return (
		<div className={style.list}>
			{tasks}
		</div>
	)

}


export default TodoList;
