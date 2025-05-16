import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSkips = createAsyncThunk(
  'skips/fetchSkips',
  async () => {
    const response = await fetch(
      'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch skips');
    }
    const data = await response.json();
    return data;
  }
);

const skipsSlice = createSlice({
  name: 'skips',
  initialState: {
    skips: [],
    loading: false,
    error: null,
    selected: null,
  },
  reducers: {
    selectSkip: (state, action) => {
      const skip = action.payload;
    
      if (!skip) {
        state.selected = null;
      } else if (state.selected?.id === skip.id) {
        state.selected = null;
      } else {
        state.selected = skip;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkips.fulfilled, (state, action) => {
        state.skips = action.payload;
        state.loading = false;
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectSkip } = skipsSlice.actions;
export default skipsSlice.reducer;
