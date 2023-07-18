import { useState } from 'react'

  function App() {
    const [todos, settodos] = useState([
      {
        id: 1,
        text: "Criar funcionalidades X no sistema",
        category: "Trabalho",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Ir para a academia",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      },

    ]);
    return <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  }


export default App;
