import React, {Component} from 'react';

export default class App extends Component {

  state = {
    todoData: [
      {id: 1, title: '공부하기', completed: true},
      {id: 2, title: '청소하기', completed: false},
      {id: 3, title: '운동하기', completed: false},
    ],
    value: ''
  }

  btnStyle = {
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: 'none',
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(v => v.id !== id)
    this.setState({todoData: newTodoData})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleCheck = (e, id) => {
    const newTodoData = this.state.todoData.map(v => {
      if (v.id === id) {
        v.completed = e.target.checked
      }
      return v;
    })
    this.setState({todoData: newTodoData})
  }
  
  onSubmitForm = (e) => {
    e.preventDefault();
    if (!this.state.value) return;
    const newToDo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }
    this.setState({todoData: [...this.state.todoData, newToDo], value: ''})
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map(todo => (
            <div style={this.getStyle()} key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={e => this.handleCheck(e, todo.id)} />
              <span className={todo.completed ? 'done' : ''}>{todo.title}</span>
              <button style={this.btnStyle} onClick={() => this.handleClick(todo.id)}>X</button>
            </div>
          ))}

          <form onSubmit={e => this.onSubmitForm(e)}>
            <input type="text" name="value" placeholder='할 일을 입력하세요.' value={this.state.value} onChange={e => this.handleChange(e)} />
            <input type="submit" name="value" value="입력" />
          </form>
        </div>
      </div>
    )
  }
}