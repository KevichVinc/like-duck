import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import { getRMCharacters } from "api";
import { RMCharacter } from "types";

export interface CharactersState {
  status: "idle" | "loading" | "failed";
  charactersList: RMCharacter[];
  page: number;
}

const initialState: CharactersState = {
  status: "idle",
  charactersList: [],
  page: 1,
};

export const getCharacters = createAsyncThunk(
  "counter/fetchCount",
  async (page: number) => {
    const { results } = await getRMCharacters(page);

    return results.map((character: RMCharacter) => {
      return {
        ...character,
        isFavorite: false,
      };
    });
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<RMCharacter>) {
      state.charactersList = state.charactersList.map((character) => {
        if (action.payload.id === character.id) {
          console.log("found what to like");
          return {
            ...character,
            isFavorite: true,
          };
        }
        return character;
      });
    },
    removeFromFavorite(state, action: PayloadAction<RMCharacter>) {
      state.charactersList = state.charactersList.map((character) => {
        if (action.payload.id === character.id) {
          return {
            ...character,
            isFavorite: false,
          };
        }
        return character;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        const results = action.payload;
        state.status = "idle";
        state.charactersList = [...state.charactersList, ...results];
        state.page += 1;
      });
  },
});

export const selectCharacters = (state: RootState) =>
  state.characters.charactersList;

export const selectFavoriteCharacters = (state: RootState) =>
  state.characters.charactersList.filter(
    (character: RMCharacter) => character.isFavorite
  );

export const selectPage = (state: RootState) => state.characters.page;

export const { addToFavorite, removeFromFavorite } = charactersSlice.actions;

export default charactersSlice.reducer;
