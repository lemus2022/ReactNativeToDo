import { useState } from "react";


const useTask = () =>{
    const [showAdd, setShowAdd] = useState(false);
    //valor del input
    const [task,setTask] = useState('');

    //Guardar task
    const [tasks, setTasks] = useState(['Hacer app']);

    const addTask = () => {
        //agregar task al arreglo de task
        setTask(currentTasks => [...currentTasks,task]);
        //limpiar task
        setTask('');
        //quitar input
        setShowAdd(false);
    };

    //Borrar task

    const deleteTask = index => {
        const temp = [...tasks];
        temp.splice(index,1);
        setTasks(temp);
    }




    return{
        showAdd,
        addTask,
        
    };
};

export default useTask;