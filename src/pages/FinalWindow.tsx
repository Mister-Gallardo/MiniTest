import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FinalWindow = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <Box
      sx={{
        width: "40vw",
        height: "30vh",
        margin: "25vh auto",
        backgroundColor: "ghostwhite",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: '35px',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Тест завершен
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ fontSize: "20px" }}
        onClick={handleNavigate}
      >
        Вернуться
      </Button>
    </Box>
  );
};
