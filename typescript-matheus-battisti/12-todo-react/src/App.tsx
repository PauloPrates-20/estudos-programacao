import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);

  function deleteTask(id: number) {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  function toggleModal(display: boolean) {
    const modal = document.querySelector('#modal');
    display ? modal!.classList.remove('hide') : modal!.classList.add('hide');
  }

  function editTask(task: Task) {
    setTaskToUpdate(task);
    toggleModal(true);
  }

  function updateTask(id: number, title: string, difficulty: number) {
    const updatedTask: Task = { id, title, difficulty };
    const updatedItems = taskList.map(task => task.id === updatedTask.id ? updatedTask : task);

    setTaskList(updatedItems);
  }

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText='Editar tarefa'
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
