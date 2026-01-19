import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import "../assets/styles/App.css";
const App = () => {
  const element = useRoutes(appRoutes);
  return element;
};

export default App;
