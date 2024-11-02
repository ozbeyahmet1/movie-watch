import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface FavoritesState {
  favorites: string[]; // You can change the type depending on your data (e.g., Movie type)
}

// Define the initial state
const initialState: FavoritesState = {
  favorites: [],
};

// Create a slice for favorites
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Action to add an item to favorites
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    // Action to remove an item from favorites
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item !== action.payload);
    },
  },
});

// Export the actions
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

// Export the reducer
export default favoritesSlice.reducer;
