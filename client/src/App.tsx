import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/index.ts'
import { login, logout } from '../store/slice/AuthSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AuthButtons from './components/AuthButtons/AuthButtons'
import MainContent from './components/MainContent/MainContent'

const App: FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.Auth)

  const dispatch = useDispatch()

  const handleLogin = () => {
    const user = { name: 'John Doe', email: 'john@example.com' }
    dispatch(login(user))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <AuthButtons
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
