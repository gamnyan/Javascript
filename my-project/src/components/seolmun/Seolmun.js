import { Jilmundeul } from "./Jilmundeul";
import SeolmunData from "../../data/seolmun.json";
import { VoterContext as voter } from "./VoterContext";

export const Seolmun = () => {
   const SeolmunList = SeolmunData.map((seolmun, i) => (
      <voter.Provider value={seolmun.voterCount}>
         <div className="card" key={i}>
            <div className="card-header">{seolmun.juje}</div>
            <div className="card-content p-2">
               <div className="row">
                  <div className="cell-2">기간</div>
                  <div className="cell-10">
                     {new Date(seolmun.fromGigan).toLocaleDateString() +
                        " ~ " +
                        new Date(seolmun.toGigan).toLocaleDateString()}
                  </div>
               </div>
               <div className="row">
                  <div className="cell-2">개설자</div>
                  <div className="cell-10">{seolmun.openerUsername}</div>
               </div>
               <div className="row">
                  <div className="cell-2">참가자수</div>
                  <div className="cell-10">{seolmun.voterCount}</div>
               </div>
            </div>
            {seolmun.jilmundeul.map((jilmun, i) => (
               <Jilmundeul jilmun={jilmun} key={i} />
            ))}
         </div>
      </voter.Provider>
   ));

   return SeolmunList;
};
Seolmun.displayName = "Seolmun";
