import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tiago Ribeiro" },
  { id: "1", name: "Rafael Ribeiro" },
  { id: "2", name: "João Nomn" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
