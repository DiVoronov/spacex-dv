import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite (state, action) {
      (!state.find( id => id === action.payload ))
      &&
      state.push(action.payload);
      return state;
    },
    removeFromFavorite (state, action) {
      const index = state.findIndex( id => id === action.payload);
      state.splice(index, 1);
      return state;
    },
    removeAll (state) {
      state = [];
      return state;
    },
  }
});

export const { addToFavorite, removeFromFavorite, removeAll } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;