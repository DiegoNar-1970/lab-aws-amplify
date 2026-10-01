import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <h1>Laboratorio DevOps - AWS</h1>
      <h2>Desplegado con AWS Amplify</h2>
      <p>Grupo: error 404 </p>
      <p>Estudiante ANGELO BLANCO OROZCO  </p>
      <p>Estudiante CARLOS MANUEL BOTERO </p>
      <p>Estudiante BRANDON STEVEN CARVAJAL SEPULVEDA </p>
      <p>DIEGO ALEJANDRO NARANJO MONCADA </p>
      <p>Curso: Laboratorio DevOps</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </main>

    </>
  )
}

export default App
