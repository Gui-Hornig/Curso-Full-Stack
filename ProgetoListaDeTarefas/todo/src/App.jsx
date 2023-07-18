import { useState } from 'react'


function App() {

  return <div>  Ola react </div>
  
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

    ])
  }
}

export default App
