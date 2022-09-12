import { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

export default function App() {
  const [todoData, setTodoData] = useState([
    {id: 1, title: '공부하기', completed: true},
    {id: 2, title: '청소하기', completed: false},
    {id: 3, title: '운동하기', completed: false},
  ])

  const [value, setValue] = useState('')

  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const onSubmitForm = (e) => {
      e.preventDefault();
      if (!value) return;
      const newToDo = { id: Date.now(), title: value, completed: false }
      setTodoData([...todoData, newToDo])
      setValue('')
  }

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}></List>
        <Form onSubmitForm={onSubmitForm} handleChange={handleChange} value={value}></Form>
      </div>
    </div>
  )
}
