import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd"
import List from "./List"

export default function Lists({todoData, setTodoData}) {
    const handleEnd = (e) => {
        if (!e.destination) return
        const newTodoData = todoData
        const [picked] = newTodoData.splice(e.source.index, 1)
        newTodoData.splice(e.destination.index, 0, picked)
        setTodoData(newTodoData)
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((todo, index) => (
                                <Draggable
                                    key={todo.id}
                                    draggableId={todo.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <List
                                            key={todo.id}
                                            todo={todo}
                                            todoData={todoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                            setTodoData={setTodoData}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}