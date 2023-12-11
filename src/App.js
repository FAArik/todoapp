import { useState } from 'react';
import './App.css';
import Todo from './components/todo'

function App() {
	const [todos, setTodos] = useState([{
		id: 1,
		taskName: "Markete Git",
		isDone: false,
	},
	{
		id: 2,
		taskName: "Patika Ödevini Yap",
		isDone: true,
	},
	{
		id: 3,
		taskName: "Su iç",
		isDone: false,
	},
	{
		id: 4,
		taskName: "Temizlik Yap",
		isDone: false,
	}]);

	const [taskName, setInputText] = useState('');

	const submitHandler = (e) => {
		if (String(taskName).trim() === '') {
			return false
		}
		if (e.key === 'Enter') {
			const newTodo = {
				taskName,
				id: Date.now(),
				isDone: false
			}
			setTodos([...todos, newTodo]);
			setInputText('');
		}
	}

	const deleteAllHandler = () => {
		setTodos(
			todos.filter((todo) => !todo.isDone)
		)
	}
	const [filter, setFilter] = useState('all');
	return (
		<div>
			<section class="todoapp">
				<header className="header">
					<h1>todos</h1>
					<div  >
						<input onKeyDown={submitHandler} className="new-todo" placeholder="What needs to be done?" autoFocus onChange={(e) => setInputText(e.target.value)} value={taskName} />
					</div>
				</header>

				<section class="main">
					<input class="toggle-all" type="checkbox" />
					<label for="toggle-all">
						Mark all as complete
					</label>

					<Todo todos={todos} setTodos={setTodos} filter={filter}/>

				</section>

				<footer class="footer">
					<span class="todo-count">
						<strong>{todos.length} </strong>
						items left
					</span>

					<ul className="filters">
						<li>
							<a href="#/" onClick={() => setFilter('all')} className={`${filter === 'all' ? 'selected' : ''}`} >All</a>
						</li>
						<li>
							<a href="#/" onClick={() => setFilter('active')} className={`${filter === 'active' ? 'selected' : ''}`}>Active</a>
						</li>
						<li>
							<a href="#/" onClick={() => setFilter('completed')} className={`${filter === 'completed' ? 'selected' : ''}`}>Completed</a>
						</li>
					</ul>

					<button onClick={deleteAllHandler} className="clear-completed">
						Clear completed
					</button>
				</footer>
			</section>

		</div>
	);
}

export default App;
