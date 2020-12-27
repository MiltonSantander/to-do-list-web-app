import React, { useState } from "react";
import Item from "./Item.jsx";

function App() {

	const [inputText, setText] = useState("");
	const [newTask, setTask] = useState([]);

	function handleInput(event) {
		const newValue = event.target.value;
		setText(newValue);
	}

	function handleAdd() {
		if (inputText != "") {
			setTask((prevValue) => {
				return [...prevValue, inputText];
			});
			setText("");
		}
	}

	function createItem(props, index) {
		return (<Item
			key={index}
			id={index}
			text={props}
			deleteTask={deleteTask}
		/>);
	}

	function deleteTask(keyTask) {
		setTask((prevValue) => {
			return prevValue.filter((task, index)=>{
				return index !== keyTask;
			});
		});
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input id="input" type="text" value={inputText} onChange={handleInput} />
				<button className="button" onClick={handleAdd}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{newTask.map(createItem)}
				</ul>
			</div>
		</div>
	);
}

export default App;
