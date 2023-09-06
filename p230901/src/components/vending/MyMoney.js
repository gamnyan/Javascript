export const MyMoney = ({ addMoney, onMoneyChange, money, onAddChange }) => (
   <>
      <input value={addMoney} onChange={onMoneyChange} />
      <button className={addMoney > 0 ? "btn-1" : "btn-2"} onClick={onAddChange}>
         충전
      </button>
      <br />내 지갑: <label>{money}</label>
   </>
);
