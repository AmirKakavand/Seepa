import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartItem {
  imageSrc: string,
  productName: string,
  description: string,
  price: number,
  count: number
}


const initialState: { cartItems: ICartItem[] } = {
  cartItems: []
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
     const newCartItem: ICartItem = {
       imageSrc: action.payload.imageSrc,
       productName: action.payload.productName,
       description: action.payload.description,
       price: action.payload.price,
       count: action.payload.count? action.payload.count : 1
     };

     state.cartItems.push(newCartItem);
    },

    // take the imageUrl for a cartItem and use it to remove that item from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(item => item.imageSrc !== action.payload)
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;



export default cartSlice.reducer;
