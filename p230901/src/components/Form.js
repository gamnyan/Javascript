import { useState } from "react";

export const Form = () => {
   const [to, setTo] = useState("Alice");
   const [message, setMessage] = useState("Hello");

   function handleSubmit(e) {
      e.preventDefault();
      setTimeout(() => {
         alert(`You said ${message} to ${to}`);
      }, 3000);
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            To:{" "}
            <select value={to} onChange={e => setTo(e.target.value)}>
               <option value="Alice">Alice</option>
               <option value="Bob">Bob</option>
               <option value="Kim">Kim</option>
            </select>
         </label>
         <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
         <button type="submit">Send</button>
      </form>
   );
};

Form.displayName = Form;
