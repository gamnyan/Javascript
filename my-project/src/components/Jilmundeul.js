import { Dabbyeondeul } from "./Dabbyeondeul";

export const Jilmundeul = (jilmun, i) => (
  <div className="card" key={i}>
    <div className="card-header">{jilmun.naexyong}</div>
    <Dabbyeondeul />
  </div>
);
Jilmundeul.displayName = "Jilmundeul";
