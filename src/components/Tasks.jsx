import styles from './Tasks.module.css'
import { Task } from './Task'

export function Tasks({ tasks, DeleteTask, DoneTask}){
    if (tasks.length < 1){
        return(
            <div className={styles.tasks}>
                <img src="/src/assets/Clipboard.svg"/>
                <div className={styles.text}>
                <b>Você ainda não tem tarefas cadastradas</b>
                <p>Crie taregas e organize seus itens a fazer</p>
                </div>
            </div>
        )
    }
    else{
        return(
            tasks.map(task => (
                <Task key={task.id} id={task.id} content={task.content} done={task.done} DeleteTask={DeleteTask} DoneTask={DoneTask}/>
            ))
        )
    }
    
}