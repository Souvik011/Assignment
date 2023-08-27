import { Action } from "./ActionSlice";


export const getItemArr = () => {
    return async (dispatch) => {
      const getItem = async () => {
        try {
          const response = await fetch(
            `https://expense-tracker-5ef39-default-rtdb.firebaseio.com/items.json`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          let itemsArray = [];
          if (!!data) {
            itemsArray = Object.keys(data).map((item) => {
              return {
                id: item,
                text:data[item].text,
                state: data[item].state,
                date: data[item].date
              };
            });
          }
          console.log(itemsArray);
          dispatch(
              Action.addItem(itemsArray)
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      getItem();
    };
  };
  
  export const addItemArr = (item) => {
    return async (dispatch) => {
      const addItem = async (item) => {
        try {
          const response = await fetch(
            `https://expense-tracker-5ef39-default-rtdb.firebaseio.com/items.json`,
            {
              method: "POST",
              body: JSON.stringify({
                text:item.text,
                state:item.state,
                date:item.date
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("Data",data);
          dispatch(getItemArr());
        } catch (error) {
          alert(error.message);
        }
      };
      addItem(item);
    };
  };
  
  export const editItemArr = (item) => {
    return async (dispatch) => {
      const editItem = async (item) => {
        try {
          const response = await fetch(
            `https://expense-tracker-5ef39-default-rtdb.firebaseio.com/items/${item.id}.json`,
            {
              method: "PUT",
              body: JSON.stringify({
                text:item.text,
                state:item.state,
                date:item.date
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("editIytem", data);
          dispatch(getItemArr());
        } catch (error) {
          alert(error.message);
        }
      };
      editItem(item);
    };
  };
  
  export const deleteItemArr= (id) => {
    return async (dispatch) => {
      const deleteItem = async (id) => {
        try {
          const response = await fetch(
            `https://expense-tracker-5ef39-default-rtdb.firebaseio.com/items/${id}.json`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("DeleteItem", data);
          dispatch(getItemArr());
        } catch (error) {
          alert(error.message);
        }
      };
      deleteItem(id);
    };
  };
  