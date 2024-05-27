import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";

function App() {

  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default App
