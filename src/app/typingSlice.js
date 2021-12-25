import { createSlice } from '@reduxjs/toolkit'

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    seconds: 60,
  },
  reducers: {}
})

export default typingSlice.reducer;