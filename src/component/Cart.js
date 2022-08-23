import './Cart.css';
import React, { useState } from 'react';

function Cart() {
    const [getdata, setGetData] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getdata);
        const data = { getdata }
        setList((is) => [data, ...is])
        setGetData("")
    }



    const deleteButton = (index) => {
      const Data = [...list];
      Data.slice(index,1)
      setList(Data)
    }



    return (<form   >


        <div className="whole-div">
            <div className="enter-value-div">
                <input type="text" placeholder="Enter the value" className="enter-value-div" value={getdata} onChange={(e) => setGetData(e.target.value)} />
                <div className="button-div">
                    <button onClick={handleSubmit}>Add</button></div>
            </div>
            {list.map((a,index) => <div><li id={index}>
            <div className="secound-outpot">
                <span className="add-data-list" >{a.getdata}</span>{index}
                <div className="button-div">
                    <button  >Edit</button>
                    <button onClick={()=>deleteButton(index)} >Delete</button></div>
            </div></li></div>)}
        </div>
        
            
    </form>



    );
}

export default Cart;