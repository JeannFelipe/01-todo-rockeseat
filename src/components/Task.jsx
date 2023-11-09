import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react';

export function Task({id, content, done, DeleteTask, DoneTask}){
    const [hoverCircle, setHoverCircle] = useState('regular');

    const [hoverCheck, setHoverCheck] = useState('#5E60CE');

    function onDeleteTask(){
        DeleteTask(id)
    }
    function enterCircle(){
        setHoverCircle('duotone')
    }
    function leaveCircle(){
        setHoverCircle('regular')
    }

    function enterCheck(){
        setHoverCheck('#8284FA')
    }
    function leaveCheck(){
        setHoverCheck('#5E60CE')
    }
    function onSetDone(){
        DoneTask(id)
    }
    if( done == false){
        return(
            <div className={styles.task}>
            <Circle size={30} weight={hoverCircle} onMouseOver={enterCircle} onMouseOut={leaveCircle} onClick={onSetDone} className={`${styles.icons} ${styles.circle}`} />
            <p>{content}</p>
            <Trash  size={30} className={`${styles.icons} ${styles.trash}`} onClick={onDeleteTask}/>
            </div>
        )
    }
    else{
        return(
            <div className={styles.taskDone}>
            <CheckCircle size={30} weight="fill" color={hoverCheck} onMouseOver={enterCheck} onMouseOut={leaveCheck} onClick={onSetDone} className={`${styles.icons} ${styles.circle}`} />
            <p>{content}</p>
            <Trash  size={30} className={`${styles.icons} ${styles.trash}`} onClick={onDeleteTask}/>
            </div>
        )
    }
    
}