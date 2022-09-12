import React from 'react'

/**
 * React.memo
 * -> 렌더링 결과를 memory에 저장해 놓음
 * -> props가 같으면 새로 렌더링하지 않고 저장된 렌더링 결과를 반환함
 * -> 즉, 리렌더링을 할 때, porps의 결과가 자주 같은 것으로 예상되면 React.memo()를 사용하면 됨
 */
const List = React.memo(({todo, todoData, provided, snapshot, setTodoData}) => {
    console.log('List')

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
        <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
            <div className="flex items-center gap-1">
                <input type="checkbox" checked={todo.completed} onChange={e => handleCheck(e, todo.id)} />
                <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            </div>
            <div className="items-center">
                <button onClick={() => handleClick(todo.id)}>❌</button>
            </div>
        </div>
    )
})

export default List
