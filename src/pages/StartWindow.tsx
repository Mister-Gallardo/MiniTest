import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartWindow = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    sessionStorage.removeItem("time");
    sessionStorage.removeItem("step");
    navigate("/Test");
  };

  const handleAddQuestion = () => {
    navigate("/AddQuestion");
  };

  return (
    <>
      <Box
        sx={{
          width: "40vw",
          margin: "20vh auto",
          padding: "50px 0px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          backgroundColor: "ghostwhite",
        }}
      >
        <Typography variant="h3">Тестирование</Typography>
        <Typography variant="h5">
          Ограничение по времени:{" "}
          <span style={{ borderBottom: "3px solid black" }}>15 минут</span>
        </Typography>
        <Button
          onClick={handleNavigate}
          variant="contained"
          sx={{
            width: "50%",
            height: "50px",
            fontSize: "20px",
            fontWeight: 900,
          }}
        >
          Начать
        </Button>
        <Button
          onClick={handleAddQuestion}
          variant="contained"
          sx={{
            width: "50%",
            height: "50px",
            fontSize: "20px",
            fontWeight: 900,
          }}
        >
          Добавить вопрос
        </Button>
        <Typography sx={{ color: "red", marginBottom: "-10px" }}>
          Тест не поддерживается на телефонах!
        </Typography>
      </Box>
    </>
  );
};

export default StartWindow;
