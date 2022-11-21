import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetApi = createAsyncThunk("layer/getLayer", async () => {
  const response = await axios.get(
    `https://geoserver.mapid.io/layers_new/get_layer?api_key=${process.env.REACT_APP_API_KEY}&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc`
  );
  return response.data.geojson.features;
});

const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    Datas: [],
    loading: false,
  },
  extraReducers: {
    [GetApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.Datas = action.payload;
      // console.log(action.payload)
    },
  },
});

export default apiDataSlice.reducer;
