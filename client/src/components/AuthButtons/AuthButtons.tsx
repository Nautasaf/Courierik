import { FC } from 'react'

interface AuthButtonsProps {
  isLoggedIn: boolean
  handleLogout: () => void
  handleLogin: () => void
}

const AuthButtons: FC<AuthButtonsProps> = ({
  handleLogin,
  handleLogout,
  isLoggedIn,
}) => {
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Выйти</button>
      ) : (
        <button onClick={handleLogin}>Войти</button>
      )}
    </div>
  )
}

export default AuthButtons
