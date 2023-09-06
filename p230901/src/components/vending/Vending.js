import React, { useState } from "react";
import VendingData from "../../data/Vending.json";
import { MoneyInput } from "./MoneyInput";
import { VendingMachine } from "./VendingMachine";
import { MessageDisplay } from "./MessageDisplay";
import { MyMoney } from "./MyMoney";

export const Vending = () => {
   const [money, setMoney] = useState(0);
   const [addMoney, setAddMoney] = useState("");
   const [insertCoin, setInsertCoin] = useState([]);
   const [totalMoney, setTotalMoney] = useState(0);
   const [vendingMachineTotalMoney, setVendingMachineTotalMoney] = useState(0);
   const [accountBalance, setAccountBalance] = useState(0);
   const [insertCoinMessage, setInsertCoinMessage] = useState("");
   const [buyDrinkMessage, setBuyDrinkMessage] = useState("");
   const [emptyMoneyMessage, setEmptyMoneyMessage] = useState("");
   // const [selectedDrinks, setSelectedDrinks] = useState([]);

   const handleMoneyChange = e => {
      setAddMoney(e.target.value);
   };

   const handleAddMoney = () => {
      setMoney(money + parseInt(addMoney));
      setAddMoney("");
   };

   const handleInsertCoin = coin => {
      if (money >= coin) {
         setMoney(money - coin);
         setInsertCoin([...insertCoin, coin]);
         setTotalMoney(totalMoney + coin);
         setAccountBalance(accountBalance + coin);
         setInsertCoinMessage(
            `${coin}원이 투입되었습니다. 투입 금액은 총 ${totalMoney + coin}원 입니다. 당신의 지갑에는 ${
               money - coin
            }원이 남아 있습니다.`,
         );
      } else {
         alert("잔액이 부족합니다.");
      }
   };

   const handleBuyDrink = vending => {
      if (accountBalance >= vending.price) {
         if (vending.stock > 0) {
            setAccountBalance(accountBalance - vending.price);
            setVendingMachineTotalMoney(vendingMachineTotalMoney + vending.price);

            const updatedVendingData = VendingData.map(item => {
               if (item.drinkName === vending.drinkName) {
                  item.stock -= 1;
               }
               return item;
            });
            VendingData = updatedVendingData;

            // setSelectedDrinks([...selectedDrinks, vending.drinkName]);

            setBuyDrinkMessage(
               `${vending.drinkName}(이)가 나왔습니다. 남은 금액은 ${accountBalance - vending.price}원 입니다.`,
            );
         } else {
            alert("이 음료의 재고가 부족합니다.");
         }
      } else {
         setEmptyMoneyMessage(
            `투입하신 금액은 총 ${accountBalance}원인데 음료 가격은 ${vending.price}원이라서 구매할 수 없습니다.`,
         );
         // alert(`투입하신 금액은 총 ${accountBalance}원인데 음료 가격은 ${vending.price}원이라서 구매할 수 없습니다.`);
      }
   };

   const handleReturnChange = () => {
      if (!accountBalance) alert("반환할 돈이 없습니다.");
      setMoney(money + accountBalance);
      setInsertCoin([]);
      setTotalMoney(0);
      setAccountBalance(0);
      setInsertCoinMessage("");
      setBuyDrinkMessage("");

      // const updatedSelectedDrinks = selectedDrinks.map(drinkName => ({
      //    name: drinkName,
      //    backgroundColor: "yellowgreen",
      // }));
      // setSelectedDrinks(updatedSelectedDrinks);
   };

   return (
      <>
         <div className="one">
            <h1>VendingMachine</h1>
         </div>
         <MyMoney money={money} addMoney={addMoney} onMoneyChange={handleMoneyChange} onAddChange={handleAddMoney} />
         <br />
         <MoneyInput money={money} onInsertCoin={handleInsertCoin} />
         <br />
         <VendingMachine
            totalMoney={totalMoney}
            accountBalance={accountBalance}
            onBuyDrink={handleBuyDrink}
            onReturnChange={handleReturnChange}
            // selectedDrinks={selectedDrinks}
            VendingData={VendingData}
            vendingMachineTotalMoney={vendingMachineTotalMoney}
         />
         <hr className="flair" />
         <MessageDisplay
            insertCoinMessage={insertCoinMessage}
            buyDrinkMessage={buyDrinkMessage}
            emptyMoneyMessage={emptyMoneyMessage}
         />
      </>
   );
};
// 0630 0730 0830
//      0705 0805 0905
//           0831
//      0719 0819
//      0724 0824
//           0823
//           0824
