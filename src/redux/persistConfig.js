import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

const persistConfig = {
  key: "root", // Key for the persistor
  version: 1,
  storage, // Storage engine (localStorage, sessionStorage, etc.)
};

export default persistConfig;