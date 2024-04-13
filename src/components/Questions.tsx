import React, { useEffect, useState } from "react";
import { IQuestion } from "../store/store";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

interface IQuestions {
  question: IQuestion;
}

export const Questions: React.FC<IQuestions> = ({ question }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [question]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {question.question}
      </Typography>
      {question.type === 1 ? (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1"
          name="radio-buttons-group"
        >
          {question.answers.map((answer) => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={answer}
              sx={{ marginBottom: -1 }}
            />
          ))}
        </RadioGroup>
      ) : question.type === 2 ? (
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <FormGroup>
            {question.answers.map((answer) => (
              <FormControlLabel
                control={<Checkbox />}
                label={answer}
                sx={{ marginBottom: -1 }}
              />
            ))}
          </FormGroup>
        </Box>
      ) : (
        <TextField
          id="standard-basic"
          label="Введите ответ"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="standard"
        />
      )}
    </Box>
  );
};

export default Questions;
