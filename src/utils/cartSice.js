import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vanilla(older Redux)=>DONT HAVE TO MUTATE THE STATE
      //const newState=[...state](make new variable);
      //newState.push(action.payload);
      //return newState;

      //Redux Tool kit-->uses "immer" behind the scenes 
      //WE HAVE TO MUTATE THE STATE
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {

      //state=[]-->wont work because we are not mutating the state

      //RTK-->EITHER MUTATE THE STATE OR RETURN STATE
      //1.Muatate the state
       state.items.length = 0;

       //2.Return
       //return {items:[]};
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
