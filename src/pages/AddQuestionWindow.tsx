import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import { useRef, useState } from "react";
import Test, { IQuestion } from "../store/store";
import { useNavigate } from "react-router-dom";

export const AddQuestionWindow = observer(() => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);
  const [added, setAdded] = useState(false);
  const question = useRef("");
  const answer = useRef("");

  function handleAddQuestion() {
    const questionForAdd: IQuestion = {
      id: Test.questions.length + 1,
      type: number,
      question: question?.current?.value,
      answers: answer?.current?.value.split(","),
    };
    Test.addQuestion(questionForAdd);
    setAdded(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <Box
      sx={{
        width: "50vw",
        height: "50vh",
        margin: "25vh auto",
        backgroundColor: "ghostwhite",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        gap: "10px",
      }}
    >
      {!added ? (
        <>
          <Typography variant="h5">Выберите тип вопроса</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={"Выбор одного варианта"}
              sx={{ marginBottom: -1 }}
              onClick={() => setNumber(1)}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={"Выбор нескольких вариантов"}
              sx={{ marginBottom: -1 }}
              onClick={() => setNumber(2)}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={"Развернутый ответ"}
              sx={{ marginBottom: -1 }}
              onClick={() => setNumber(3)}
            />
          </RadioGroup>
          <TextField
            variant="standard"
            label="Введите вопрос"
            inputRef={question}
          ></TextField>
          <TextField
            variant="standard"
            label={
              number === 3
                ? "Введите ответ"
                : "Введите ответы через запятую без пробелов (css,html,js)"
            }
            inputRef={answer}
          ></TextField>
          <Button variant="contained" onClick={handleAddQuestion}>
            Добавить
          </Button>
        </>
      ) : (
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Вопрос успешно добавлен!
        </Typography>
      )}
    </Box>
  );
});
