import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './App.module.scss'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Index';
import {  logout } from '../../client/store/slice/AuthSlice'; 
import ThemeToggle from '../components/ToggleTheme'; 



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const{ isLoggedIn  } = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch(); 
  
 
  
  const handleLogout = () => {
    dispatch(logout());
  };
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
 

  return (
    <div className={`${styles.appContainer} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      
      <nav className={styles.navMenu}>
      <ThemeToggle toggleTheme={toggleTheme} />
        {isLoggedIn ? (
          <>
          
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Главная
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Профиль
            </NavLink>
           
            
           
            <button onClick={handleLogout} className={styles.navLink}>
              Выйти
            </button>
            
          </>
        ) : (
          <>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Главная
            </NavLink>
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Логин
            </NavLink>
          </>
        )}
      </nav>

      {!isLoggedIn && <h1>Добро пожаловать в пикничОК!!!</h1>}

      <div className={styles.outletContainer}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        контакты: + 7(929)-198-88-32
        <br />
        адрес: г. Уфа, ул. Салавата Юлаева д.90
      </footer>
     
    </div>
  );
}

export default App;



