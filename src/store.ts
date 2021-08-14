import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface DataState {
  readme: string;
  experience: string;
  projects: string;
  loading: boolean;
}

// Define the initial state using that type
const initialState: DataState = {
  readme: "",
  experience: "",
  projects: "",
  loading: false,
};

export const dataSlice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setReadme: (state, action: PayloadAction<string>) => {
      let { payload } = action;
      payload = payload
        .replace("PROJECTS.md", "projects")
        .replace("EXPERIENCE.md", "experience");
      state.readme = payload;
    },
    setProjects: (state, action: PayloadAction<string>) => {
      let { payload } = action;
      payload = payload.replace(" ", " ");
      state.projects = payload;
    },
    setExperience: (state, action: PayloadAction<string>) => {
      let { payload } = action;
      payload = payload.replace(" ", " ");
      state.experience = payload;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setReadme,
  setExperience,
  setProjects,
} = dataSlice.actions;

const store = configureStore({ reducer: { data: dataSlice.reducer } });
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
