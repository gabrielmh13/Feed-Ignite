import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/gabrielmh13.png" />

                <strong>Gabriel Hernandes</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}