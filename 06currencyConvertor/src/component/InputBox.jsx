import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,    
    className = "",

}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}    //whether amount is given or not
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}   //& to check whether amount has changes or not and Number() is used cuz js take events as a string most of the time

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                    value={selectCurrency} 
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}   //here we have not used Number() cuz we want currency in string i.e. "usd","inr" etc
                    disabled={currencyDisable}        

                >
                    {currencyOptions.map((currency)=>(      //map() use for iteration on array /* to use loop in jsx use key for much better performance */
                        <option key={currency} value={currency}>     
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
