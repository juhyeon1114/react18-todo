import { useState, useMemo } from 'react';
import Lists from './components/Lists';
import Form from './components/Form';
import { useEffect } from 'react';

export default function App() {
  console.log('App')

  const [todoData, setTodoData] = useState([
    // {id: 1, title: '공부하기', completed: true},
    // {id: 2, title: '청소하기', completed: false},
    // {id: 3, title: '운동하기', completed: false},
  ])

  const [value, setValue] = useState('')

  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const onSubmitForm = (e) => {
      e.preventDefault();
      if (!value) return;
      const newToDo = { id: Date.now(), title: value, completed: false }
      saveData([...todoData, newToDo])
      setValue('')
  }

  const handleDeleteAll = () => {
    saveData([])
  }

  const saveData = (data = []) => {
    localStorage.setItem('todo', JSON.stringify(data))
    setTodoData(data)
  }

  const loadData  = () => {
    const data = localStorage.getItem('todo')
    setTodoData(data ? JSON.parse(data) : [])
  }

  /**
   * useMemo()
   * -> 2번째 인자인 배열 안에 있는 값이 변할 때, 첫번째 인자의 값을 다시 계산한다. 
   *    그 외에는 기존에 계산된(메모리에 저장된) 값을 return한다
   * -> Vue의 computed와 비슷한 역할
   */
  const count = useMemo(() => todoData.length, [todoData])

  useEffect(() => {
    loadData()
  }, [])

  return <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
    <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
      <div className='flex justify-between mb-3'>
        <h1>할 일 목록 {count}</h1>
        {todoData.length > 0 && <button onClick={() => handleDeleteAll()}>Delete All</button>}
      </div>
      <Lists todoData={todoData} saveData={saveData}></Lists>
      <Form onSubmitForm={onSubmitForm} handleChange={handleChange} value={value}></Form>
    </div>
  </div>
}
