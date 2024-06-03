import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "./router/router"
function App() {

  return <RouterProvider router={createBrowserRouter(route)} />;
}

export default App
