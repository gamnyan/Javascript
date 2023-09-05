import { useState } from "react";

let initialCounters = [0, 0, 0];

export const CounterList = () => {
   const [counters, setCounters] = useState(initialCounters);

   const handleIncrementClick = index => {
      const nextCounters = [...counters];
      nextCounters[index] = nextCounters[index] + 1;
      //   const nextCounters = counters.map((c, i) => {
      //      if (index === i) {
      //         return c + 1;
      //      } else {
      //         return c;
      //      }
      //   });
      setCounters(nextCounters);
   };

   return (
      <ul>
         {counters.map((counter, i) => (
            <li key={i}>
               {counter}
               <button
                  onClick={() => {
                     handleIncrementClick(i);
                  }}>
                  +1
               </button>
            </li>
         ))}
      </ul>
   );
};

CounterList.displayName = CounterList;
