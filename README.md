# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- export const fetchSingleShow = createAsyncThunk(
  "shows/fetch/single",
  async (showId, thunkAPI) => {
    try {
      // Resetting singleShow state to null before fetching new data
      thunkAPI.dispatch(showsSlice.actions.resetSingleShow());
      return await showsService.fetchSingleShow(showId);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        const statusCode = error.response.status; // HTTP status code
        const errorMessage = error.response.data.message; // Error message from server if available
        // console.log("Status Code:", statusCode);
        // console.log("Error Message:", errorMessage);

        let errorCode = null;
        if (statusCode === 404) {
          errorCode = errorConstants.ERR_404;
        } else if (statusCode === 429) {
          errorCode = errorConstants.ERR_429;
        }

        // Return rejected value with error code and message
        return thunkAPI.rejectWithValue({
          code: errorCode,
          message: errorMessage || "Server Error",
        });
      } else if (error.request) {
        // The request was made but no response was received
        // console.log("Request:", error.request);
        // Return rejected value with network error message
        return thunkAPI.rejectWithValue({
          code: error.code,
          message: "Network Error",
        });
      } else {
        // Something happened in setting up the request that triggered an error
        // console.log("Error Message:", error.message); // This might contain the 'code' like 'ERR_NETWORK'
        // Return rejected value with generic error message
        return thunkAPI.rejectWithValue({
          code: "ERR_GENERIC",
          message: "Error",
        });
      }
    }
  }
); -->