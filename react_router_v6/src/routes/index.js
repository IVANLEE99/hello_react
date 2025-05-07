import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import News from "../pages/News";
import Messages from "../pages/Messages";
import Detail from "../pages/News/Detail";

export default [
  { path: "/about", element: <About /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
        children: [{ path: "detail/:id/:title/:content", element: <Detail /> }],
      },
      { path: "messages", element: <Messages /> },
    ],
  },
  { path: "/", element: <Navigate to="/about" /> },
];
