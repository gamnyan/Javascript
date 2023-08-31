const seolmunData = {
  id: 2, // 설문번호
  juje: "주제 2", // 주제
  openerNo: 1, // 개설자id
  fromGigan: 1690729200000, // 시작일
  toGigan: 1691074800000, // 종료일
  jilmundeul: [
    // 주제 안에 있는 내용
    {
      id: 2,
      naexyong: "질문 1",
      sunseo: 1,
      seolmunId: 2,
      dabbyeondeul: [
        {
          id: 3,
          naexyong: "그렇다",
          sunseo: 1,
          jilmunId: 2,
          voteCount: 1,
        },
        {
          id: 4,
          naexyong: "아니다",
          sunseo: 2,
          jilmunId: 2,
          voteCount: 0,
        },
      ],
    },
    {
      id: 3,
      naexyong: "질문 2",
      sunseo: 2,
      seolmunId: 2,
      dabbyeondeul: [
        {
          id: 5,
          naexyong: "그렇다",
          sunseo: 1,
          jilmunId: 3,
          voteCount: 0,
        },
        {
          id: 6,
          naexyong: "보통이다",
          sunseo: 2,
          jilmunId: 3,
          voteCount: 1,
        },
        {
          id: 7,
          naexyong: "아니다",
          sunseo: 3,
          jilmunId: 3,
          voteCount: 0,
        },
      ],
    },
  ],
  openerUsername: "pchb", // 개설자name
  voterCount: 1, // 참여수
};

function Recipe({ recipes }) {
  return (
    <div className="card">
      <div className="card-header">{recipes.juje}</div>
      <div className="card-content p-2">
        <div className="row">
          <div className="cell-2">기간</div>
          <div className="cell-10">
            {new Date(recipes.fromGigan).toLocaleDateString() +
              " ~ " +
              new Date(recipes.toGigan).toLocaleDateString()}
          </div>
        </div>
        <div className="row">
          <div className="cell-2">개설자</div>
          <div className="cell-10">{recipes.openerUsername}</div>
        </div>
        <div className="row">
          <div className="cell-2">참가자수</div>
          <div className="cell-10">{recipes.voterCount}</div>
        </div>
      </div>
      {recipes.jilmundeul.map((jilmun, i) => (
        <div className="card" key={i}>
          <div className="card-header">{jilmun.naexyong}</div>,
          {jilmun.dabbyeondeul.map((dabbyeon, j) => (
            <div className="card-content p-2" key={j}>
              <div>
                {dabbyeon.sunseo +
                  ". " +
                  dabbyeon.naexyong +
                  " [" +
                  dabbyeon.voteCount +
                  " / " +
                  recipes.voterCount +
                  "]"}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <Recipe recipes={seolmunData} />,
  document.getElementById("seolmun")
);
