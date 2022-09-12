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
            <div style={getStyle()} key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={e => handleCheck(e, todo.id)} />
                <span className={todo.completed ? 'done' : ''}>{todo.title}</span>
                <button style={btnStyle} onClick={() => handleClick(todo.id)}>X</button>
            </div>
        ))
    )
}