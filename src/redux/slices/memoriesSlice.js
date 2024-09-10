import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memoriesData: [
    {
      id: 1,
      user: 1,
      photo:
        "https://science.nasa.gov/wp-content/uploads/2023/11/9827327865_98e0f0dc2d_o.jpg",
      description: "Tenc xary eli",
      location: "sevan toli ijevam",
      timestamp: "2024-09-01T15:14:24.806887Z",
      rated_feelings: [
        {
          id: 1,
          feeling: { id: 1, name: "Happiness", description: "Happiness" },
          rating: 70,
        },
        {
          id: 2,
          feeling: { id: 2, name: "Sadness", description: "Sadness" },
          rating: 20,
        },
      ],
    },
    {
      id: 2,
      user: 1,
      photo: null,
      description: "Test",
      location: null,
      timestamp: "2024-09-01T15:54:56.312393Z",
      rated_feelings: [],
    },
    {
      id: 3,
      user: 1,
      photo: null,
      description: "a",
      location: null,
      timestamp: "2024-09-01T15:59:54.289454Z",
      rated_feelings: [],
    },
  ],
};

const memoriedSlice = createSlice({
  name: "memories",
  initialState,
  reducers: {},
});

export const {} = memoriedSlice.actions;
export default memoriedSlice.reducer;
