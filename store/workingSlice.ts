import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface WorkingState {
  role: Role;
}
import { Role } from '@/user/types/role';

const initialState = {
  role: {},
};

export const workingSlice = createSlice({
  name: 'working',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = workingSlice.actions;

export default workingSlice.reducer;
