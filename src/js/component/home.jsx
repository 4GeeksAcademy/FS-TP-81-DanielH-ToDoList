import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input, setInput] = useState("")
	const [task, setTask] = useState([])


	const AddNewTask = () => {
		setTask( [...task, input])
		setInput("")
	}
	console.log(task)

	return (
		<div className="d-flex justify-content-center container-fluid ">
			<div className="text-center ">
				<h1>To do List</h1>
				<div className="card mt-5 " style={{ width: "25rem" }}>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<input type="text"
								placeholder="AddNewTask"
								value={input}
								onChange={(e) => {
									console.log("miTarea:", e.target.value)
									setInput(e.target.value)}}

								onKeyDown={(e) => {
									if (e.key === "Enter") {
										AddNewTask()
									}
								}}
							/></li>
							{task.map((tasks, index)=>(
								<li key={index} className="list-group-item">{tasks}<button onClick={()=>{const filterTask= task.filter((_,i) => i !== index); setTask(filterTask)}}>x</button></li>

							))}
						
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
