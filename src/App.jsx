import { useState } from 'react';
import Lists from './components/Lists';
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
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할 일 목록</h1>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData}></Lists>
        <Form onSubmitForm={onSubmitForm} handleChange={handleChange} value={value}></Form>
      </div>
    </div>
  )
}
