export const addInventory = (entry) => async (dispatch) => {
    console.log(entry, dispatch, "entryddispatch")
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );

    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.log("Error adding entry", error);
  }
};
