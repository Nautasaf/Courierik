import {FC} from 'react'
import styles from '../../App.module.scss'


const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
        контакты: + 7(929)-198-88-32
        <br />
        адрес: г. Уфа, ул. Салавата Юлаева д.90
    </footer>
	)
}

export default Footer