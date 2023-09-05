// import { useState } from "react";
// import VendingData from "../data/Vending.json";

// export const Vending = () => {
//    const [money, setMoney] = useState("");
//    const handleMoneyChange = e => setMoney(e.target.value);
//    const coins = [100, 500, 1000];
//    const [insertCoin, setInsertCoin] = useState(coins);
//    const handleInsertCoin = (e, coin) => setInsertCoin(coin);

//    return (
//       <>
//          <div>
//             내 지갑: <input value={money} onChange={handleMoneyChange} />
//             <br />
//             {coins.map((coin, i) => (
//                <button key={i} onClick={e => handleInsertCoin(e, coin)}>
//                   {coin}
//                </button>
//             ))}
//             <br />
//             투입 금액: <input value={handleInsertCoin} />
//             <br />
//             음료 자판기에 저장된 총 금액: <input />
//             <br />
//             {VendingData.map((vending, i) => (
//                <button key={i}>
//                   {vending.drinkName}({vending.price}원 재고수:{vending.stock})
//                </button>
//             ))}
//             <br />
//             <p>{`100원이 투입되었습니다. 투입 금액은 100원 입니다. 당신의 지갑에는 1000원이 남아 있습니다. 투입하신 금액은 총 1000원인데 음료 가격은 1200원이라서 구매할 수 없습니다.
//             OOO(이)가 나왔습니다. 투입 금액은 300원 입니다.
//             1000원이 투입되었습니다. 투입 금액은 1300원 입니다. 당신의 지갑에는 0원이 남아 있습니다.`}</p>
//          </div>
//       </>
//    );
// };

///////////////////////////
import React, { useState } from "react";
import VendingData from "../data/Vending.json";

const coins = [100, 500, 1000];
export const Vending = () => {
   const [money, setMoney] = useState(0);
   const [insertCoin, setInsertCoin] = useState([]);
   const [totalMoney, setTotalMoney] = useState(0);

   const handleMoneyChange = e => setMoney(e.target.value);

   const handleInsertCoin = coin => {
      if (money >= coin) {
         setMoney(money - coin); // 내 지갑에서 돈 차감
         setInsertCoin([...insertCoin, coin]); // 투입한 동전 저장
         setTotalMoney(totalMoney + coin); // 총 투입 금액 업데이트
      } else {
         alert("잔액이 부족합니다.");
      }
   };

   const handlePurchaseDrink = vending => {
      if (totalMoney >= vending.price) {
         setTotalMoney(totalMoney - vending.price); // 음료 가격만큼 차감
         // 여기에서 음료를 판매하거나 재고를 업데이트하는 등의 작업을 수행할 수 있습니다.
      } else {
         alert("투입한 금액으로 음료를 구매할 수 없습니다.");
      }
   };

   return (
      <>
         <div>
            내 지갑: <input value={money} onChange={handleMoneyChange} />
            <br />
            {coins.map((coin, i) => (
               <button key={i} onClick={() => handleInsertCoin(coin)}>
                  {coin}
               </button>
            ))}
            <br />
            <button>반환</button>
            <br />
            투입 금액: <input value={totalMoney} readOnly />
            <br />
            음료 자판기에 저장된 총 금액: <input value={calculateTotalVendingAmount()} readOnly />
            <br />
            {VendingData.map((vending, i) => (
               <button key={i} onClick={() => handlePurchaseDrink(vending)}>
                  {vending.drinkName}({vending.price}원 재고수:{vending.stock})
               </button>
            ))}
            <br />
            <p>{/* 여기에 동적으로 업데이트되는 메시지 표시 */}</p>
         </div>
      </>
   );
};

// calculateTotalVendingAmount 함수 정의
const calculateTotalVendingAmount = () => {
   return VendingData.reduce((total, vending) => total + vending.price * vending.stock, 0);
};
