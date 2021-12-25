import { createSlice } from '@reduxjs/toolkit'

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    seconds: 60,
  },
  reducers: {
      resetSeconds: (state) => {
          state.seconds = 60;
      }
  }
})

export const { resetSeconds } = typingSlice.actions;
export const seconds = (state) => state.typing.seconds;
export default typingSlice.reducer;