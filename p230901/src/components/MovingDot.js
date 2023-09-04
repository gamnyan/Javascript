import { useState } from "react";
export const MovingDot = () => {
   const [position, setPosition] = useState({
      x: 0,
      y: 0,
   });

   return (
      <div
         onPointerMove={e => {
            // position.x = e.clientX;
            // position.y = e.clientY;
            // setPosition(position);
            // setPosition({ ...position });

            setPosition({
               x: e.clientX,
               y: e.clientY,
            });

            // Object.assign(position, setPosition); // 이거 못하겠음
         }}
         style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
         }}>
         <div
            style={{
               position: "absolute",
               backgroundColor: "red",
               borderRadius: "50%",
               transform: `translate(${position.x}px, ${position.y}px)`,
               left: -107,
               top: -10,
               width: 20,
               height: 20,
            }}
         />
      </div>
   );
};
MovingDot.displayName = MovingDot;
