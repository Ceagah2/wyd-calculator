import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'
import Soul from './pages/Soul'
import './styles/global.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/soul',
      element: <Soul />
    },
    {
      path: '/crit',
      element: <div>Hello Crit Calculator</div>
    },
    {
      path: '/*',
      element: <Home />
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
