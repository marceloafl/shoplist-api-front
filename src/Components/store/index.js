import { configureStore } from '@reduxjs/toolkit';
import newShoplistOpenedSlice from './reducers/newShoplistOpened';

const store = configureStore({
  reducer: {
    newShoplistOpened: newShoplistOpenedSlice,
  }
});

export default store;