import Root from "./root";

import { Home } from "../pages/Home";
import { About, dataLoader } from "../pages/About";
import { Contact } from "../pages/Contact";
import { DogURL } from "../pages/DogURL";
import { NotFound } from "../pages/NotFound";

const prefix = "/games/oneadmin/front";
const isLocal = window.location.href.includes("localhost");

const routes = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
        loader: dataLoader,
        errorElement: ["An error occurred!"],
      },
      {
        path: "dogUrl",
        element: <DogURL />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
].map((el) => ({ ...el, path: isLocal ? el.path : `${prefix}/${el.path}` }));

export default routes;
