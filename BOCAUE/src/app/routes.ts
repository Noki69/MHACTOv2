import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TouristSpots } from "./pages/TouristSpots";
import { Culture } from "./pages/Culture";
import { Programs } from "./pages/Programs";
import { Inquiry } from "./pages/Inquiry";
import { SpotDetail } from "./pages/SpotDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "tourist-spots", Component: TouristSpots },
      { path: "tourist-spots/:id", Component: SpotDetail },
      { path: "culture", Component: Culture },
      { path: "programs", Component: Programs },
      { path: "inquiry", Component: Inquiry },
      { path: "*", Component: NotFound },
    ],
  },
]);