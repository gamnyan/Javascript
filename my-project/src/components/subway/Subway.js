import React, { useState } from "react";
import SubwayData from "../../data/subwayData.json";
import "../../stylesheet/subway.css"; // CSS 파일 임포트

export const Subway = () => {
   const subwayLines = Object.keys(SubwayData[0]);
   const [selectedLine, setSelectedLine] = useState(subwayLines[0]);
   const [startStation, setStartStation] = useState(SubwayData[0][selectedLine].stations[0]);
   const [endStation, setEndStation] = useState(SubwayData[0][selectedLine].stations[0]);

   const handleLineChange = event => {
      const selectedLine = event.target.value;
      setSelectedLine(selectedLine);
      // 선택한 노선의 첫 번째 역을 출발 역으로 설정
      setStartStation(SubwayData[0][selectedLine].stations[0]);
      // 선택한 노선의 첫 번째 역을 도착 역으로 설정
      setEndStation(SubwayData[0][selectedLine].stations[0]);
   };

   const handleStartStationChange = event => {
      const selectedStation = event.target.value;
      setStartStation(selectedStation);
   };

   const handleEndStationChange = event => {
      const selectedStation = event.target.value;
      setEndStation(selectedStation);
   };

   const calculateDistance = () => {
      const lineData = SubwayData[0][selectedLine];
      const startIndex = lineData.stations.indexOf(startStation);
      const endIndex = lineData.stations.indexOf(endStation);

      if (startIndex !== -1 && endIndex !== -1) {
         const stationsTravelled = lineData.stations.slice(startIndex, endIndex + 1);
         const distance = stationsTravelled.length - 1; // 역 간 거리는 역 수 - 1
         return `${startStation}부터 ${endStation}까지 ${distance}개 역을 지나갑니다.`;
      }

      return "출발 역과 도착 역을 선택해주세요.";
   };

   const subwayLine = ["1호선", "2호선", "3호선", "4호선"];

   return (
      <div className="subway-container">
         {" "}
         {/* 클래스명 추가 */}
         <h2>지하철 역 간 거리 계산</h2>
         <div>
            <label>노선 선택:</label>
            <select value={selectedLine} onChange={handleLineChange}>
               {subwayLines.map(line => (
                  <option key={line} value={line}>
                     {subwayLine[subwayLines.indexOf(line)]}
                  </option>
               ))}
            </select>
         </div>
         <div>
            <label>출발 역 선택:</label>
            <select value={startStation} onChange={handleStartStationChange}>
               {SubwayData[0][selectedLine].stations.map(station => (
                  <option key={station} value={station}>
                     {station}
                  </option>
               ))}
            </select>
         </div>
         <div>
            <label>도착 역 선택:</label>
            <select value={endStation} onChange={handleEndStationChange}>
               {SubwayData[0][selectedLine].stations.map(station => (
                  <option key={station} value={station}>
                     {station}
                  </option>
               ))}
            </select>
         </div>
         <button className="calculate-button" onClick={calculateDistance}>
            계산(출발부터 도착까지 거리 계산)
         </button>
         <p>{calculateDistance()}</p>
      </div>
   );
};

Subway.displayName = "Subway";

export default Subway;
