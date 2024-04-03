import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktail";

export default configureStore({
  reducer: {
    app: cocktailSlice,
  },
});