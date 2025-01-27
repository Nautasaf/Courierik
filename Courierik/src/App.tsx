import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './App.module.scss'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Index';
import { login, logout } from '../store/slice/AuthSlice'; 



function App() {
  const{ isLoggedIn  } = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch(); 
  const handleLogin = () => {
    
    const user = { name: 'John Doe', email: 'john@example.com' };
    dispatch(login(user)); 
  };

  const handleLogout = () => {
    dispatch(logout()); 
  };
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navMenu}>
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
            <NavLink
              to="/orders"
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              Заказы
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

      <h1>Добро пожаловать в курьерик !!!</h1>

      <div className={styles.outletContainer}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        контакты: + 7(929)-198-88-32
        <br />
        адрес: г. Уфа, ул. Салавата Юлаева д.90
      </footer>
      <button onClick={handleLogout}>Выйти</button>

      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}

export default App;



