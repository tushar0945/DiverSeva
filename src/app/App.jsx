import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import WhatsAppButton from "../components/common/WhatsAppButton";
import "../assets/styles/App.css";

const App = () => {
  const element = useRoutes(appRoutes);

  return (
    <>
      {element}
      <WhatsAppButton />
    </>
  );
};

export default App;
