import { createSlice } from "@reduxjs/toolkit"

export type appState = {
  selectedOption: 'Option A' | 'Option B' | 'Option C'
  comments: string[]
}

const initialState: appState = {
  selectedOption: 'Option A',
  comments: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload)
    },
    selectOption: (state, action) => {
      state.selectedOption = action.payload
    }
  }
})

export const { addComment, selectOption } = appSlice.actions

export const appReducer = appSlice.reducer