import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/app.store";
import { Group } from "../model/group";

interface InitialStateProps {
  selectedGroup: Group | null;
}

const initialState: InitialStateProps = {
  selectedGroup: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedGroup: (state, action: PayloadAction<Group>) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const getSelectedGroup = (state: RootState) => state.chat.selectedGroup;

export const { setSelectedGroup } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
