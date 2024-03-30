import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Critical from './pages/Critical'
import Home from './pages/Home'
import Refinements from './pages/Ref'
import Soul from './pages/Soul'
import './styles/global.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/soul",
      element: <Soul />,
    },
    {
      path: "/crit",
      element: <Critical />,
    },
    {
      path: "/refi",
      element: <Refinements />,
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App
