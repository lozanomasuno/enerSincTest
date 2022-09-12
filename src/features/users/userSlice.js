import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
      increment: (state) =>{
        state.counter += 1;
      }
    }
})

export const { increment } = userSlice.actions;
