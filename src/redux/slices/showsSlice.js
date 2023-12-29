import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showsService from "../services/showsService";
import errorConstants from "../../constant/errorConstants";

export const fetchAllShows = createAsyncThunk(
  "shows/fetch/all",
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows();
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;

        let errorCode = null;
        if (statusCode === 404) {
          errorCode = errorConstants.ERR_404;
        } else if (statusCode === 429) {
          errorCode = errorConstants.ERR_429;
        }

        return thunkAPI.rejectWithValue({
          code: errorCode,
          message: errorMessage || "Server Error",
        });
      } else if (error.request) {
        return thunkAPI.rejectWithValue({
          code: error.code,
          message: "Network Error",
        });
      } else {
        return thunkAPI.rejectWithValue({
          code: "ERR_GENERIC",
          message: "Error",
        });
      }
    }
  }
);

export const fetchSingleShow = createAsyncThunk(
  "shows/fetch/single",
  async (showId, thunkAPI) => {
    try {
      // Resetting singleShow state to null before fetching new data
      thunkAPI.dispatch(showsSlice.actions.resetSingleShow());
      return await showsService.fetchSingleShow(showId);
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;
        let errorCode = null;
        if (statusCode === 404) {
          errorCode = errorConstants.ERR_404;
        } else if (statusCode === 429) {
          errorCode = errorConstants.ERR_429;
        }

        return thunkAPI.rejectWithValue({
          code: errorCode,
          message: errorMessage || "Server Error",
        });
      } else if (error.request) {
        return thunkAPI.rejectWithValue({
          code: error.code,
          message: "Network Error",
        });
      } else {
        return thunkAPI.rejectWithValue({
          code: "ERR_GENERIC",
          message: "Error",
        });
      }
    }
  }
);

const initialState = {
  shows: [],
  singleShow: null,
  isLoading: {
    fetchAllShows: false,
    fetchSingleShow: false,
  },
  isError: {
    fetchAllShows: false,
    fetchSingleShow: false,
  },
  isSuccess: {
    fetchAllShows: false,
    fetchSingleShow: false,
  },
  error: null,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    resetSingleShow: (state) => {
      state.singleShow = null;
      // state.isLoading.fetchSingleShow = false;
      // state.isSuccess.fetchSingleShow = false;
      // state.isError.fetchSingleShow = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isLoading.fetchAllShows = true;
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.shows = action.payload;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = true;
        state.isError.fetchAllShows = false;
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.isLoading.fetchAllShows = false;
        state.isError.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleShow.pending, (state) => {
        state.isLoading.fetchSingleShow = true;
      })
      .addCase(fetchSingleShow.fulfilled, (state, action) => {
        state.singleShow = action.payload;
        state.isLoading.fetchSingleShow = false;
        state.isSuccess.fetchSingleShow = true;
        state.isError.fetchSingleShow = false;
      })
      .addCase(fetchSingleShow.rejected, (state, action) => {
        state.isLoading.fetchSingleShow = false;
        state.isSuccess.fetchSingleShow = false;
        state.isError.fetchSingleShow = true;
        state.error = action.payload;
      });
  },
});

export default showsSlice.reducer;
