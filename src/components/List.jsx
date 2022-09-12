export default function List({todoData, setTodoData}) {


    const btnStyle = {
        color: 'white',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    
    const getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: 'none',
        }
    }

    const handleClick = (id) => {
        setTodoData(todoData.filter(v => v.id !== id))
    }

    const handleCheck = (e, id) => {
        const newTodoData = todoData.map(v => {
            if (v.id === id) {
            v.completed = e.target.checked
            }
            return v;
        })
        setTodoData(newTodoData)
    }

    return (
        todoData.map(todo => (
            <div key={todo.id} className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                <div className="flex items-center gap-1">
                    <input type="checkbox" checked={todo.completed} onChange={e => handleCheck(e, todo.id)} />
                    <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
                </div>
                <div className="items-center">
                    <button onClick={() => handleClick(todo.id)}>❌</button>
                </div>
            </div>
        ))
    )
}