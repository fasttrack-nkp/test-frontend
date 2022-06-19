import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/user/types/user';

export interface WorkingState {
  user: UserType;
}

const initialState = {
  user: { id: '', firstName: '', lastName: '' },
};

export const workingSlice = createSlice({
  name: 'working',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = workingSlice.actions;

export default workingSlice.reducer;
