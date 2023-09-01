import { Jilmundeul } from "./Jilmundeul";
import SeolmunData from "../data/seolmun.json";

export const Seolmun = () => {
  const SeolmunList = SeolmunData.map((SeolmunData, i) => (
    <div className="card" key={i}>
      <div className="card-header">{SeolmunData.juje}</div>
      <div className="card-content p-2">
        <div className="row">
          <div className="cell-2">기간</div>
          <div className="cell-10">
            {new Date(SeolmunData.fromGigan).toLocaleDateString() +
              " ~ " +
              new Date(SeolmunData.toGigan).toLocaleDateString()}
          </div>
        </div>
        <div className="row">
          <div className="cell-2">개설자</div>
          <div className="cell-10">{SeolmunData.openerUsername}</div>
        </div>
        <div className="row">
          <div className="cell-2">참가자수</div>
          <div className="cell-10">{SeolmunData.voterCount}</div>
        </div>
      </div>
      <Jilmundeul />
    </div>
  ));
  return SeolmunList;
};
Seolmun.displayName = "Seolmun";
