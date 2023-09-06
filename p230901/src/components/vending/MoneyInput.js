const coins = [100, 500, 1000];
export const MoneyInput = ({ money, onInsertCoin }) => {
   return (
      <>
         {coins.map((coin, i) => (
            <button className={money >= coin ? "btn-1" : "btn-2"} key={i} onClick={() => onInsertCoin(coin)}>
               {coin}
            </button>
         ))}
      </>
   );
};
