import {FC} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../App.module.scss'

interface HeaderProps {
  isLoggedIn: boolean,
  handleLogout: () => void
  handleLogin: () => void

}

const Header : FC<HeaderProps> = ({isLoggedIn , handleLogout}) => {
	return (
		<nav className={styles.navMenu}>
        {isLoggedIn ? (
          <>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Главная
            </NavLink>
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Профиль
            </NavLink>
            <NavLink
              to='/orders'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Заказы
            </NavLink>
            <button onClick={handleLogout} className={styles.navLink}>
              Выйти
            </button>
            <NavLink
              to='/companies'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Компании
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Главная
            </NavLink>
            <NavLink
              to='/registration'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Регистрация
            </NavLink>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Логин
            </NavLink>
            <NavLink
              to='/companies'
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
            >
              Компании
            </NavLink>
          </>
        )}
      </nav>
	)
}

export default Header