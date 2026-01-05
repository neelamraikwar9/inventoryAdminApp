export const addInventory = (entry) => async (dispatch) => {
    console.log(entry, dispatch, "entryddispatch")
  try {
    console.log(entry, "entryddispatch")
    console.log('Stringified body:', JSON.stringify(entry));   // See exact API payload
  
//     entryType
// itemName
// quantity
 const data1 = {data: entry};
    console.log('Stringidy:', JSON.stringify(data1), data1);   // See exact API payload

    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      }
    );

    const data = await response.json();
    console.log(data, "fkjwoeifjoweijfwoe", response)
    if (data?.success === true) {
      console.log(data,'fowiejfoweiowejfowei');
      // dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.log("Error adding entry", error);
  }
};



// export const addInventory = (entry) => async (dispatch) => {
//   console.log(entry, "entyrb");

//    const jsonBody = JSON.stringify(entry);
//   console.log("EXACT JSON SENT:", jsonBody);  
  
//   try{
//     const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/add-to-store", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: jsonBody,
//     })

//     console.log(response, "response"); 

//     const data = await response.json();
//        console.log("FULL RESPONSE DATA:", data);  
//     if(data.success === true){
//       console.log(data);
//       dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data})
//     } else{
//        console.error("API ERROR:", data.error || data.message || data);
//     }
//   } catch(error){
//     console.error("Error adding entry", error);
//   }
// }



