import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

const newShoplistOpenedSlice = createSlice({
  name: 'newShoplistOpenedSlice',
  initialState,
  reducers: {
    handleModal: (state) => {
      return !state
    }
  }
});

export const { handleModal } = newShoplistOpenedSlice.actions;
export default newShoplistOpenedSlice.reducer;