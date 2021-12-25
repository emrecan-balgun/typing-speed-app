import { createSlice } from '@reduxjs/toolkit'

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    seconds: 60000,
    text: '',
    isStart: false,
  },
  reducers: {
      resetSeconds: (state) => {
          state.seconds = 60000;
      },
      changeText: (state, action) => {
          state.text = action.payload;
      },
      changeIsStart: (state, action) => {
          state.isStart = action.payload;
      }
  }
})

export const { resetSeconds, changeText, changeIsStart } = typingSlice.actions;

export const seconds = (state) => state.typing.seconds;
export const text = (state) => state.typing.text;
export const isStart = (state) => state.typing.isStart;

export default typingSlice.reducer;