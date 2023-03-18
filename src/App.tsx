import { useState  } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

function App() {
  const [count, setCount] = useState(0)
  const router = useRoutes(routers)
  return (
    <div className="App">
      {router}
    </div>
  )
}

export default App
