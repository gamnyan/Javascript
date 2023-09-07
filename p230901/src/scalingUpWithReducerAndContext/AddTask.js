import { useState, useContext } from "react";
import { TasksDispatchContext as TDC } from "./TasksDispatchContext";

let nextId = 3;
export default function AddTask() {
   const dispatch = useContext(TDC);
   const [text, setText] = useState("");
   return (
      <>
         <input placeholder="Add task" value={text} onChange={e => setText(e.target.value)} />
         <button
            onClick={() => {
               setText("");
               dispatch({
                  type: "added",
                  id: nextId++,
                  text,
               });
               // onAddTask(text);
            }}>
            Add
         </button>
      </>
   );
}
