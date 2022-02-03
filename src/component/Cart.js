import './Cart.css';
import React,{useState} from 'react';

function Cart() {
    const [getdata , setGetData]  = useState();
    
    const array = []
    
    const handleChange = (e)=>{
        setGetData(e.target.value);
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
       array.unshift(...array,getdata)
        setGetData(array)
        setGetData("")
        console.warn(array)

        
          
    }
    
    
    return (<form onClick={handleSubmit}  >
        
        
        <div className="whole-div">
        <div className="enter-value-div">
        <input type="text" placeholder="Enter the value" className="enter-value-div" value={getdata} onChange={handleChange}/>
        <div className="button-div">
        <button >Add</button></div>
        </div>
         <div className="secound-outpot">
         <span className="add-data-list" >{getdata}</span>
         <div className="button-div">
         <button onClick={} >Edit</button>
          <button onClick={} >Delete</button></div>
          </div> 
         </div>
        </form>
        
        
        
    );
}

export default Cart;