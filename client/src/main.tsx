import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Registration } from './components/Registration'
import { Provider } from 'react-redux'
import { store } from '../store/index.ts'
import { Login } from './components/Login.tsx'
import { CompaniesList } from './components/CompaniesList/CompaniesList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Registration',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/companies',
        element: <CompaniesList />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
