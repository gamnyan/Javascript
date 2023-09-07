import { Dabbyeondeul } from "./Dabbyeondeul";

export const Jilmundeul = ({ jilmun, i }) => (
   <div className="card" key={i}>
      <div className="card-header">{jilmun.naexyong}</div>
      {jilmun.dabbyeondeul.map((dabbyeon, i) => (
         <Dabbyeondeul dabbyeon={dabbyeon} key={i} />
      ))}
   </div>
);

Jilmundeul.displayName = "Jilmundeul";
