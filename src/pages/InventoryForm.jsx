import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInventory } from '../action'

const InventoryForm = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [entryType, setEntryType] = useState("add to storage");

    const handleAddItem = (e) => {
        e.preventDefault();
    
        console.log(entryType, "entryType");

        console.log(entryType, "entryType", itemName, quantity, "entry");

        // if(entryType === "add to storage"){
            dispatch(addInventory({itemName: itemName, quantity: parseFloat(quantity), entryType: entryType}));
            // dispatch(addInventory({"Item Name": itemName, "Quantity": parseFloat(quantity), "Entry Type": entryType}));

            // dispatch(addInventory({"Item Name": itemName, "Quantity": quantity.toString(), "Entry Type": entryType}));

            
        // } else{
        //     dispatch()
        // }

        // setItemName("");
        // setQuantity("");
        let initialEntry = "add to storage"
        setEntryType(initialEntry);
    }

  return (
    <div>
        <h1>Inventory Admin App</h1>
        <form>
        <div>
            <label>Item Name: </label>
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
        </div>
        <br/>
        <div>
            <label>Item Quantity: </label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <br/>
        <div>
        <label>Entry Type: </label>
            <select value={entryType} onChange={(e) => setEntryType(e.target.value)}>
            <option value="add to storage">Add to storage</option>
            <option value="remove from storage">Remove from storage</option>
            </select> 
        </div>
        <br/>
        <button onClick={handleAddItem}>Add Item Data</button>
        </form>
    </div>
  )
}

export default InventoryForm