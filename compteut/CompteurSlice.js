import { createSlice } from "@reduxjs/toolkit";

const CompteurSlice = createSlice({
  name: "compteur",
  initialState: {
    compt: 200,
  },
  reducers: {
    incrémenter: (state) => {
      state.compt++;
    },
    décrémenter: (state) => {
      state.compt--;
    },
    incrémenterParPas: (state, action) => {
      state.compt += action.payload;
    },
  },
});
export const { incrémenter, décrémenter, incrémenterParPas } = CompteurSlice.actions;
export default CompteurSlice.reducer;
