import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  FormControl,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import { getPredictions, setUserQuestion } from "../../store";

export const UserQuestion = ({ currentQuestion }) => {
  const { id, question, prediction, isAnswered, apiUrl } = currentQuestion;

  const dispatch = useDispatch();

  const [userQuestion, setQuestion] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserQuestion(userQuestion));
    dispatch(getPredictions(apiUrl));
  };
  return (
    <Grid
      container
      direction="column"
      sx={{ pt: 4, pb: 3, pl: 2, pr: 2, backgroundColor: "secondary.main" }}
    >
      { (question.length > 0) && <form onSubmit={onSubmit}>
        <FormControl sx={{ mb: 2 }} fullWidth>
          <TextField
            id={id}
            label={isAnswered ? prediction : question}
            multiline
            maxRows={4}
            sx={{ mb: 2, backgroundColor: "white" }}
            onChange={handleQuestionChange}
            disabled={isAnswered}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isAnswered}
          >
            Realizar pregunta
          </Button>
        </FormControl>
      </form>}
      {!!isAnswered && (
        <Typography color="black" variant="h6">
          {prediction}
        </Typography>
      )}
    </Grid>
  );
};
