import styles from './Body.module.css';
import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Tasks';
import { useState } from 'react';
import { PopUp } from './PopUp';

export function Body(){
    const [tasks, setTask] = useState([]);

    const [taskId, setTaskId] = useState(0);

    const [popUp, setPopUp] = useState(0);

    const [textPopUp, setTextPopUp] = useState('');

    const taskDone = tasks.filter(task=>{
        return task.done == true;
    })
    console.log(tasks)
    function CreateTask(){
        event.preventDefault();

        const text = event.target.taskText.value;
        if (text.length <= 5){
            setPopUp(1)
            setTextPopUp("Sua tarefa deve ter 6 ou mais caracteres.");
            event.target.taskText.value = '';
            return;
        }
        var checkRepeatTask = tasks.filter(task=>{
            return text == task.content;
        });
        if(checkRepeatTask.length >= 1){
            setPopUp(1)
            setTextPopUp("Esta tarefa já existe!");
            event.target.taskText.value = '';
            return;
        }
        
        const taskText = {
            'id' : taskId + 1,
            'content' : `${text}`,
            'done' : false
        }

        setPopUp({0: "Desabilitado"})
        setTask([...tasks, taskText]);
        setTaskId(taskId + 1);
        event.target.taskText.value = '';
    }

    function DeleteTask(id){
        const TasksWhitoutDeleted = tasks.filter(task => {
            return task.id != id;
        })
        setTask(TasksWhitoutDeleted);
    }

    function DoneTask(id){
        const SearchDoneTasks = tasks.map(SearchDoneTask => {
            if( SearchDoneTask.id === id){
                if( SearchDoneTask.done === false){
                    SearchDoneTask.done = true;
                }
                else{
                    SearchDoneTask.done = false;
                }
            }
            return SearchDoneTask;
        })
        setTask(SearchDoneTasks);

        
    }
    
    return (
        <>
        <PopUp popUp={popUp} setPopUp={setPopUp} textPopUp={textPopUp}/>
        <div className="container">
            <form className={styles.newTask} onSubmit={CreateTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" name="taskText" autoComplete="off"/>
                <button type="submit">Criar<PlusCircle className={styles.plus} size={16}/></button>
            </form>
            <div className={styles.countTask}>
                <div className={styles.new}>
                    <p>Tarefas criadas</p><span>{tasks.length}</span>
                </div>
                <div className={styles.completed}>
                    <p>Concluídas</p><span>{taskDone.length}</span>
                </div>
            </div>
            <Tasks tasks={tasks}  DeleteTask={DeleteTask} DoneTask={DoneTask}/>
        </div>
        </>
    )
}