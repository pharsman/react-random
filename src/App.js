import router from "./router/router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
