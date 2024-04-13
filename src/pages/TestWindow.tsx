import { Box, Button, Typography } from "@mui/material";
import { Steps } from "../components/Steps";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Test from "../store/store";
import Questions from "../components/Questions";
import { useNavigate } from "react-router-dom";

const TestWindow = observer(() => {
  const [number, setNumber] = useState(
    Number(sessionStorage.getItem("step")) || 0
  );
  const questions = Test.questions;
  const time = sessionStorage.getItem("time");
  const [minutes, setMinutes] = useState(Number(time?.split(",")[0]) || 15);
  const [seconds, setSeconds] = useState(Number(time?.split(",")[1]) || 0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    sessionStorage.removeItem("time");
    sessionStorage.setItem("time", `${minutes},${seconds}`);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    sessionStorage.setItem("step", number.toString());
  }, [number]);

  if (seconds === 0 && minutes === 0) {
    navigate("/Results");
  }

  function handleNumber() {
    setNumber((prev) => prev + 1);
    console.log(number, questions.length);
  }

  function handleNavigate() {
    navigate("/Results");
  }

  return (
    <Box
      sx={{
        width: "85vw",
        height: "65vh",
        backgroundColor: "ghostwhite",
        borderRadius: "25px",
        margin: "15vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "35px 35px",
      }}
    >
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Тестирование
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "3px 6px",
            border: "2px solid black",
            borderRadius: "8px",
          }}
        >
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </Typography>
      </Box>
      <Steps currentStep={number} stepCount={questions.length} />
      <Questions question={questions[number]} />
      <Button
        onClick={
          number + 1 === questions.length ? handleNavigate : handleNumber
        }
        variant="contained"
        sx={{ width: "300px", ":hover": { backgroundColor: "red" } }}
      >
        {number + 1 === questions.length ? "Закончить" : "Ответить"}
      </Button>
    </Box>
  );
});

export default TestWindow;
