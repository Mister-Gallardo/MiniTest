import "./App.css";
import StartWindow from "./pages/StartWindow";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TestWindow from "./pages/TestWindow";
import { FinalWindow } from "./pages/FinalWindow";
import { AddQuestionWindow } from "./pages/AddQuestionWindow";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartWindow />,
    },
    {
      path: "/Test",
      element: <TestWindow />,
    },
    {
      path: "/Results",
      element: <FinalWindow />,
    },
    {
      path: "/AddQuestion",
      element: <AddQuestionWindow />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
