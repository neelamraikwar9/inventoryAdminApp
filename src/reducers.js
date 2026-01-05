const initialState = {
    inventory: [],
    removedItems: [],
    remainingItem: []
};


const inventoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ENTRY_SUCCESS": 
        if(action.payload.entryType === "add to storage"){
            return {
                ...state, inventory: [...state.inventory, action.payload],
            }
        } else{
            return {
                ...state, removedItems: [...state.removedItems, action.payload], 
            };
        }

        default: 
        return state; 
    }
};


export default inventoryReducer; 