import { getEnvVariables } from "../../helpers";
import {
  loadingPrediction,
  setPrediction,
  setLabels,
  setNextQuestion,
} from "./doctiaSlice";
import axios from "axios";

const { VITE_API_URL } = getEnvVariables();

export const getPredictions = (apiUrl) => {
  return async (dispatch, getState) => {
    const { question } = getState().doctia;

    dispatch(loadingPrediction());

    // * peticion al backend
    const doctiaAPI = axios.create({
      baseURL: VITE_API_URL,
    });
    const { data } = await doctiaAPI.post(apiUrl, {
      question: question,
    });
    const { nextQuestion } = data;
    console.log({ nextQuestion });

    dispatch(setPrediction(nextQuestion.description));
    dispatch(setNextQuestion(nextQuestion));
    dispatch(setLabels(data.prediction.labels));
    // console.log(data.prediction.labels);
  };
};
