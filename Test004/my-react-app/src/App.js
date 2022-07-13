import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./layout/AppContext";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
