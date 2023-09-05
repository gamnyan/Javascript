const coins = [100, 500, 1000];
export const MoneyInput = ({ money, onInsertCoin }) => {
    return (
       <div>
          내 지갑: <input value={money} readOnly />
          <br />
          {coins.map((coin, i) => (
             <button key={i} onClick={() => onInsertCoin(coin)}>
                {coin}
             </button>
          ))}
       </div>
    );
 };