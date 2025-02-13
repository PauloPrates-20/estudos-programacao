import { Task } from '../interfaces/Task'
import styles from './TaskList.module.css'

type Props = {
  taskList: Task[];
  handleDelete(id: Number): void;
  handleEdit(task: Task): void;
}

function TaskList({ taskList, handleDelete, handleEdit }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(task => (
          <div key={task.id}>
            <div className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i className='bi bi-pencil' onClick={() => handleEdit(task)} />
                <i className='bi bi-trash' onClick={() => handleDelete(task.id)} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList