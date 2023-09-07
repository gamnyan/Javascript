import { useState, useContext } from "react";
import { TasksContext as TC } from "./TasksContext";
import { TasksDispatchContext as TDC } from "./TasksDispatchContext";

export default function TaskList({ onChangeTask, onDeleteTask }) {
   const tasks = useContext(TC);
   return (
      <ul>
         {tasks.map(task => (
            <li key={task.id}>
               <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
            </li>
         ))}
      </ul>
   );
}

function Task({ task }) {
   const dispatch = useContext(TDC);
   const [isEditing, setIsEditing] = useState(false);
   let taskContent;
   if (isEditing) {
      taskContent = (
         <>
            <input
               value={task.text}
               onChange={
                  e =>
                     dispatch({
                        type: "changed",
                        task: {
                           ...task,
                           text: e.target.value,
                        },
                     })
                  // onChange({
                  //    ...task,
                  //    text: e.target.value,
                  // });
               }
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
         </>
      );
   } else {
      taskContent = (
         <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
         </>
      );
   }
   return (
      <label>
         <input
            type="checkbox"
            checked={task.done}
            onChange={e => {
               dispatch({
                  type: "changed",
                  task: {
                     ...task,
                     done: e.target.checked,
                  },
               });
               // onChange({
               //    ...task,
               //    done: e.target.checked,
               // });
            }}
         />
         {taskContent}
         <button
            onClick={() =>
               // onDelete(task.id)
               dispatch({
                  type: "deleted",
                  id: task.id,
               })
            }>
            Delete
         </button>
      </label>
   );
}
