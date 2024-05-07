// triviaSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchTriviaQuestions } from '../../services/api';

const initialState = {
  triviaQuestions: null,
  loading: false,
  error: null,
};

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers: {
    fetchTriviaRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTriviaSuccess: (state, action) => {
      state.loading = false;
      state.triviaQuestions = action.payload;
    },
    fetchTriviaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTriviaRequest, fetchTriviaSuccess, fetchTriviaFailure } = triviaSlice.actions;

export const fetchTrivia = (topic) => async (dispatch) => {
  dispatch(fetchTriviaRequest());
  try {
    const response = await fetchTriviaQuestions(topic);
    dispatch(fetchTriviaSuccess(response.data.triviaQuestions));
  } catch (error) {
    dispatch(fetchTriviaFailure('Failed to fetch trivia questions'));
  }
};

export default triviaSlice.reducer;
