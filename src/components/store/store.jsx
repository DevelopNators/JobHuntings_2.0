import { configureStore } from '@reduxjs/toolkit'
import cardReducer  from '../features/cardSlice'
import singleCardReducer  from '../features/SingleCardSlice'

export const  pageNumber = 1;
export  const pageSize = 10;



export const store = configureStore({
  reducer: {
    card: cardReducer, 
    singleCard: singleCardReducer 
  },
})

export default store
