import { createSlice } from "@reduxjs/toolkit";

export const doctiaSlice = createSlice({
  name: "doctia",
  initialState: {
    isLoading: false,
    isAnswered: false,
    question: "",
    prediction: "",
    currentQuestion: 0,
    conversation: [
      {
        id: "start-q",
        question: "En que puedo ayudarte hoy? / Cuéntame tus sintomas si los tienes?",
        prediction: "",
        isAnswered: false,
        apiUrl: "/ans1",
      },
    ],
    labels: {},
  },
  reducers: {
    loadingPrediction: (state) => {
      state.isLoading = true;
    },
    setUserQuestion: (state, { payload }) => {
      state.question = payload;
    },
    setPrediction: (state, { payload }) => {
      state.prediction = payload;
      state.isLoading = false;
      state.isAnswered = true;
    },
    setLabels: (state, { payload }) => {
      state.labels = payload;
    },
    setNextQuestion: (state, { payload }) => {
      //update state of current question and the prediction
      state.conversation[state.currentQuestion].isAnswered = true;
      state.conversation[state.currentQuestion].prediction =
        payload.description;
      //update count of current question
      state.currentQuestion += 1;
      //add new question to conversation
      const newQuestion = {
        id: payload.id,
        question: payload.next,
        prediction: "",
        isAnswered: false,
        apiUrl: payload.apiUrl,
      };
      state.conversation.push(newQuestion);
    },
    swapIsAnswered: (state) => {
      state.isAnswered = !state.isAnswered;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserQuestion,
  loadingPrediction,
  setPrediction,
  setLabels,
  setNextQuestion,
  swapIsAnswered,
} = doctiaSlice.actions;
