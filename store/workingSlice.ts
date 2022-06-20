import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType, RoleType } from '@/user/types/user';
import { TrackType } from '@/job/types/track';
export interface WorkingState {
  user: UserType;
  track: TrackType;
}

const initialState = {
  user: <UserType>{ id: '', firstName: '', lastName: '', role: <RoleType[]>[] },
  track: <TrackType>{
    id: '',
    HN: '',
    countAll: 0,
    countPending: 0,
    countSuccess: 0,
  },
};

export const workingSlice = createSlice({
  name: 'working',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setTrack: (state, action: PayloadAction<TrackType>) => {
      state.track = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setTrack } = workingSlice.actions;

export default workingSlice.reducer;
