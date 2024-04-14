import "./App.css";
import StartWindow from "./pages/StartWindow";
import { RouterProvider,  createHashRouter } from "react-router-dom";
import TestWindow from "./pages/TestWindow";
import { FinalWindow } from "./pages/FinalWindow";
import { AddQuestionWindow } from "./pages/AddQuestionWindow";

function App() {
  
  // async function Fetch() {
  //   const resp = await fetch('https://hcateringback-dev.unitbeandev.com/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       login: 'admin',
  //       password: 'admin'
  //     })
  //   })
  //   const json = resp.json()
  //   console.log(json)
  // }

  // Fetch();

  const router = createHashRouter([
    {
      path: "/",
      // поменять
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
