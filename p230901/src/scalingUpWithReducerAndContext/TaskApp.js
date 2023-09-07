import { useReducer } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import tasksReducer from "./tasksReducer.js";
import { TasksContext as TC } from "./TasksContext.js";
import { TasksDispatchContext as TDC } from "./TasksDispatchContext.js";

export function TaskApp() {
   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

   // function handleAddTask(text) {
   //    dispatch({
   //       type: "added",
   //       id: nextId++,
   //       text: text,
   //    });
   // }

   // function handleChangeTask(task) {
   //    dispatch({
   //       type: "changed",
   //       task: task,
   //    });
   // }

   // function handleDeleteTask(taskId) {
   //    dispatch({
   //       type: "deleted",
   //       id: taskId,
   //    });
   // }

   return (
      <TC.Provider value={tasks}>
         <TDC.Provider value={dispatch}>
            <h1>Prague itinerary</h1>
            <AddTask />
            <TaskList />
         </TDC.Provider>
      </TC.Provider>
   );
}

// let nextId = 3;
const initialTasks = [
   { id: 0, text: "Visit Kafka Museum", done: true },
   { id: 1, text: "Watch a puppet show", done: false },
   { id: 2, text: "Lennon Wall pic", done: false },
];
