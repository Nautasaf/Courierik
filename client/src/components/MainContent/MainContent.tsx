import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../../App.module.scss'

const MainContent: FC = () => {
  return (
    <div className={styles.outletContainer}>
      <h1>Добро пожаловать в курьерик !!!</h1>
      <Outlet />
    </div>
  )
}

export default MainContent
