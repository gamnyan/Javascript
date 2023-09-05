export const VendingMachine = ({
    accountBalance,
    onBuyDrink,
    onReturnChange,
    selectedDrinks,
    VendingData,
}) => {
    return (
        <div>
            <button onClick={onReturnChange}>거스름돈 반환</button>
            <br />
            음료 자판기에 저장된 총 금액: <input value={accountBalance} readOnly />
            <br />
            {VendingData.map((vending, i) => (
                <button
                    key={i}
                    onClick={() => onBuyDrink(vending)}
                    style={{
                        background: selectedDrinks.includes(vending.drinkName)
                            ? "yellowgreen"
                            : "brown",
                    }}
                >
                    {vending.drinkName}({vending.price}원 재고수:{vending.stock})
                </button>
            ))}
        </div>
    );
};

