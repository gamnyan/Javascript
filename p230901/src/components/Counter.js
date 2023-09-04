import { useState } from "react";

export function Counter() {
   const [number, setNumber] = useState(0);

   return (
      <>
         <h1>{number}</h1>
         <button
            onClick={() => {
               setNumber(number => number + 1);
               setNumber(number => number + 1);
               setNumber(number => number + 1);
            }}>
            +3
         </button>
         <button
            onClick={() => {
               setNumber(number + 5);
               setTimeout(() => {
                  alert(number);
               }, 1000);
            }}>
            +5
         </button>
         <button
            onClick={() => {
               const nextNumber = number + 5;
               setNumber(nextNumber);
               alert(nextNumber);
            }}>
            +5
         </button>
      </>
   );
}
