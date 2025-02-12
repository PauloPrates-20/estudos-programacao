import styles from "./TaskForm.module.css";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Task } from "../interfaces/Task";

type Props = {
  btnText: string
  taskList: Task[];
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskForm({ btnText, taskList, setTaskList }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  function addTaskHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: Task = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);
    setTitle('');
    setDifficulty(0);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm