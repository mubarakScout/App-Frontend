import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'john',
    // email: 'john@gmail.com',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      //   state.email = action.payload.email;
    },
    remove: state => (state = {}),
  },
});

export const {update, remove} = userSlice.actions; //you can use this in update.js to send paylods to this update reducer

export default userSlice.reducer; //use this in store
