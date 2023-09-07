import { VoterContext as voter } from "./VoterContext";
import { useContext } from "react";

export const Dabbyeondeul = ({ dabbyeon, i }) => {
   const voterCount = useContext(voter);
   return (
      <div className="card-content p-2">
         <div key={i}>
            {dabbyeon.sunseo + ". " + dabbyeon.naexyong + " [" + dabbyeon.voteCount + " / " + voterCount + "]"}
         </div>
      </div>
   );
};
Dabbyeondeul.displayName = "Dabbyeondeul";
