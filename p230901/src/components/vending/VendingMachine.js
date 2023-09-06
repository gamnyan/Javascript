export const VendingMachine = ({
   totalMoney,
   accountBalance,
   onBuyDrink,
   onReturnChange,
   //    selectedDrinks,
   VendingData,
   vendingMachineTotalMoney,
}) => {
   return (
      <>
         <button className={accountBalance > 0 ? "btn-1" : "btn-2"} onClick={onReturnChange}>
            거스름돈 반환
         </button>
         <br />
         투입 금액: <label>{totalMoney}</label>
         <br />
         잔액: <label>{accountBalance}</label>
         <br />
         음료 자판기에 저장된 총 금액: <label>{vendingMachineTotalMoney}</label>
         <br />
         {VendingData.map((vending, i) => (
            <button
               className={accountBalance >= vending.price && vending.stock > 0 ? "btn-1" : "btn-2"}
               key={i}
               onClick={() => onBuyDrink(vending)}>
               {vending.drinkName}
               <br />
               {vending.price}원<br />
               잔여:{vending.stock}
            </button>
         ))}
      </>
   );
};
