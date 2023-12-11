function Todo({ todos, setTodos, filter }) {

    const completedHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo

            ))
    }

    const allCompleteHandler = () => {
        setTodos(
            todos.map((todo) =>
                todo.isDone ? todo : { ...todo, isDone: !todo.isDone }
            )
        )
    }

    const deleteHandler = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const filtered = todos.filter((todo) => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return todo.isDone
        } else {
            return !todo.isDone
        }
    })

    return (
        <div>
            <section className="main">
                <input onClick={ allCompleteHandler}  className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        filtered.map((todo) => (
                            <li key={todo.id} className={`${todo.isDone ? 'completed' : ''}`}>
                                <div className="view">
                                    <input onClick={() => completedHandler(todo.id)} className="toggle" checked={todo.isDone} type="checkbox" readOnly />
                                    <label>{todo.taskName}</label>
                                    <button onClick={() => deleteHandler(todo.id)} className="destroy"></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default Todo;