import {useState} from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Pending tasks']);

  const [canEdit, setCanEdit] = useState(false);

  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const updateAdd = state => {
    setShowAdd(state);
  };

  const editTask = text => {
    setCanEdit(true);
    setShowAdd(true);
    setTask(text);
  };

  const updateTask = (index) => {
    const updateTask = task
    const temp = tasks.map((value, i) => {
      if(i === index) {
        value = updateTask;
        return value;
      } else {
        return value;
      }
    });
    setTasks(temp);
    setCanEdit(false);
    setShowAdd(false);
    setTask('');
  };

  return {
    addTask,
    deleteTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    updateTask,
    editTask,
    canEdit
  };
};

export default useTask;
