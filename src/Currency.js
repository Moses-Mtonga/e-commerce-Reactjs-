
import React, {useState} from 'react';



function SwitchCurrency({selects, setSelect}) {
    // const [selects, setSelect]=useState();


    // const getRates = async ()=>{
    //     axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY');
        
    // }

        
        return (
            // <>
            
            <div className='currency'>
                <label htmlFor='Currency'>Currency: </label>
                <select className='select' value = {selects} onChange={(e)=>
                    setSelect(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="ZMW">ZMW</option>
                    <option value="JPY">JPY</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
            </select>
            </div>
        
        );
    }
 
export default SwitchCurrency;