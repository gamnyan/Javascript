export const MessageDisplay = ({ insertCoinMessage, buyDrinkMessage, emptyMoneyMessage }) => {
   return (
      <>
         <p>{emptyMoneyMessage}</p>
         <hr className="flair" />
         <p>{insertCoinMessage}</p>
         <hr className="flair" />
         <p>{buyDrinkMessage}</p>
      </>
   );
};
