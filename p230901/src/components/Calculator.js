import { useState } from "react";

export const Calculator = () => {
   const keyArrayArray = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      ["0", "C", "=", "+"],
   ];
   const [calc, setCalc] = useState("");

   const calcSum = keys => setCalc(calc + keys);

   const calcResult = () => {
      if (!(calc.indexOf("+") === -1)) {
         let calcBefore = parseFloat(calc.slice(0, calc.indexOf("+")));
         let calcAfter = parseFloat(calc.slice(calc.indexOf("+") + 1));
         setCalc(calcBefore + calcAfter);
      }
      if (!(calc.indexOf("-") === -1)) {
         let calcBefore = parseFloat(calc.slice(0, calc.indexOf("-")));
         let calcAfter = parseFloat(calc.slice(calc.indexOf("-") + 1));
         setCalc(calcBefore - calcAfter);
      }
      if (!(calc.indexOf("*") === -1)) {
         let calcBefore = parseFloat(calc.slice(0, calc.indexOf("*")));
         let calcAfter = parseFloat(calc.slice(calc.indexOf("*") + 1));
         setCalc(calcBefore * calcAfter);
      }
      if (!(calc.indexOf("/") === -1)) {
         let calcBefore = parseFloat(calc.slice(0, calc.indexOf("/")));
         let calcAfter = parseFloat(calc.slice(calc.indexOf("/") + 1));
         setCalc(calcBefore / calcAfter);
      }
   };

   const calcInit = () => {
      setCalc("");
   };

   return (
      <>
         <input value={calc} />
         <br />
         {keyArrayArray.map((keyArray, i) => (
            <table>
               <tr key={i}>
                  {keyArray.map((keys, j) => (
                     <button
                        className="btn-1"
                        key={j}
                        onClick={keys === "=" ? calcResult : keys === "C" ? calcInit : () => calcSum(keys)}>
                        <td>{keys}</td>
                     </button>
                  ))}
               </tr>
            </table>
         ))}
      </>
   );
};
