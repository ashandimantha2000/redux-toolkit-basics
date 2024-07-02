import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  return data.json();
});

const dataserverSlice = createSlice({
  name: "dataserver",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

export default dataserverSlice.reducer;
